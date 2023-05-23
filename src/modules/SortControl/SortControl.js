import React, { useState } from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

import "./SortControl.css"

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
      <div className="sortByValue" onClick={() => setIsDropDownShowed(!isDropDownShowed)}>
        {!isDropDownShowed&&
          <div className="sortByOptions">
            <button type="button" data-testid="sortByBtn" className="sortByBtn">{sortCriterion}</button>
          </div>
        }
        {isDropDownShowed &&
          <div className="sortByOptionsDropDown">
            <button type="button" 
              className="sortBydropDownBtn" 
              data-testid="release"
              value="release date"
              onClick={handleSortByClick}>
                Release Date
            </button>
            <button type="button" 
              className="sortBydropDownBtn" 
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
    <ErrorBoundary>
      <div className="sortControlContainer">
        <p className="sortByLabel">sort by</p>
        {renderSortByDropDown()}
        <button type="submit" data-testid="fill" className={isDropDownShowed? "sortByFillBtnUp" : "sortByFillBtnDown"}></button>
      </div>
    </ErrorBoundary>
  )
}

export default SortControl;