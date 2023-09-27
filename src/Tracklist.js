import React from 'react'
import Track from "./Track";

const Tracklist = (props) => {
    const { tracks, addToPlaylist } = props


    return ( 
        <div>
            {tracks.map((song, index) => (
            <Track key={index} track={song} addToPlaylist={addToPlaylist}/>
            ))}
            
        </div>
     );
}
 
export default Tracklist;