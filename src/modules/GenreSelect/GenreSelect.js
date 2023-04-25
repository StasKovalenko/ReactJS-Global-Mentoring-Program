import React, {useState} from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Button from "../Button/Button";

const genresList = ['all', 'Documentary', 'Comedy', 'Horror', 'Crime']

import './GenreSelect.css';

const GenreSelect = (props) => {
  const [selectedGenreIndex, setSeletedGenreIndex] = useState(0);
  const { genres, setActiveGenre } = props;

  const checkedGenresList = genres ? genres : genresList;

  const handleTabClick = (e) => {
    setSeletedGenreIndex((+e.target.dataset.index));
    setActiveGenre(e.target.value);
  }

  return (
    <ErrorBoundary>
      <ul className="genreList">
        {checkedGenresList.map((item, index) => {
          return (
            <li className="genreListItem" key={item}>
              <Button
                type="button"
                className={`genreListItem_Button ${index === selectedGenreIndex ? 'active' : '' }`}
                onClick={handleTabClick}
                btntext={item}
                value={item}
                index={index}
                item={item}
              />
          </li>
          )
        })}
      </ul>
    </ErrorBoundary>
  )
}

export default GenreSelect;
