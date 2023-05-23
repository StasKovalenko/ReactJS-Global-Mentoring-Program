import React from "react";
import MovieTile from "../MovieTile/MovieTile";

import './MovieTileList.css'


const MovieTilesList = (props) => {
  const { movieList, setSearchParams } = props;
  
  return (      
    <ul className="moviesContainer">
      {movieList.map((movie, index) => {
        return (
          <MovieTile
            key={index}
            movie={movie}
            setSearchParams={setSearchParams}
          />
        )
      })}
    </ul>
  )
}

export default MovieTilesList;

