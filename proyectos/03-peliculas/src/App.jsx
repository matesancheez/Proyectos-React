import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import MovieList from "./components/Peliculas";

const API_KEY = "879a8b27";

function App() {
  const [query, setQuery] = useState("");
  const [pelicula, setPelicula] = useState([]);

  const handleSumbit = (event) => {
    event.preventDefault();
    const { query } = Object.fromEntries(new window.FormData(event.target));
    const queryMod = query.replace(/\s/g, "+");
    setQuery(queryMod);
  };

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) =>
        data.Response ? setPelicula(data.Search) : setPelicula([])
      );
  }, [query]);

  return (
    <>
      <Header handleSumbit={handleSumbit} />
      <MovieList pelicula={pelicula} />
    </>
  );
}

export default App;
