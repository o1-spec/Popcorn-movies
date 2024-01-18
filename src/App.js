import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage";
import MovieList from "./Components/MovieList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/movieList" element={<MovieList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
