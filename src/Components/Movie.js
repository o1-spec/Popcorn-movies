import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

function Movie({ PostContext }) {
  const { id } = useParams();
  //console.log(id);
  const movieId = parseInt(id, 10);

  const { moviesContainer } = useContext(PostContext);
  const selectedMovie = moviesContainer.find((movie) => movie.id === movieId);

  function getMoviePoster(posterpath) {
    return `https://media.themoviedb.org/t/p/w440_and_h660_face${posterpath}`;
  }

  console.log(selectedMovie);
  return (
    <>
      <div className="movie-section">
        <Nav />
        <div className="back">
          <Link to="/movieList">&larr;&nbsp;Back</Link>
        </div>
        <div className="movie-select">
          <div className="movie-select-img">
            <img src={getMoviePoster(selectedMovie.poster_path)} alt="" />
          </div>
          <div className="movie-content">
            <h2>
              {" "}
              {!selectedMovie.original_title
                ? selectedMovie.name
                : selectedMovie.original_title}
            </h2>
            <span className="type">{selectedMovie.media_type}</span>
            <div className="release">
              <span>
                {!selectedMovie.release_date
                  ? selectedMovie.first_air_date
                  : selectedMovie.release_date}
              </span>
              <span>Rating:{selectedMovie.vote_average}</span>
            </div>
            <p className="over-view">{selectedMovie.overview}</p>
            <p>Language : {selectedMovie.original_language}</p>
            <button className="watch-list">Add to watchlist</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Movie;
