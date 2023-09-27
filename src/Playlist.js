import React from 'react';

const Playlist = (props) => {
  const { tracks, removeFromPlaylist } = props;

  const handleRemoveFromPlaylist = (track) => {
    removeFromPlaylist(track);
  };

  return (
    <div className='playlist-track'>
      <div className='playlist-track-header'>
        {tracks.map((track, index) => (
          <div className="playlist-song-info" key={index}>
            <p>{track.name}</p>
            <p>{track.artist}</p>
            <p>{track.album}</p>
            <div className="track-buttons">
              <button onClick={() => handleRemoveFromPlaylist(track)}>
                Remove from Playlist
              </button>
              <button>Save to Spotify</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
