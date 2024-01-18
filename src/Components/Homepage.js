import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function Homepage() {
  return (
    <div className="homepage">
      <Nav/>
      <div className="home-text">
        <h4>MOVIE RECOMMENDATION ENGINE</h4>
        <p>
          <span>
            You can’t decide between thousands of movies available for
            streaming?
          </span>
          <span>
            Get on our site and decide based on current imdb ratings ☺️
          </span>
        </p>
        <div className="home-btn">
          <Link to="/movieList"> Start</Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
