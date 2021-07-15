import React, { useEffect, useState } from "react";
import Details from "./Details";

const MovieDetails = ({ match }) => {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;
    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies([responseJson]);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <Details movies={movies} />
      </div>
    </div>
  );
};

export default MovieDetails;
