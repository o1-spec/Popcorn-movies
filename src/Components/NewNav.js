import React, { useState } from "react";
import { Link } from "react-router-dom";

const Action = 28;
const Adventure = 12;
const Animation = 16;
const Comedy = 35;
const Crime = 80;
const Drama = 18;
const music = 10402;
const Romance = 10749;
const scienceFiction = 878;
const Horror = 27;

function NewNav({ fetchSearch, fetchGenre }) {
  const [searchTerm, setSearchTerm] = useState("");
  //const [searchGenre,setSearchGenre] = useState(0)

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value); // Update the state with the input value
  };

  const handleSearch = () => {
    //console.log("Search Term:", searchTerm);
    if (!searchTerm) return;
    fetchSearch(searchTerm); // Call the fetchSearch function with the input value
  };

  const handleGenre = (genreId) => {
    fetchGenre(genreId);
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
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                handleGenre(Action);
              }}
            >
              Action
            </Link>
          </li>
          <li className="search-link">
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                handleGenre(Comedy);
              }}
            >
              Comedy
            </Link>
          </li>
          <li className="search-link">
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                handleGenre(Adventure);
              }}
            >
              Adventure
            </Link>
          </li>
          <li className="search-link">
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                handleGenre(Animation);
              }}
            >
              Animation
            </Link>
          </li>
          <li className="search-link">
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                handleGenre(Drama);
              }}
            >
              Drama
            </Link>
          </li>
          <li className="search-link">
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                handleGenre(Crime);
              }}
            >
              Crime
            </Link>
          </li>
          <li className="search-link">
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                handleGenre(Horror);
              }}
            >
              Horror
            </Link>
          </li>
          <li className="search-link">
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                handleGenre(music);
              }}
            >
              Music
            </Link>
          </li>
          <li className="search-link">
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                handleGenre(Romance);
              }}
            >
              Romance
            </Link>
          </li>
          <li className="search-link">
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                handleGenre(scienceFiction);
              }}
            >
              Science Fiction
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NewNav;
