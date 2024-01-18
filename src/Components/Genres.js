import { useState } from "react";

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

function Genres() {
  const [moviesContainer, setMoviesContainer] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

}

export default Genres;
