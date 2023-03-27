import React from "react";
import RenderGenderItem from "./RenderGenreItem";

const RenderGenreList = (props) => {
  const { onSelect } = props;
  return (
    <ul className="genreList">
      <RenderGenderItem onSelect={onSelect} genres={props.genres}/>
    </ul>
  )
}

export default RenderGenreList;
