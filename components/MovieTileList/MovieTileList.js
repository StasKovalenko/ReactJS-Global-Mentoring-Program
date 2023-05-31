import React from "react";
import MovieTile from "../MovieTile/MovieTile";

import styles from "./MovieTileList.module.css"


const MovieTilesList = (props) => {
  const { movieList, setSearchParams } = props;
  
  return (      
    <ul className={styles.moviesContainer}>
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

