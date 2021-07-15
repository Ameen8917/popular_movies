import React, { useEffect, useState } from "react";
import MovieListHeading from "./MovieListHeading";
import RemoveFavourite from "./RemoveFavourite";
import "./MovieList.css";

const FavouriteMovies = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("favourites-movies")
    );
    setFavourites(movieFavourites);
  }, []);

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.id !== movie.id
    );
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const saveToLocalStorage = (item) => {
    localStorage.setItem("favourites-movies", JSON.stringify(item));
  };

  const base_url = "https://image.tmdb.org/t/p/original/";

  return (
    <div>
      <div className="row d-flex align-items-center mt-4 mb-4 justify-content-center">
        <MovieListHeading heading="Favourites Movies" />
      </div>
      <div className="row mt-3">
        {favourites.length ? (
          favourites.map((movie, index) => (
            <div
              className="image-container d-flex justify-content-start m-3"
              key={movie.id}
            >
              <img
                className="row_poster"
                src={`${base_url}${movie.poster_path}`}
                alt="movie"
              />
              <span
                onClick={() => removeFavouriteMovie(movie)}
                className="overlay d-flex align-item-center justify-content-center"
              >
                <RemoveFavourite />
              </span>
            </div>
          ))
        ) : (
          <small className=" h-100 d-flex justify-content-center align-items-center ">
            Note: right no there is no favourite movies please try to add
          </small>
        )}
      </div>
    </div>
  );
};

export default FavouriteMovies;
