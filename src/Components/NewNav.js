import React, { useState } from "react";
import { Link } from "react-router-dom";

function NewNav({ fetchSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value); // Update the state with the input value
  };

  const handleSearch = () => {
    //console.log("Search Term:", searchTerm);
    if(!searchTerm) return;
    fetchSearch(searchTerm); // Call the fetchSearch function with the input value
  };

  return (
    <div className="new-nav">
      <div className="movie-sections">
        <div className="movie-search">
          <input type="text" value={searchTerm} onChange={handleInputChange} />
          <button onClick={handleSearch}>Search</button>
        </div>
        <ul className="search-links">
          <li className="search-link">
            <Link to="/">Action</Link>
          </li>
          <li className="search-link">
            <Link to="/">Comedy</Link>
          </li>
          <li className="search-link">
            <Link to="/">Adventure</Link>
          </li>
          <li className="search-link">
            <Link to="/">Animation</Link>
          </li>
          <li className="search-link">
            <Link to="/">Drama</Link>
          </li>
          <li className="search-link">
            <Link to="/">Crime</Link>
          </li>
          <li className="search-link">
            <Link to="/">Horror</Link>
          </li>
          <li className="search-link">
            <Link to="/">Music</Link>
          </li>
          <li className="search-link">
            <Link to="/">Romance</Link>
          </li>
          <li className="search-link">
            <Link to="/">Science Fiction</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NewNav;
