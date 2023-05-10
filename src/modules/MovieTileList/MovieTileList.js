import React from "react";
import MovieTile from "../MovieTile/MovieTile";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

import './MovieTileList.css'
import MovieDetails from "../MovieDetails/MovieDetails";

const MovieTilesList = (props) => {
  

  const { selectedMovie, setSelectedMovie, movieList, isMovieDetailShowed } = props;

  const handleOnClick = (movie) => {
    setSelectedMovie(movie)
  }
  
  const renderMovieItems = () => {
    return (
      movieList.map((movie, index) => {
        return (
          <MovieTile
            key={index}
            handleOnClick={handleOnClick}
            movie={movie}
          />
        )
      })
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
