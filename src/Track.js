import React from "react";

const Track = (props) => {

    const { track, addToPlaylist } = props;

    const handleAddToPlaylist = () => {
        addToPlaylist(track)
    }
    

    return ( 
        <div className='track'>
            <div className='track-header'>
                <div className="song-info">
                    <p>{track.name}</p>
                    <p>{track.artist}</p>
                    <p>{track.album}</p>
                </div>
                <div className="track-buttons">
                    <button onClick={handleAddToPlaylist}>Add to Playlist</button>
                    <button>Save to Spotify</button>
                </div>
            </div>
            
        </div>
     );
}
 
export default Track;