// Function to redirect the user to Spotify's authorization page
export function redirectToSpotify() {
  const client_id = 'eac0a050b17d4ea2a929097665a69acd';
  const redirect_uri = 'http://localhost:3000/callback';
  const stateKey = 'spotify_auth_state';
  const scope = 'user-read-private user-read-email playlist-modify-public playlist-modify-private playlist-modify-public playlist-modify-private';
  const show_dialog = true;

  // Generate a random state for security purposes
  const state = generateRandomString(16);
  localStorage.setItem(stateKey, state); // Store the state in local storage

  // Construct the authorization URL with the necessary parameters and redirect the user
  const authorizationUrl = 'https://accounts.spotify.com/authorize' +
    '?client_id=' + encodeURIComponent(client_id) +
    '&response_type=token' +
    '&redirect_uri=' + encodeURIComponent(redirect_uri) +
    '&state=' + encodeURIComponent(state) +
    '&scope=' + encodeURIComponent(scope) +
    '&show_dialog=' + show_dialog;

  // Log the generated authorization URL for debugging
  console.log('Authorization URL:', authorizationUrl);

  window.location.href = authorizationUrl; // Redirect the user to Spotify for authorization
}

// Helper function to generate a random string of the given length
function generateRandomString(length) {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}


// Function to extract the access token and its expiration from the URL fragment
export function extractAccessToken() {
  const currentUrl = window.location.href;
  const urlFragment = currentUrl.split('#')[1]; // Split URL at '#' to get the fragment
  if (urlFragment) { // Check if fragment exists
    const urlParams = new URLSearchParams(urlFragment); // Parse URL fragment into parameters
    const accessToken = urlParams.get('access_token'); // Get the 'access_token' parameter
    const expiresAt = urlParams.get('expires_in'); // Get the 'expires_in' parameter
    if (accessToken && expiresAt) {
      const expirationTimestamp = Date.now() + parseInt(expiresAt, 10) * 1000; // Calculate the token expiration timestamp

      // Set the access token and expiration timestamp in local storage
      localStorage.setItem('access_token', accessToken);
      localStorage.setItem('token_expiration', expirationTimestamp);

      return accessToken;
    }
  }
  return null;
}

// Function to check if the access token is still valid
export function isAccessTokenValid() {
  const accessToken = localStorage.getItem('access_token');
  const expirationTimestamp = localStorage.getItem('token_expiration');
  const currentTime = Date.now();

  return accessToken && expirationTimestamp && currentTime < expirationTimestamp;
}

// Function to redirect the user to Spotify if the token is missing or expired
export function handleAccessToken() {
  if (!isAccessTokenValid()) {
    // Access token is missing or expired, redirect the user to Spotify for reauthorization
    redirectToSpotify();
  }
}


// Function to get the current user's profile
export async function getUserProfileId(accessToken) {
  const cors = 'https://cors-anywhere.herokuapp.com/';
  const apiUrl = cors + 'https://api.spotify.com/v1/me'; // Spotify API endpoint to get user data

  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers,
    });

    if (response.ok) {
      const userData = await response.json();
      console.log('User Data:', userData)
      console.log('User ID:', userData.id); // Log user id
      return userData.id;
    } else {
      console.error('API Request Error:', response.statusText);
      console.error('API Response Status Code:', response.status);
      return null;
    }
  } catch (error) {
    console.error('API Request Error:', error);
    return null;
  }
}

// Function to search for tracks on Spotify using the provided access token
export async function searchSpotify(query, accessToken) {
  handleAccessToken(); // Check access token validity
  const cors = 'https://cors-anywhere.herokuapp.com/';
  const apiUrl = cors + 'https://api.spotify.com/v1/search?q=' + encodeURIComponent(query) + '&type=track';
  const headers = {
    Authorization: `Bearer ${accessToken}`, // Add the access token to the headers
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers,
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data; // Return the search results if the response is successful
    } else {
      console.error('API Request Error:', response.statusText); // Log an error if the request is not successful
      // Log the response status code for debugging
      console.error('API Response Status Code:', response.status);
      return [];
    }
  } catch (error) {
    console.error('API Request Error:', error); // Log an error if an exception occurs during the request
    return [];
  }
}

// Function for creating playlist
export async function createPlaylist(accessToken, userId, playlistName) {
  const cors = 'https://cors-anywhere.herokuapp.com/';
  const apiUrl = cors + 'https://api.spotify.com/v1/users/' + encodeURIComponent(userId) + '/playlists';
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };

  // Define the data for creating the playlist
  const data = {
    name: playlistName,
    public: false, // Change to true if you want the playlist to be public
    collaborative: false, // Change to true if you want the playlist to be collaborative
    description: 'My Jammming Playlist on Spotify',
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(data), // Convert data to JSON and send it in the request body
    });

    if (response.ok) {
      const playlist = await response.json();
      console.log(playlist);
      return playlist; // Return the created playlist if the response is successful
    } else {
      console.error('API Request Error:', response.statusText);
      // Log the response status code for debugging
      console.error('API Response Status Code:', response.status);
      return null;
    }
  } catch (error) {
    console.error('API Request Error:', error);
    return null;
  }
}

export async function addTracksToPlaylist(accessToken, playlistId, trackURIs) {
  const cors = 'https://cors-anywhere.herokuapp.com/';
  const apiUrl = `${cors}https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };

  // Define the data for adding tracks to the playlist
  const data = {
    uris: trackURIs, // An array of track URIs to add to the playlist
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(data), // Convert data to JSON and send it in the request body
    });

    if (response.ok) {
      const result = await response.json();
      console.log('Tracks added to the playlist:', result);
      return result; // Return the result if the response is successful
    } else {
      console.error('API Request Error:', response.statusText);
      // Log the response status code for debugging
      console.error('API Response Status Code:', response.status);
      return null;
    }
  } catch (error) {
    console.error('API Request Error:', error);
    return null;
  }
}
