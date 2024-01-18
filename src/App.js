import React, { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage";
import MovieList from "./Components/MovieList";
import Movie from "./Components/Movie";
import useGenres from "./Components/useGenres";

const PostContext = createContext();

function App() {
  const { fetchSearch, isLoading, moviesContainer, fetchGenre } = useGenres();

  return (
    <div className="App">
      <BrowserRouter>
        <PostContext.Provider
          value={{
            fetchSearch,
            isLoading,
            moviesContainer,
            fetchGenre,
          }}
        >
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/movieList" element={<MovieList PostContext={PostContext}/>}></Route>
            <Route path="/movieList/:id" element={<Movie PostContext={PostContext}/>}></Route>
          </Routes>
        </PostContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
