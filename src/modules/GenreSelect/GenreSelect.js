import React, { useState } from "react";
import Button from "../Button/Button";

const genresList = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

import './GenreSelect.css';

const GenreSelect = (props) => {
  const { setSearchParams } = props;
  const [activeGenre, setActiveGenre] = useState(localStorage.getItem('genre') || 'All');

  const handleTabClick = (e) => {
    if (e.target.value === 'All') {
      setActiveGenre(e.target.value);
      localStorage.setItem('genre', e.target.value);
      return setSearchParams('')
    }
    setSearchParams(`filter=${e.target.value}`);
    localStorage.setItem('genre', e.target.value);
    setActiveGenre(e.target.value);
  };

  return (
    <div className="filterBy">
      <ul className="genreList">
        {genresList.map((item) => {
          return (
            <li className="genreListItem" key={item}>
              <Button
                type="button"
                className={`genreListItem_Button ${item === activeGenre ? 'active' : '' }`}
                onClick={handleTabClick}
                btntext={item}
                value={item}
                data-testid={item}
              />
          </li>
          )
        })}
      </ul>
    </div>
  )
}

export default GenreSelect;
