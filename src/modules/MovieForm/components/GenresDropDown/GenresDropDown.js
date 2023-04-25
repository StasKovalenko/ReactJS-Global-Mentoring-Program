import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const GenresDropDown = (props) => {
const { genres, isAddMovieShowed } = props;

const options = [
  { value: "option1", label: "Crime" },
  { value: "option2", label: "Documentary" },
  { value: "option3", label: "Horror" },
  { value: "option4", label: "Comedy" }
];

function customOptions () {
  if(!genres) {
    return null
  }
  return genres.map((genre) => {
    return {
      value: genre, 
      label: genre,
      selected: false
    }
  })
} 

const checkOptions = !isAddMovieShowed ? options : customOptions();
const [selected, setSelected] = useState(checkOptions);

return (
    <div className="genresDropDown">
      <MultiSelect
        options={checkOptions}
        value={selected}
        onChange={setSelected}
        labelledBy={"Select Genres"}
        hasSelectAll={false}
        disableSearch={true}
        aria-expanded={true}
      />
    </div>
  );
};
 

export default GenresDropDown;