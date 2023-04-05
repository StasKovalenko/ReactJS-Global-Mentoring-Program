import React, { useState } from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

import "./SortControl.css"

const SortControl = () => {
  const [selectedValue, setSelectedValue] = useState('Release Date');
  const [isDropDownShowed, setIsDropDownShowed] = useState(false);

  const handleSortByChange = (e) => {
    const selectedSortBy = e.target.value;
    setSelectedValue(selectedSortBy);
  }

  const renderSortByDropDown = () => {
    return (
      <div className="sortByValue" onClick={() => setIsDropDownShowed(!isDropDownShowed)}>
        {!isDropDownShowed&&
          <div className="sortByOptions">
            <button type="button" className="sortByBtn">{selectedValue}</button>
          </div>
        }
        {isDropDownShowed &&
          <div className="sortByOptionsDropDown">
            <button type="button" className="sortBydropDownBtn" value="Release Date" onClick={handleSortByChange}>Release Date</button>
            <button type="button" className="sortBydropDownBtn" value="Title" onClick={handleSortByChange}>Title</button>
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
        <button type="submit" className={isDropDownShowed? "sortByFillBtnUp" : "sortByFillBtnDown"}></button>
      </div>
    </ErrorBoundary>
  )
}

export default SortControl;