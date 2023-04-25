import React from "react";
import  { convertGenres, convertDate, convertDuration } from "../../utils/helpers";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

import './MovieDetails.css'

const MovieDetails = (props) => {
  const {
    movie,
  } = props;

  return (
    <ErrorBoundary>
      <div className="movieDetailsContainer">
        <div className="movieDetailLogoWrap">
          <div className="movieDetailLogo">
            <img className="movieDetailLogoImg" src={movie?.poster_path} alt="movieDetailLogoImg"/>
          </div>
        </div>
        <div className="movieDetailInfoWrap">
          <div className="movieDetailInfo">
            <h2 className="movieDetailInfoTitle">{movie?.title}</h2>
            <div className="movieDetailInfoVote">{movie?.vote_average}</div>
          </div>
          <div className="movieDetailInfoGenres">{convertGenres(movie?.genres)}</div>
          <div className="movieDetailInfoTime">
            <div className="movieDetailRealeseDate">{convertDate(movie?.release_date)}</div>
            <div className="movieDetailInfoRunTime">{convertDuration(movie?.runtime)}</div>
          </div>
          <div className="movieDetailInfoContent">
            <p className="movieDetailInfoOverview">{movie?.overview}</p>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  )

}

export default MovieDetails;
