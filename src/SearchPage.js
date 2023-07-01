import React, { useState } from 'react';
import axios from 'axios';

function SearchPage() {
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000', {
        searchText: searchText
      });

      const data = response.data;
      // Handle the search result
      setSearchResult(data.result);
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a name"
        value={searchText}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {/* Display the search result */}
        {searchResult && <p>Search Result: {searchResult}</p>}
      </div>
    </div>
  );
}

export default SearchPage;
