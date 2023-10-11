import React, { useState, useEffect } from 'react';
import './App.css';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import SearchBar from './SearchBar';
import * as API from './utils/API'; // Import functions under the alias 'API'

function App() {
  // State for the playlist name and all available tracks
  const [playlistName, setPlaylistName] = useState('');
  const [playlist, setPlaylist] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [filteredTracks, setFilteredTracks] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false); // Track login state

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    const accessToken = API.extractAccessToken();
    if (accessToken) {
      setLoggedIn(true);
    }
  }, []);

   // Function to handle search when the Enter key is pressed
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
        // Update filteredTracks with search results
        console.log('Tracks:', data.tracks.items);

        setTracks(data.tracks.items);
        //setFilteredTracks(data);
      })
      .catch((error) => {
        console.error('Error searching Spotify:', error);
      });
  };

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    const accessToken = API.extractAccessToken();
    if (accessToken) {
      setLoggedIn(true);
    }
  }, []);

  // Add a track to the playlist
  const addToPlaylist = (track) => {
    setPlaylist([...playlist, track]);
  };

  // Remove a track from the playlist
  const removeFromPlaylist = (trackToRemove) => {
    const updatedPlaylist = playlist.filter((track) => track !== trackToRemove);
    setPlaylist(updatedPlaylist);
  };

  // Function to save the playlist
  const savePlaylist = () => {
    // Check if the playlist name is not empty
    if (playlistName.trim() !== '') {
      // Here, you can send the playlist data and the playlistName to your server or perform any desired action
      // For now, we'll just log the name and the tracks in the console
      console.log('Playlist Name:', playlistName);
      console.log('Playlist Tracks:', playlist);
      // Clear the playlist name input field
      setPlaylistName('');
      // Clear the playlist
      setPlaylist([]);
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
              <button className="signin-button" onClick={API.redirectToSpotify}>
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
                {/* Display the playlist */}
                {/* Input field for the playlist name */}
                <h2>
                  <input
                    type="text"
                    placeholder="Enter Playlist Name"
                    value={playlistName}
                    onChange={(e) => setPlaylistName(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
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