import React, { useEffect, useState } from "react";

const Details = ({ movies }) => {
  const [favourites, setFavourites] = useState("");

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("favourites-movies")
    );
    setFavourites(movieFavourites);
  }, []);

  const saveToLocalStorage = (item) => {
    localStorage.setItem("favourites-movies", JSON.stringify(item));
  };

  const base_url = "https://image.tmdb.org/t/p/original/";

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "...." : string;
  }

  return (
    <>
      {movies.map((movie, index) => (
        <div
          className="d-flex p-2 justify-content-center  disabled"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
            height: "100vh",
          }}
          key={movie.id}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "30px",
              color: "black",
            }}
          >
            <div
              className="card text-white bg-dark mb-3"
              style={{ maxWidth: 650 }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={`${base_url}${movie.poster_path}`}
                    className="img-fluid rounded-start"
                    alt="movie"
                  />
                </div>
                <div className="col-md-8 ">
                  <div className="card-body text-center">
                    <h3 className="card-title">{movie.title}</h3>
                    <p className="card-text">
                      <small className="text-muted">{movie.release_date}</small>
                    </p>
                    <p className="card-text">
                      {truncate(movie?.overview, 150)}
                      <br />
                      <small className="text-muted">
                        <em> {movie.tagline}</em>
                      </small>
                    </p>
                    <div className="d-grid gap-2 col-6 mx-auto">
                      <button
                        className="btn btn-primary"
                        type="button"
                        onClick={() => addFavouriteMovie(movie)}
                      >
                        Add to favourite{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="red"
                          className="bi bi-heart-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Details;
