import React from "react";
import RenderGenreList from "./components/RenderGenreList";

const GenreSelect = () => {
  return (
    <>
      <div className="genreSelect_container">
        <h1>GenreSelect component</h1>
        <RenderGenreList />
      </div>
    </>
  )
}

export default GenreSelect;
