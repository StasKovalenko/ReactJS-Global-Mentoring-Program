import React, { useState } from "react";

import './MovieEditAndDelete.css';
import { Link } from "react-router-dom";

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
        <Link to={`/movie/${props.movie.id}/edit`}><button type="button" className="dropDownBtnEdit" onClick={handleEditBtn}>Edit</button></Link>
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
