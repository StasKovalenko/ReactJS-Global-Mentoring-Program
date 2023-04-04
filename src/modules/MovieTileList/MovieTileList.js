import React from "react";
import MovieTile from "../MovieTile/MovieTile";
import data from '../../data/movies.json'

import './MovieTileList.css'
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const MovieTilesList = () => {
  const maxMovies = 27;

  return (
    <ErrorBoundary>
      <ul className="moviesContainer">
        {data.map((movie, index) => {
          return (
              <MovieTile
                key={index}
                poster_path={movie.poster_path}
                title={movie.title}
                release_date={movie.release_date}
                genres={movie.genres}
              />
            )
          }).slice(0, maxMovies)
        }
      </ul>
    </ErrorBoundary>
  )
}

export default MovieTilesList;