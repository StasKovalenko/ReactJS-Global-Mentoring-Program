import React, { useState} from "react";
import MovieEditAndDelete from "../MovieEditAndDelete/MovieEditAndDelete";
// import MovieDetails from "../MovieDetails/MovieDetails";

import './MovieTile.css';

const MovieTile = (props) => {
  const [isImgLoaded, setIsImgLoaded] = useState(true);
  const [toShowEditBtn, setToShowEditBtn] = useState(false);


  const {
    poster_path,
    title,
    release_date,
    genres
  } = props;

  const dateFormat = (release_date) => release_date.slice(0, -6);

  const genresAddSpace = (genresArr) => { 
    return genresArr.slice(0, -1).join(", ") + ", " + genresArr[genresArr.length - 1]
  } 

  const handleOnError = () => {
    setIsImgLoaded(false);
  }

  const handleOnClick = () => {
     
  }

  const handleOnFocus = () => {
    setToShowEditBtn(true);
  }

  const handleOutFocus = () => {
    setToShowEditBtn(false);
  }

  return (
    <li 
      className="movieTile"
      id="movieTile"
      style={{display: isImgLoaded? "flex" : "none"}}
      onClick={handleOnClick} 
      onMouseEnter={handleOnFocus}
      onMouseLeave={handleOutFocus}
    >
      <MovieEditAndDelete toShowEditBtn={toShowEditBtn}/>
      <div className="movieLogo">
        <img className="movieLogo_img" src={poster_path} alt="Movie img" onError={handleOnError}/>
      </div>
      <div className="movieDetails">
        <div className="movieDetailsInfo">
          <h2 className="movieTitle">{title}</h2>
          <div className="movieReleaseDate">{dateFormat(release_date)}</div>
        </div>
        <div className="movieGenres">
          <div className="movieGenresList">{genresAddSpace(genres)}</div>
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