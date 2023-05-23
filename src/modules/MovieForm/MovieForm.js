import React from "react";
import AddFormModal from "./components/AddFormModal/AddFormModal";
import DeleteModal from "./components/DeleteModal/DeleteModal";

import "./MovieForm.css";
import EditFormModal from "./components/EditFormModal/EditFormModal";

const MovieForm = (props) => {
  const { isOpenDeleteDialog, isAddFormSubmitted } = props;
  
  if (!isAddFormSubmitted) {
    return (
      (isOpenDeleteDialog ? <DeleteModal {...props} /> : 
        props.modalMovieType==="edit" ? 
          <EditFormModal {...props}/> : <AddFormModal {...props} />
      )
    )
  } else {
    return (
      <div className="modalSuccessWrap">
        <div className="modalSuccessIcon"></div>
        <p className="modalSuccessTitle">congratulations!</p>
        <p className="modalSuccessDiscription">The movie has been added to database successfully </p>
      </div>
    );
  }
  
}

export default MovieForm;
