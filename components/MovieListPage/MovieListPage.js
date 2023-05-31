import React, { useState } from "react";
import { useRouter } from "next/router";
// import MovieTilesList from "../MovieTileList/MovieTileList";
// import GenreSelect from "../GenreSelect/GenreSelect";
// import SortControl from "../SortControl/SortControl";
import Header from "../Header/Header";

import styles from "./MovieListPage.module.css";

const MovieListPage = () => {
  // const { moviesData } = props;
  const router = useRouter();
  const movieId = router.query.movieId;
  const [isMovieDetailsShowed, setIsMovieDetailsShowed] = useState(movieId ? true : false);
  
  // const handleMainClick = (e) => {
  //   if(e.target.className === 'movieLogo_img') {
  //     setIsMovieDetailsShowed(!isMovieDetailsShowed)
  //   }
  //   if(e.target.className !== 'movieLogo_img') {
  //     setIsMovieDetailsShowed(false)
  //   }
  // }

  return (
    <>
      <div className={styles.wrapper}>
        <Header
          isMovieDetailsShowed={isMovieDetailsShowed}
        />
        <div className={styles.main} >
          <div className={styles.moviesSection}>
            <div className={styles.filterSectionContainer}>
              {/* <div className={styles.filterBy}>
                <GenreSelect />
              </div>
              <div className={styles.sortBy}>
                <SortControl />
              </div> */}
            </div>
            {/* <MovieTilesList
              movieList={moviesData}   
            /> */}
          </div>
        </div>
        <div className={styles.footer}>
        </div>
      </div>
    </>
  )

}

export default MovieListPage;

