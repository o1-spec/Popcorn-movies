import React, { useContext } from "react";
import Nav from "./Nav";
import Loading from "./Loading";
import MovieCard from "./MovieCard";
import Footer from "./Footer";
import NewNav from "./NewNav";

//const PostContext = createContext()

function MovieList({ PostContext }) {
  const { fetchSearch, isLoading, moviesContainer, fetchGenre } =
    useContext(PostContext);

  //console.log(moviesContainer)

  return (
    <>
      <div className="movie-list">
        <Nav />
        <NewNav fetchSearch={fetchSearch} fetchGenre={fetchGenre} />
        <div className="movies-container">
          <h6>The Best Movies 🔥</h6>
          <div className="movie-container">
            {isLoading ? (
              <Loading />
            ) : (
              moviesContainer.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MovieList;
