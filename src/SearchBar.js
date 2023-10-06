import React, { useState } from 'react';

// Define the SearchBar component
const SearchBar = ({ onSearch }) => {
  // State to store the search input value
  const [search, setSearch] = useState('');

  // Function to handle search when the "Search" button is clicked
  const handleSearch = () => {
    onSearch(search);
  };

  // Function to handle search when the Enter key is pressed
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      {/* Search input field */}
      <div>
        <input
          type="text"
          name="search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      {/* Search button */}
      <div>
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
