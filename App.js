import React, { useState } from 'react';
import './App.css';
import SearchPage from './SearchPage.js';

function App() {
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const [filterBy, setFilterBy] = useState('');

  const handleFilterChange = (event) => {
    setFilterBy(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch('http://localhost:8000/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ searchText }),
      });
      const data = await response.json();
      setSearchResult(data.result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleFilterButton = () => {
    handleSearch();
  };

  return (
    <div className="app">
      <h1>CRUD Application</h1>
      <div>
        <label htmlFor="filterBy">Filter By:</label>
        <select id="filterBy" value={filterBy} onChange={handleFilterChange}>
          <option value="">None</option>
          <option value="firstName">First Name</option>
          <option value="lastName">Last Name</option>
        </select>
      </div>
      <SearchPage filterBy={filterBy} />
      <div className="search-result">
        {searchResult && <p>Search Result: {searchResult}</p>}
      </div>
      {/* Your other components and JSX code go here */}
    </div>
  );
}

export default App;
