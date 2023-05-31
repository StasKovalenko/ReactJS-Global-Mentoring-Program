import React, { useState } from "react";
import Button from "../Button/Button";

const genresList = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

import styles from "./GenreSelect.module.css"

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
    <div className={styles.filterBy}>
      <ul className={styles.genreList}>
        {genresList.map((item) => {
          return (
            <li className={styles.genreListItem} key={item}>
              <Button
                type="button"
                className={`${styles.genreListItem_Button} ${item === activeGenre ? styles.active : '' }`}
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
