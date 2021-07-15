import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import MovieList from "./MovieList";
import { useEffect, useState } from "react";
import MovieListHeading from "./MovieListHeading";

function Home() {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63`;
    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.results);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4 justify-content-center">
        <MovieListHeading heading="Popular Movies" />
      </div>
      <div className="row mt-3">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default Home;
