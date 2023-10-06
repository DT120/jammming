import React from 'react';
import Track from './Track';

// Define the Tracklist component
const Tracklist = (props) => {
  // Destructure props to get tracks and addToPlaylist function
  const { tracks, addToPlaylist } = props;

  return (
    <div>
      {/* Map through tracks and render individual tracks using the Track component */}
      {tracks.map((track, index) => (
        <Track key={index} track={track} addToPlaylist={addToPlaylist} />
      ))}
    </div>
  );
};

export default Tracklist;
