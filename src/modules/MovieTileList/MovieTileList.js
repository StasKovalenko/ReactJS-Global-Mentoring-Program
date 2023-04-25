import React, {useState} from "react";
import MovieTile from "../MovieTile/MovieTile";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import data from '../../data/movies.json';

import './MovieTileList.css'
import MovieDetails from "../MovieDetails/MovieDetails";

const MovieTilesList = () => {
  const [isMovieDetailShowed, setIsMovieDetailShowed] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const maxMovies =35;

  const handleOnClick = (movie) => {
    setSelectedMovie(movie)
    setIsMovieDetailShowed(true)
  }

  const renderMovieItems = () => {
    return (
      data.map((movie, index) => {
        return (
          <MovieTile
            key={index}
            handleOnClick={handleOnClick}
            movie={movie}
          />
        )
      }).slice(0, maxMovies)
    )
  }

  return (
    <ErrorBoundary>
      {isMovieDetailShowed ? <MovieDetails movie={selectedMovie}/> : null}
      <ul className="moviesContainer">
        {renderMovieItems()}
      </ul>
    </ErrorBoundary>
  )
}

export default MovieTilesList;
