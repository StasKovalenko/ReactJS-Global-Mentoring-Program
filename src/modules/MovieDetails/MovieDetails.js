import React from "react";

import './MovieDetails.css'

const MovieDetails = (props) => {
  const {
    poster_path,
    title,
    release_date,
    genres,
    vote_average,
  } = props;

  return (
    <div className="movieDetailsContainer">
      2312
      <div className="movieDetailLogoWrap">
        <div className="movieDetailLogo">
          <img className="movieDetailLogoImg" src={poster_path} alt="movieDetailLogoImg"/>
        </div>
      </div>
      <div className="movieDetailInfoWrap">
        <div className="movieDetailInfo">
          <div className="movieDetailInfoTitle">{title}</div>
          <div className="movieDetailInfoVote">{vote_average}</div>
        </div>
        <div className="movieDetailInfoGenres">{genres}</div>
        <div className="movieDetailInfoTime">
          <div className="movieDetailRealeseDate">{release_date}</div>
          <div className="movieDetailInfoRunTime"></div>
        </div>
        <div className="movieDetailInfoOverview">
          <p className="movieDetailInfoContent"></p>
        </div>
      </div>
    </div>
  )

}

export default MovieDetails;
