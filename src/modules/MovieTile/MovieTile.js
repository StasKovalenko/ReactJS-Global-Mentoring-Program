import React, { useState} from "react";
import MovieEditAndDelete from "../MovieEditAndDelete/MovieEditAndDelete";
import  { convertGenres, convertDate } from "../../utils/helpers";

import './MovieTile.css';

const MovieTile = (props) => {
  const [isImgLoaded, setIsImgLoaded] = useState(true);
  const [toShowEditBtn, setToShowEditBtn] = useState(false);

  const { movie, handleOnClick } = props;

  const handleOnError = () => {
    setIsImgLoaded(false);
  }

  const handleOnFocus = () => {
    setToShowEditBtn(true);
  }

  const handleOutFocus = () => {
    setToShowEditBtn(false);
  }

  const handleClick = () => {
    handleOnClick(movie)
  }


  return (
    <li 
      className="movieTile"
      id="movieTile"
      style={{display: isImgLoaded? "flex" : "none"}}
      onClick={handleClick} 
      onMouseEnter={handleOnFocus}
      onMouseLeave={handleOutFocus}
    >
      <MovieEditAndDelete toShowEditBtn={toShowEditBtn}/>
      <div className="movieLogo">
        <img className="movieLogo_img" src={movie?.poster_path} alt="Movie img" onError={handleOnError}/>
      </div>
      <div className="movieDetails">
        <div className="movieDetailsInfo">
          <h2 className="movieTitle">{movie?.title}</h2>
          <div className="movieReleaseDate">{convertDate(movie?.release_date)}</div>
        </div>
        <div className="movieGenres">
          <div className="movieGenresList">{convertGenres(movie?.genres)}</div>
        </div>
      </div>
    </li>
  )
}

export default MovieTile;

MovieTile.defaultProps = {
  poster_path: "../../img/false-2061132__340.png",
  title: "NO Movie",
  release_date: "xxxx",
  genres: ''
}