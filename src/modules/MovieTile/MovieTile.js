import React, { useState} from "react";
import MovieEditAndDelete from "../MovieEditAndDelete/MovieEditAndDelete";
import Dialog from "../Dialog/Dialog";
import { Portal } from "react-portal";
import  { convertGenres, convertDate } from "../../utils/helpers";
import MovieForm from "../MovieForm/MovieForm";

import './MovieTile.css';

const MovieTile = (props) => {
  const [isImgLoaded, setIsImgLoaded] = useState(true);
  const [toShowEditBtn, setToShowEditBtn] = useState(false);
  const [isOpenEditAndAddDialog, setIsOpenEditAndAddDialog] = useState(false);
  const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false);

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

  const handleClick = (e) => {
    handleOnClick(movie, e)
  }

  const toggleAddAndEditDialog = () => {
    setIsOpenEditAndAddDialog(!isOpenEditAndAddDialog)
  }

  const toggleDeleteDialog = () => {
    setIsOpenDeleteDialog(!isOpenDeleteDialog)
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
      <MovieEditAndDelete 
        toggleDeleteDialog={toggleDeleteDialog}
        toShowEditBtn={toShowEditBtn}
        toggleAddAndEditDialog={toggleAddAndEditDialog} 
      />
      <Portal node={document && document.getElementById('dialog-root')}>
        {isOpenEditAndAddDialog && (
          <Dialog onClose={toggleAddAndEditDialog} title={"Edit movie"}>
            <MovieForm modalMovieType={"edit"} movie={movie} />
          </Dialog>
          )
        }
        {isOpenDeleteDialog && (
          <Dialog onClose={toggleDeleteDialog} title={"Delete movie"}>
            <MovieForm movie={movie} isOpenDeleteDialog={isOpenDeleteDialog}/>
          </Dialog>
          )
        }
      </Portal>
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