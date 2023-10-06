import React, { useState } from 'react';
import './App.css';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import SearchBar from './SearchBar';

function App() {
  // State for the playlist and all available tracks
  const [playlist, setPlaylist] = useState([]);
  const [tracks] = useState([
    {
      id: 0,
      name: 'DUCKWORTH',
      artist: 'Kendrick Lamar',
      album: 'DAMN',
    },
    {
      id: 1,
      name: 'Lose Yourself',
      artist: 'Eminem',
      album: '8 Mile SoundTrack',
    },
    {
      id: 2,
      name: 'Amili',
      artist: 'Lil Wayne',
      album: 'Tha Carter III',
    },
    {
      id: 3,
      name: 'Fall',
      artist: 'Eminem',
      album: 'Kamakaze',
    },
  ]);

  // State for filtered tracks based on search
  const [filteredTracks, setFilteredTracks] = useState(tracks);

  // Handle search function
  const handleSearch = (searchQuery) => {
    // Filter tracks based on the search query
    const filtered = tracks.filter((song) => {
      const { name, artist, album } = song;
      return (
        name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
        album.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });

    // Update the filteredTracks state
    setFilteredTracks(filtered);
  };

  // Add a track to the playlist
  const addToPlaylist = (track) => {
    setPlaylist([...playlist, track]);
  };

  // Remove a track from the playlist
  const removeFromPlaylist = (trackToRemove) => {
    const updatedPlaylist = playlist.filter((track) => track !== trackToRemove);
    setPlaylist(updatedPlaylist);
  };

  return (
    <div className="App">
      <header>
        <h1>Jammming</h1>
      </header>
      <div className="content-container">
        <div className="column">
          {/* SearchBar component with onSearch prop */}
          <SearchBar onSearch={handleSearch} />
          {/* Display the results */}
          <h2>Results</h2>
          <SearchResults tracks={filteredTracks} addToPlaylist={addToPlaylist} />
        </div>
        <div className="column">
          {/* Display the playlist */}
          <h2>Playlist</h2>
          <Playlist tracks={playlist} removeFromPlaylist={removeFromPlaylist} />
        </div>
      </div>
    </div>
  );
}

export default App;
