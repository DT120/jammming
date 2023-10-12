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
    <div className="playlist-track">
      <div className="playlist-track-header">
        {tracks.map((track, index) => (
          <div className="track" key={index}>
            <div className="album-image">
              <img src={track.album.images[2].url} alt={track.album.name} />
            </div>
            <div className="track-info">
              <p className="track-name">{track.name} {track.explicit ? <span className='explicit-tag'>E</span> : null}</p>
              <p className="artist-name">{track.artists.map((artist) => artist.name).join(', ')}</p>
            </div>
            <div className="track-buttons">
              <button onClick={() => handleRemoveFromPlaylist(track)}>-</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Playlist;
