import React from 'react';
import Tracklist from './Tracklist';

// Define the SearchResults component
const SearchResults = (props) => {
  // Destructure props to get tracks and addToPlaylist function
  const { tracks, addToPlaylist } = props;

  return (
    <div>
      {/* Display the list of tracks using the Tracklist component */}
      <div>
        <Tracklist tracks={tracks} addToPlaylist={addToPlaylist} />
      </div>
    </div>
  );
};

export default SearchResults;
