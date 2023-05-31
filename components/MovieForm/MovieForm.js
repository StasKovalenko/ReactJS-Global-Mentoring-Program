import React from "react";
import AddFormModal from "./components/AddFormModal/AddFormModal";
import DeleteModal from "./components/DeleteModal/DeleteModal";

import styles from "./MovieForm.module.css"
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
      <div className={styles.modalSuccessWrap}>
        <div className={styles.modalSuccessIcon}></div>
        <p className={styles.modalSuccessTitle}>congratulations!</p>
        <p className={styles.modalSuccessDiscription}>The movie has been added to database successfully </p>
      </div>
    );
  }
  
}

export default MovieForm;
