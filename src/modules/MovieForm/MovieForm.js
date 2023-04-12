import React from "react";
import AddAndEditModal from "./components/AddAndEditModal/AddAndEditModal";
import DeleteModal from "./components/DeleteModal/DeleteModal";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary"

import "./MovieForm.css";

const MovieForm = (props) => {
  const { modalMovieType, isOpenDeleteDialog } = props;

  return (
    <ErrorBoundary>
      {!isOpenDeleteDialog && (<AddAndEditModal modalMovieType={modalMovieType} {...props}/>)}
      {isOpenDeleteDialog && (<DeleteModal {...props}/>)}
    </ErrorBoundary>
  )
}

export default MovieForm;
