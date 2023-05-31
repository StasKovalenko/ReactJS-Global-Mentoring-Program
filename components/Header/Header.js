// components/Header/Header.js
import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Dialog from "../Dialog/Dialog";
import { Portal } from "react-portal";
import MovieForm from "../MovieForm/MovieForm";
import SearchForm from "../SearchForm/SearchForm";
import { useRouter } from "next/router";
import MovieDetailsWrapper from "../MovieDetails/components/MovieDetailsWrapper";
import Link from 'next/link';

import styles from "./Header.module.css";

const Header = (props) => {
  const router = useRouter();
  const movieId = router.query.movieId;
  const [isOpenDialogAddMovie, setIsOpenDialogAddMovie] = useState(false);
  const { setSearchParams, isMovieDetailsShowed } = props;
  const [isAddFormSubmitted, setIsAddFormSubmitted] = useState(false);

  useEffect(() => {
    if (router.query.new) {
      setIsOpenDialogAddMovie(true);
      setIsAddFormSubmitted(false);
    }
    if (!router.query.new) {
      setIsOpenDialogAddMovie(false);
    }
  }, [router.query.new]);

  const PortalWrapper = (props) => {
    return (
      typeof document !== "undefined" && (
        <Portal node={document.getElementById("dialog-root")}>
          {props.children}
        </Portal>
      )
    );
  };

  return (
    <>
      {isMovieDetailsShowed ? (
        <MovieDetailsWrapper />
      ) : (
        <div className={styles.header}>
          <div className={styles.headerBackground}></div>
          <div className={styles.headerContent} data-testid="headerContent">
            <div
              className={styles.headerLogo}
              data-testid="header-logo"
            ></div>
            <Link href={"/new"}>
              <Button
                type={"button"}
                className={styles.addMovieBtn}
                btntext="+ add movie"
                data-testid={"addMovieBtnTestId"}
                data-value={"addMovieBtnValue"}
                data-index={"addMovieBtnIndex"}
                data-cy={"addMovieBtnCy"}
              />
            </Link>
            <PortalWrapper>
              {isOpenDialogAddMovie && (
                <Dialog title={!isAddFormSubmitted ? "add movie" : ""}>
                  <MovieForm
                    modalMovieType={"add"}
                    isAddFormSubmitted={isAddFormSubmitted}
                    setIsAddFormSubmitted={setIsAddFormSubmitted}
                  />
                </Dialog>
              )}
            </PortalWrapper>
          </div>
          <SearchForm setSearchParams={setSearchParams} />
        </div>
      )}
    </>
  );
};

export default Header;