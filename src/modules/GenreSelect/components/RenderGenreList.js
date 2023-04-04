import React, {useState} from "react";
import Button from "../../Button/Button";

import { filter } from "../../../utils/filter";

const genresList = ['all', 'Documentary', 'Comedy', 'Horror', 'crime']

const RenderGenreList = (props) => {
  const [selectedGenreName, setSeletedGenreName] = useState(null);
 
  const { genres, active } = props;
  const checkedGenresList = genres ? genres : genresList;

  const handleSelected = (e) => {
    setSeletedGenreName(+e.target.dataset.index)
    filter(e.target.innerHTML);
  }

  return (
    <ul className="genreList">
      {checkedGenresList.map((item, index) => {
        return (
          <li className="genreListItem" key={item}>
            <Button
              type="button"
              className={`genreListItem_Button ${index === selectedGenreName ? 'active' : `${active}` }`}
              onClick={handleSelected}
              btntext={item}
              index={index}
            />
        </li>
      )
    })}
  </ul>
  )
}

export default RenderGenreList;