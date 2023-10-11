import React from 'react';

// Define the Playlist component
const Playlist = (props) => {
  // Destructure props to get tracks and removeFromPlaylist function
  const { tracks, removeFromPlaylist } = props;

  // Function to handle removing a track from the playlist
  const handleRemoveFromPlaylist = (track) => {
    removeFromPlaylist(track);
  };

  return (
    <div className='playlist-track'>
      <div className='playlist-track-header'>
        {/* Map through tracks and render individual playlist items */}
        {tracks.map((track, index) => (
          <div className="playlist-song-info" key={index}>
            {/* Display track information */}
            <p>{track.name}</p>
            <p>{track.artists[0].name}</p>
            <p>{track.album.name}</p>
            {/* Buttons for removing from the playlist and saving to Spotify */}
            <div className="track-buttons">
              <button onClick={() => handleRemoveFromPlaylist(track)}>
                -
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
