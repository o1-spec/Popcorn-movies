import React, { createContext, useEffect, useState } from "react";
import Nav from "./Nav";
import Loading from "./Loading";
import MovieCard from "./MovieCard";
import Footer from "./Footer";
import NewNav from "./NewNav";

const KEY = "d4ce9882f4fefb7cafec8972d9f8a82d";

const PostContext = createContext()

function MovieList() {
  const [moviesContainer, setMoviesContainer] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");


  async function fetchSearch(name) {
    try {
      setIsLoading(true);
      setError("");

      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${name}`
      );
      if (!res.ok) throw new Error("Something went wrong with fetching movies");
      const data = await res.json();
      if (data.Response === "false") throw new Error("Movies not found ");
      setMoviesContainer(data.results);
      console.log(data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(function () {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`
        );
        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");
        const data = await res.json();
        if (data.Response === "false") throw new Error("Movies not found ");
        setMoviesContainer(data.results);
        console.log(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);

  //console.log(moviesContainer)

  return (
    <>
      <div className="movie-list">
        <Nav />
        <NewNav fetchSearch={fetchSearch} />
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
