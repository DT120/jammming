import React from "react";

// Define the Track component
const Track = (props) => {
    // Destructure props to get track and addToPlaylist function
    const { track, addToPlaylist } = props;

    // Function to handle adding the track to the playlist
    const handleAddToPlaylist = () => {
        addToPlaylist(track);
    }

    return ( 
        <div className='track'>
            <div className='track-header'>
                {/* Display track information */}
                <div className="song-info">
                    <p>{track.name}</p>
                    <p>{track.artist}</p>
                    <p>{track.album}</p>
                </div>
                {/* Buttons for adding to the playlist and saving to Spotify */}
                <div className="track-buttons">
                    <button onClick={handleAddToPlaylist}>Add to Playlist</button>
                    <button>Save to Spotify</button>
                </div>
            </div>
        </div>
     );
}
 
export default Track;
