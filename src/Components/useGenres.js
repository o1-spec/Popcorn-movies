import { useState, useEffect } from "react";

const KEY = "d4ce9882f4fefb7cafec8972d9f8a82d";

function useGenres() {
  const [moviesContainer, setMoviesContainer] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  //const [selectedGenre, setSelectedGenre] = useState(null);

  async function fetchGenre(genreId) {
    //e.preventDefault()
    try {
      setIsLoading(true);
      setError("");

      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=${genreId}`
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
      //console.log(data.results);
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
        //console.log(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();

  }, []);

  return {
    moviesContainer,
    isLoading,
    error,
    fetchSearch,
    fetchGenre,
  };
}

export default useGenres;
