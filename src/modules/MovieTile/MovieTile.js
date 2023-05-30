import React, { useState} from "react";
import MovieEditAndDelete from "../MovieEditAndDelete/MovieEditAndDelete";
import Dialog from "../Dialog/Dialog";
import { Portal } from "react-portal";
import  { convertGenres, convertDate } from "../../utils/helpers";
import MovieForm from "../MovieForm/MovieForm";
import { Link } from "react-router-dom";

import './MovieTile.css';

const MovieTile = (props) => {
  const [isImgLoaded, setIsImgLoaded] = useState(true);
  const [toShowEditBtn, setToShowEditBtn] = useState(false);
  const [isOpenEditDialog, setIsOpenEditDialog] = useState(false);
  const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false);

  const { movie } = props;

  const handleOnError = () => {
    setIsImgLoaded(false);
  }

  const handleOnFocus = () => {
    setToShowEditBtn(true);
  }

  const handleOutFocus = () => {
    setToShowEditBtn(false);
  }

  const toggleAddAndEditDialog = () => {
    setIsOpenEditDialog(!isOpenEditDialog)
  }

  const toggleDeleteDialog = () => {
    setIsOpenDeleteDialog(!isOpenDeleteDialog)
  }

  return (
    <>
      { isImgLoaded && <div  
      className="movieTile"
      id="movieTile"
      onMouseEnter={handleOnFocus}
      onMouseLeave={handleOutFocus}
      datatestid={movie.id}
    >
        <MovieEditAndDelete
          movie={movie}
          toggleDeleteDialog={toggleDeleteDialog}
          toShowEditBtn={toShowEditBtn}
          toggleAddAndEditDialog={toggleAddAndEditDialog} 
        />
        <Portal node={document && document.getElementById('dialog-root')}>
          {isOpenEditDialog && (
              <Dialog onClose={toggleAddAndEditDialog} title="Edit movie">
                <MovieForm
                  modalMovieType={"edit"}
                  movie={movie}
                  setIsOpenEditDialog={setIsOpenEditDialog}
                />
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
        <Link to={`/movie/${movie.id}`}>
          <div className="movieLogo">
            <img 
              className="movieLogo_img"
              src={movie?.poster_path}
              alt="Movie img"
              onError={handleOnError}
            />
            </div>
        </Link>
        <div className="movieDetails">
          <div className="movieDetailsInfo">
            <h2 className="movieTitle">{movie?.title}</h2>
            <div className="movieReleaseDate">{convertDate(movie?.release_date)}</div>
          </div>
          <div className="movieGenres">
            <div className="movieGenresList">{convertGenres(movie?.genres)}</div>
          </div>
        </div>

    </div>}
    </>
  )
}

export default MovieTile;

MovieTile.defaultProps = {
  poster_path: "../../img/false-2061132__340.png",
  title: "NO Movie",
  release_date: "xxxx",
  genres: ''
}