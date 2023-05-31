import React, { useState } from "react";
import MovieEditAndDelete from "../MovieEditAndDelete/MovieEditAndDelete";
import Dialog from "../Dialog/Dialog";
import { Portal } from "react-portal";
import { convertGenres, convertDate } from "../helpers/helpers";
import MovieForm from "../MovieForm/MovieForm";
import Link from "next/link";

import styles from "./MovieTile.module.css"

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
      className={styles.movieTile}
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
        {typeof document !== "undefined" && (<Portal node={document && document.getElementById('dialog-root')}>
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
            </Portal>)
          }
        <Link href={`/movie/${movie.id}`}>
          <div className={styles.movieLogo}>
            <img
              className={styles.movieLogo_img}
              src={movie?.poster_path}
              alt="Movie img"
              onError={handleOnError}
            />
          </div> 
          </Link>
        <div className={styles.movieDetails}>
          <div className={styles.movieDetailsInfo}>
            <h2 className={styles.movieTitle}>{movie?.title}</h2>
            <div className={styles.movieReleaseDate}>{convertDate(movie?.release_date)}</div>
          </div>
          <div className={styles.movieGenres}>
            <div className={styles.movieGenresList}>{convertGenres(movie?.genres)}</div>
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