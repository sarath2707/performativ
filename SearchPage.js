import React, { useState } from 'react';
import axios from 'axios';

function SearchComponent() {
  const [inputText, setInputText] = useState('');

  const handleSearch = () => {
    axios.post('/SearchPage', { searchText: inputText })
      .then(response => {
        // Handle the response data
        console.log(response.data);
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });
  };

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputText} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchComponent;
