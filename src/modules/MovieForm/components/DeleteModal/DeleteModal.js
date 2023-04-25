import React from "react";
import Button from "../../../Button/Button";

const DeleteModal = (props) => {
  const { movie } = props;

  const handleDeleteMovie = (e) => {
    console.log(movie,e);
  }

  return (
    <div className="modalMovieWrap deleteModalWrap">
      <p className="modalDeleteContent">Are you sure you want to delete this movie?</p>
      <div className="modalDeleteBtnWrapper">
        <Button 
          btntext={"confirm"}
          type={'reset'}
          onClick={handleDeleteMovie}
        />
      </div> 
    </div>
  )
}

export default DeleteModal;
