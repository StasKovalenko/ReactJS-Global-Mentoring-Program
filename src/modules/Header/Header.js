import React, { useState } from "react";
import Button from "../Button/Button";
import Dialog from "../Dialog/Dialog";
import { Portal } from "react-portal";
import MovieForm from "../MovieForm/MovieForm";

import "./Header.css";

const Header = () => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const toggleDialog = () => {
    setIsOpenDialog(!isOpenDialog)
  }

  const handleOpenDialog = () => {
    toggleDialog()
  }
  
  return (
    <div className="headerContent" data-testid="headerContent">
      <div className="headerLogo" data-testid="header-logo">
      </div>
      <Button
        type={"button"}
        className="addMovieBtn"
        btntext= "+ add movie"
        onClick={handleOpenDialog}
        data-testid={"addMovieBtnTestId"}
        data-value={"addMovieBtnValue"}
        data-index={"addMovieBtnIndex"}
        data-cy={"addMovieBtnCy"}
      />
      <Portal node={document && document.getElementById('dialog-root')}>
        {isOpenDialog&& (
          <Dialog onClose={toggleDialog} title={"add movie"}>
            <MovieForm modalMovieType={"add"}/>
          </Dialog>
          )
        }
      </Portal>
    </div>
  )


}

export default Header;