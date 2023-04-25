import React, { useState } from "react";

import './MovieEditAndDelete.css';

const MovieEditAndDelete = (props) => {
  const [isDropDownActive, setIsDropDownActive] = useState(false);

  const handleOnClick = (e) => {
    if (e.target.className === "dropDownBtnClose") {
      return
    }
    setIsDropDownActive(true);
  }

  const handleCloseDropDownMenu = () => {
    setIsDropDownActive(false);
  }

  const handleEditBtn = () => {
    props.toggleAddAndEditDialog()
  }

  const handleDeleteBtn = () => {
    props.toggleDeleteDialog()
  }

  const renderDropDown = () => {
    return (
      <div className="dropDownMenu">
        <button type="button" className="dropDownBtnClose" onClick={() => setIsDropDownActive(false)}>x</button>
        <button type="button" className="dropDownBtnEdit" onClick={handleEditBtn}>Edit</button>
        <button type="button" className="dropDownBtnDelete" onClick={handleDeleteBtn}>Delete</button>
      </div>
    )
  }

  const renderEditAndDeletBtn = () => {
    return (
      <div 
      className="editAndDelete"
      style={{display: props.toShowEditBtn ? "flex" : "none"}}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
    )
  }
  
  return (
    <div className="editAndDeleteWrap" onClick={handleOnClick} onMouseLeave={handleCloseDropDownMenu}>
      {isDropDownActive ? renderDropDown() : renderEditAndDeletBtn()}
    </div>
    
  )
}

export default MovieEditAndDelete;
