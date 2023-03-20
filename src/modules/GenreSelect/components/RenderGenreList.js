import React from "react";
import RenderGenderItem from "./RenderGenreItem";

const RenderGenreList = (props) => {
  const { onSelect } = props;
  return (
    <ul className="genreList">
      <RenderGenderItem onSelect={onSelect}/>
    </ul>
  )
}

export default RenderGenreList;
