import React, {useState} from "react";
import MovieTile from "../MovieTile/MovieTile";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import data from '../../data/movies.json';

import './MovieTileList.css'
import MovieDetails from "../MovieDetails/MovieDetails";

const MovieTilesList = () => {
  const [isMovieDetailShowed, setIsMovieDetailShowed] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const maxMovies = data.slice(0, 35);

  const handleOnClick = (movie, e) => {
    setSelectedMovie(movie)
    if (e.target.localName === "img") {
      setIsMovieDetailShowed(true)
    }
  }
  
  const handleClickOnList = (e) => {
    if (e.target.className !== "movieLogo_img") {
      setIsMovieDetailShowed(false)
    }
  }

  const renderMovieItems = () => {
    return (
      maxMovies.map((movie, index) => {
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
      <ul className="moviesContainer" onClick={handleClickOnList}>
        {renderMovieItems()}
      </ul>
    </ErrorBoundary>
  )
}

export default MovieTilesList;
