import React from "react";
import  { convertGenres, convertDate, convertDuration } from "../helpers/helpers";

import styles from "./MovieDetails.module.css"
import Button from "../Button/Button";

const MovieDetails = (props) => {
  const { movie } = props;
  return (
    <div className={styles.movieDetailsContainer}>
      <div className={styles.movieDetailsHeader}>
        <p>netflixroulette</p>
        <Button className={styles.searchBtn} type="submit"/>
      </div>
      <div className={styles.movieDetailLogoWrap}>
        <div className={styles.movieDetailLogo}>
          <img className={styles.movieDetailLogoImg} src={movie?.poster_path} alt="movieDetailLogoImg" data-testid="movieDetailLogo"/>
        </div>
        <div className={styles.movieDetailInfoWrap}>
        <div className={styles.movieDetailInfo}>
          <h2 className={styles.movieDetailInfoTitle} data-testid="movieDetailTitle">{movie.title}</h2>
          <div className={styles.movieDetailInfoVote} data-testid="movieDetailVote">{movie.vote_average}</div>
        </div>
        <div className={styles.movieDetailInfoGenres} data-testid="movieDetailGenres">{convertGenres(movie.genres)}</div>
        <div className={styles.movieDetailInfoTime}>
          <div className={styles.movieDetailRealeseDate}>{convertDate(movie.release_date)}</div>
          <div className={styles.movieDetailInfoRunTime}>{convertDuration(movie.runtime)}</div>
        </div>
        <div className={styles.movieDetailInfoContent}>
          <p className={styles.movieDetailInfoOverview} data-testid="movieDetailOverview">{movie?.overview}</p>
        </div>
      </div>
      </div>
    </div>

  )
}

export default MovieDetails;
