import React, { useState, useEffect } from 'react';
import './App.css';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import SearchBar from './SearchBar';
import * as API from './utils/API'; // Import functions under the alias 'API'

function App() {
  // State for the playlist name and all available tracks and login state
  const [playlistName, setPlaylistName] = useState('');
  const [playlist, setPlaylist] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    const accessToken = API.extractAccessToken();
    if (accessToken) {
      setLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    // Check if the access token is valid, and if not, handle it
    if (!API.isAccessTokenValid()) {
      API.handleAccessToken();
    }
  }, []);

  const handleLogin = () => {
    API.redirectToSpotify();
  }

  // Function to handle when the Enter key is pressed
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.target.blur();
    }
  };

  // Function to handle search
  const handleSearch = (searchQuery) => {
    const accessToken = API.extractAccessToken();
    if (!accessToken) {
      console.error('Access Token is null or empty.');
      return;
    }

    // Log the access token for debugging
    console.log('Access Token:', accessToken);

    // Call searchSpotify function with the searchQuery and access token
    API.searchSpotify(searchQuery, accessToken)
      .then((data) => {
        console.log('Data from Spotify API:', data);
        console.log('Tracks:', data.tracks.items);
        // Update tracks with search results
        setTracks(data.tracks.items);
      })
      .catch((error) => {
        console.error('Error searching Spotify:', error);
      });
  };

  // Add a track to the playlist
  const addToPlaylist = (track) => {
    // Check if the track is already in the playlist
    if (!playlist.includes(track)) {
      setPlaylist([...playlist, track]);
    } else {
      // Display a message indicating that the track is a duplicate
      alert('This track is already in your playlist.');
    }
  };

  // Remove a track from the playlist
  const removeFromPlaylist = (trackToRemove) => {
    // Add a confirmation dialog to confirm removal
    const confirmRemove = window.confirm('Are you sure you want to remove this track from the playlist?');
    if (confirmRemove) {
      const updatedPlaylist = playlist.filter((track) => track !== trackToRemove);
      setPlaylist(updatedPlaylist);
    }
  };

  const savePlaylist = async () => {
    // Check if the playlist name is not empty
    if (playlistName.trim() !== '') {
      const accessToken = API.extractAccessToken();
      try {
        const userId = await API.getUserProfileId(accessToken);
        const newPlaylist = await API.createPlaylist(accessToken, userId, playlistName);

        if (newPlaylist) {
          const playlistId = newPlaylist.id; // Get the ID of the newly created playlist

          // Extract the track URIs from the playlist
          const trackURIs = playlist.map((track) => track.uri);

          // Add the tracks to the playlist
          const addTracksResponse = await API.addTracksToPlaylist(accessToken, playlistId, trackURIs);

          if (addTracksResponse) {
            // Log the name and the tracks in the console
            console.log('Playlist Name:', playlistName);
            console.log('Playlist Tracks:', playlist);
            // Clear the playlist name input field
            setPlaylistName('');
            // Clear the playlist
            setPlaylist([]);
          } else {
            console.error('Error adding tracks to the playlist.');
          }
        } else {
          console.error('Error creating the playlist.');
        }
      } catch (error) {
        console.error('Error saving playlist:', error);
      }
    } else {
      // Handle the case where the playlist name is empty
      alert('Please enter a playlist name.');
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Jammming</h1>
      </header>
      <div className="container mt-4">
        {/* Conditionally render the sign-in button */}
        {!loggedIn ? (
          <div className="row">
            <div className="col-md-6">
              <button className="signin-button" onClick={handleLogin}>
                Sign In with Spotify
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="row">
              <div className="col-md-6">
                {/* SearchBar component with onSearch prop */}
                <SearchBar onSearch={handleSearch} />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-6">
                {/* Display the results */}
                <h2>Results</h2>
                <SearchResults tracks={tracks} addToPlaylist={addToPlaylist} />
              </div>
              <div className="col-md-6">
                {/* Input field for the playlist name */}
                <h2>
                  <input
                    type="text"
                    placeholder="Enter Playlist Name"
                    value={playlistName}
                    onChange={(e) => setPlaylistName(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                  {/* Display the playlist */}
                </h2>
                <Playlist tracks={playlist} removeFromPlaylist={removeFromPlaylist} />
                <div className="text-center mt-4">
                  {/* Center the buttons */}
                  <button className="save-button" onClick={savePlaylist}>
                    <i className="fa fa-spotify"></i> Save to Spotify
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
