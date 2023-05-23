import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Dialog from "../Dialog/Dialog";
import { Portal } from "react-portal";
import MovieForm from "../MovieForm/MovieForm";
import SearchForm from '../SearchForm/SearchForm';

import "./Header.css";
import MovieDetailsWrapper from "../MovieDetails/components/MovieDetailsWrapper";
import { Link, useParams } from "react-router-dom";

const Header = (props) => {
  const params = useParams();
  const [isOpenDialogAddMovie, setIsOpenDialogAddMovie] = useState(false);
  const { setSearchParams, isMovieDetailsShowed} = props;
  const [isAddFormSubmitted, setIsAddFormSubmitted] = useState(false);

  useEffect(() => {
    if (params.new) {
      setIsOpenDialogAddMovie(true)
      setIsAddFormSubmitted(false)
    }
    if (!params.new) {
      setIsOpenDialogAddMovie(false)
    }
  }, [params.new])
  
  return (
    <>
      {isMovieDetailsShowed ? <MovieDetailsWrapper/> : 
        <div className="header">
          <div className="headerBackground"></div>
          <div className="headerContent" data-testid="headerContent">
            <div className="headerLogo" data-testid="header-logo">
            </div>
            <Link to={'/new'}>
              <Button
                type={"button"}
                className="addMovieBtn"
                btntext= "+ add movie"
                data-testid={"addMovieBtnTestId"}
                data-value={"addMovieBtnValue"}
                data-index={"addMovieBtnIndex"}
                data-cy={"addMovieBtnCy"}
              />
              </Link>
            <Portal node={document && document.getElementById('dialog-root')}>
              {isOpenDialogAddMovie&& (
                <Dialog title={!isAddFormSubmitted ? "add movie" : ""}>
                  <MovieForm 
                    modalMovieType={"add"} 
                    isAddFormSubmitted={isAddFormSubmitted} 
                    setIsAddFormSubmitted={setIsAddFormSubmitted}
                  />
                </Dialog>
                )
              }
            </Portal>
          </div>
          <SearchForm setSearchParams={setSearchParams} />
        </div>
      }
    </>
  )
}

export default Header;
