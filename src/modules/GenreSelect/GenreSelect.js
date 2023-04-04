import React from "react";
import RenderGenreList from "./components/RenderGenreList";

const GenreSelect = (props) => {
  return (
    <>
      <div className="genreSelect_container">
        <h1>GenreSelect component</h1>
        <RenderGenreList genres={props.genres}/>
      </div>
    </>
  )
}

export default GenreSelect;
