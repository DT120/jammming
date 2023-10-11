export function extractAccessToken() {
    const currentUrl = window.location.href;
    const urlFragment = currentUrl.split('#')[1];
    if (urlFragment) {
      const urlParams = new URLSearchParams(urlFragment);
      const accessToken = urlParams.get('access_token');
      return accessToken;
    }
    return null;
  }
  
  export async function searchSpotify(query, accessToken) {
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = cors + 'https://api.spotify.com/v1/search?q=' + encodeURIComponent(query) + '&type=track';
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
  
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers,
      });
  
      // Log the request URL and headers for debugging
      console.log('API Request URL:', apiUrl);
      console.log('API Request Headers:', headers);
  
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        return data; // Return the search results
      } else {
        console.error('API Request Error:', response.statusText);
        // Log the response status code for debugging
        console.error('API Response Status Code:', response.status);
        return [];
      }
    } catch (error) {
      console.error('API Request Error:', error);
      return [];
    }
  }
  
  export function redirectToSpotify() {
    // Implement your redirection logic here
    const client_id = 'eac0a050b17d4ea2a929097665a69acd';
    const redirect_uri = 'http://localhost:3000/callback';
    const stateKey = 'spotify_auth_state';
    const scope = 'user-read-private user-read-email';
    const show_dialog = false;
  
    // Generate a random state
    const state = generateRandomString(16);
    localStorage.setItem(stateKey, state);
  
    // Construct the authorization URL and redirect
    const authorizationUrl = 'https://accounts.spotify.com/authorize' +
      '?client_id=' + encodeURIComponent(client_id) +
      '&response_type=token' +
      '&redirect_uri=' + encodeURIComponent(redirect_uri) +
      '&state=' + encodeURIComponent(state) +
      '&scope=' + encodeURIComponent(scope) +
      '&show_dialog=' + show_dialog;
    
    // Log the generated authorization URL for debugging
    console.log('Authorization URL:', authorizationUrl);
  
    window.location.href = authorizationUrl;
  }
  
  function generateRandomString(length) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
  
    return text;
  }
  