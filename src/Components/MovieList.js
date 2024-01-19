import React, { useContext } from "react";
import Nav from "./Nav";
import Loading from "./Loading";
import MovieCard from "./MovieCard";
import Footer from "./Footer";
import NewNav from "./NewNav";
import Error from "./Error";

//const PostContext = createContext()

function MovieList({ PostContext }) {
  const {
    fetchSearch,
    isLoading,
    moviesContainer,
    fetchGenre,
    isNavbarOpen,
    setIsNavbarOpen,
  } = useContext(PostContext);

  //console.log(moviesContainer)

  return (
    <>
      <div 
        onClick={() => setIsNavbarOpen(false)}
        className={`${isNavbarOpen ? "overlay" : ""}`}
      ></div>
      <div className="movie-list">
        <Nav />
        <NewNav
          isNavbarOpen={isNavbarOpen}
          setIsNavbarOpen={setIsNavbarOpen}
          fetchSearch={fetchSearch}
          fetchGenre={fetchGenre}
        />
        <div className="movies-container">
          <h6>The Best Movies 🔥</h6>
          <div className="movie-container">
            {isLoading ? (
              <Loading />
            ) : moviesContainer?.length > 0 ? (
              moviesContainer.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))
            ) : (
              <Error />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MovieList;
