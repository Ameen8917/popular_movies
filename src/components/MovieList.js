import React from "react";
import "./MovieList.css";
import { Link } from "react-router-dom";

const MovieList = (props) => {
  const base_url = "https://image.tmdb.org/t/p/original/";
  return (
    <>
      {props.movies.map((movie, index) => (
        <div
          className="image-container d-flex justify-content-start m-3"
          key={movie.id}
        >
          <Link to={`/details/${movie.id}`}>
            <img
              className="row_poster"
              src={`${base_url}${movie.poster_path}`}
              alt="movie"
            />
          </Link>
        </div>
      ))}
    </>
  );
};

export default MovieList;
