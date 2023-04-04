import React from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import RenderGenreList from "./components/RenderGenreList";

import './GenreSelect.css';

const GenreSelect = (props) => {
  return (
    <ErrorBoundary>
      <div className="genreSelect_container">
        <RenderGenreList genres={props.genres}/>
      </div>
    </ErrorBoundary>
  )
}

export default GenreSelect;
