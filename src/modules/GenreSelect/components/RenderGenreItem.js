import React, {useState} from "react";
import { filter } from "../../../utils/filter";

const genresList = ['all', 'Documentary', 'Comedy', 'Horror', 'crime']

const RenderGenreItem = (props) => {
  const [selectedGenreName, setSeletedGenreName] = useState(null);

  const { genres } = props;
  const checkedGenresList = genres ? genres : genresList;

  const handleSelected = (e) => {
    setSeletedGenreName(+e.target.dataset.index)
    filter(e.target.dataset.value);
  }

  return (
    checkedGenresList.map((item, index) => {
      return (
        <li className="genreListItem" key={item}>
          <button 
            type="button"
            className={`genreListItem_Button ${index === selectedGenreName ? 'active' : ''}`}
            onClick={handleSelected}
            data-value={item}
            data-index={index}
            date-testid={item}>
              {item}
          </button>
        </li>
      )
    })
  )
}

export default RenderGenreItem;