import React from "react";

const Track = (props) => {
  const { track, addToPlaylist } = props;

  const handleAddToPlaylist = () => {
    addToPlaylist(track);
  }

  return ( 
    <div className='track'>
      <div className='album-image'>
        <img src={track.album.images[2].url} alt={track.album.name} />
      </div>
      <div className='track-info'>
        <p className='track-name'>{track.name} {track.explicit ? <span className='explicit-tag'>E</span> : null}</p>
        <p className='artist-name'>{track.artists.map((artist) => artist.name).join(', ')}</p>
      </div>
      <div>
        <button onClick={handleAddToPlaylist}>+</button>
      </div>
    </div>
  );
}

export default Track;
