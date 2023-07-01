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
      const response = await fetch('http://127.0.0.1:8000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ searchText }),
      });

      // Make a GET request to retrieve all books
      fetch("http://127.0.0.1:8000")
        .then(response => response.json())
        .then(data => {
          console.log(data); // Process the retrieved books
        })
        .catch(error => {
          console.error("Error:", error);
        });

      // Make a POST request to create a new book
      const bookData = {
        id: "id",
        first_name: "first_name",
        last_name: "last_name",
        book_name: "book_name"
      };

      fetch("http://127.0.0.1:8000", {
        method: "POST",
        body: JSON.stringify(bookData)
      })
        .then(response => response.text())
        .then(data => {
          console.log(data); // Process the response from creating a book
        })
        .catch(error => {
          console.error("Error:", error);
        });

      const data = await response.json();
      setSearchResult(data.result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  //const handleInputChange = (event) => {
    //setSearchText(event.target.value);
  //};

  //const handleFilterButton = () => {
  //  handleSearch();
  //};

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
