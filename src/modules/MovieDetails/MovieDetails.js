import React from "react";
import  { convertGenres, convertDate, convertDuration } from "../../utils/helpers";

import './MovieDetails.css'
import Button from "../Button/Button";

const MovieDetails = (props) => {
  const { movie } = props;
  return (
    <div className="movieDetailsContainer">
      <div className="movieDetailsHeader">
        <p>netflixroulette</p>
        <Button className="searchBtn" type="submit"/>
      </div>
      <div className="movieDetailLogoWrap">
        <div className="movieDetailLogo">
          <img className="movieDetailLogoImg" src={movie?.poster_path} alt="movieDetailLogoImg" data-testid="movieDetailLogo"/>
        </div>
        <div className="movieDetailInfoWrap">
        <div className="movieDetailInfo">
          <h2 className="movieDetailInfoTitle" data-testid="movieDetailTitle">{movie.title}</h2>
          <div className="movieDetailInfoVote" data-testid="movieDetailVote">{movie.vote_average}</div>
        </div>
        <div className="movieDetailInfoGenres" data-testid="movieDetailGenres">{convertGenres(movie.genres)}</div>
        <div className="movieDetailInfoTime">
          <div className="movieDetailRealeseDate">{convertDate(movie.release_date)}</div>
          <div className="movieDetailInfoRunTime">{convertDuration(movie.runtime)}</div>
        </div>
        <div className="movieDetailInfoContent">
          <p className="movieDetailInfoOverview" data-testid="movieDetailOverview">{movie?.overview}</p>
        </div>
      </div>
      </div>
    </div>

  )
}

export default MovieDetails;
