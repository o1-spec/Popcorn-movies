import React from "react";

function getMoviePoster(posterpath) {
  return `https://media.themoviedb.org/t/p/w440_and_h660_face${posterpath}`;
}

function MovieCard({ movie }) {
  //console.log("Movie card props", movie);
  if (!movie) {
    return null;
  }
  return (
    <div className="movie-box">
      <img src={getMoviePoster(movie.poster_path)} alt={movie.original_title} />
      <div className="movie-in">
        <span className="in-name">
          {!movie.original_title ? movie.name : movie.original_title}
        </span>
        <span>
          {!movie.release_date ? movie.first_air_date : movie.release_date}
        </span>
      </div>
    </div>
  );
}

export default MovieCard;
