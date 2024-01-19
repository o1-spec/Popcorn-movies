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

function NewNav({ fetchSearch, fetchGenre, isNavbarOpen, setIsNavbarOpen }) {
  const [searchTerm, setSearchTerm] = useState("");
  //const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = (e) => {
    e.preventDefault();
    setIsNavbarOpen(true);
  };

  const toggleNavbarClose = (e) => {
    e.preventDefault();
    setIsNavbarOpen(false);
  };

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
        <ul className={`search-links ${isNavbarOpen ? "open" : ""}`}>
          <Link className="mobile-close" onClick={(e) => toggleNavbarClose(e)}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </Link>
          <li className="search-link">
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                toggleNavbarClose(e);
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
                toggleNavbarClose(e);
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
                toggleNavbarClose(e);
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
                toggleNavbarClose(e);
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
                toggleNavbarClose(e);
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
                toggleNavbarClose(e);
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
                toggleNavbarClose(e);
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
                toggleNavbarClose(e);
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
                toggleNavbarClose(e);
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
                toggleNavbarClose(e);
                handleGenre(scienceFiction);
              }}
            >
              Science Fiction
            </Link>
          </li>
        </ul>
        <div className="mobile-nav">
          <Link onClick={(e) => toggleNavbar(e)}>
            <i className="fas fa-bars"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewNav;
