import React, { useState } from "react";

import styles from "./SortControl.module.css"

const SortControl = (props) => {``
  const [isDropDownShowed, setIsDropDownShowed] = useState(false);
  const [sortCriterion, setSortCriteriuon] = useState(localStorage.getItem('sort') || 'realese date')
  const { setSearchParams } = props;
  const handleSortByClick = (e) => {
    e.preventDefault()
    setSearchParams(`sortBy=${e.target.value === 'release date' ? 'release_date' : 'title'}&sortOrder=asc`);
    localStorage.setItem('sort', e.target.value)
    setSortCriteriuon(e.target.value)
  }
  
  const renderSortByDropDown = () => {
    return (
      <div className={styles.sortByValue} onClick={() => setIsDropDownShowed(!isDropDownShowed)}>
        {!isDropDownShowed&&
          <div className={styles.sortByOptions}>
            <button type="button" data-testid="sortByBtn" className={styles.sortByBtn}>{sortCriterion}</button>
          </div>
        }
        {isDropDownShowed &&
          <div className={styles.sortByOptionsDropDown}>
            <button type="button" 
              className={styles.sortBydropDownBtn} 
              data-testid="release"
              value="release date"
              onClick={handleSortByClick}>
                Release Date
            </button>
            <button type="button" 
              className={styles.sortBydropDownBtn}
              value="title"
              data-testid="title"
              onClick={handleSortByClick}>
                Title
            </button>
          </div>
        }
      </div>
    )
  }

  return (
    <div className={styles.sortControlContainer}>
      <p className={styles.sortByLabel}>sort by</p>
      {renderSortByDropDown()}
      <button type="submit" data-testid="fill" className={isDropDownShowed? styles.sortByFillBtnUp : styles.sortByFillBtnDown}></button>
    </div>
  )
}

export default SortControl;
