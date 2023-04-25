import React, { useState } from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

import "./SortControl.css"

const SortControl = (props) => {
  const [isDropDownShowed, setIsDropDownShowed] = useState(false);

  const { sortCriterion, setSortCriterion } = props;

  const handleSortByClick = (e) => {
    setSortCriterion(e.target.value);
  }

  const renderSortByDropDown = () => {
    return (
      <div className="sortByValue" onClick={() => setIsDropDownShowed(!isDropDownShowed)}>
        {!isDropDownShowed&&
          <div className="sortByOptions">
            <button type="button" data-testid="sortByBtn" className="sortByBtn">{sortCriterion ? sortCriterion : 'Release date'}</button>
          </div>
        }
        {isDropDownShowed &&
          <div className="sortByOptionsDropDown">
            <button type="button" 
              className="sortBydropDownBtn" 
              value="release_date"
              data-testid="release"
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