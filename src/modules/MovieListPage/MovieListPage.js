import React, { useEffect, useState } from "react";
import MovieTilesList from '../MovieTileList/MovieTileList';
import GenreSelect from '../GenreSelect/GenreSelect';
import SortControl from "../SortControl/SortControl";
import Header from "../Header/Header";

import './MovieListPage.css'

import { useParams, useSearchParams } from "react-router-dom";

const MovieListPage = () => {
  const [moviesLoader, setMoviesLoader] = useState([]);
  const { movieId } = useParams()
  const [isMovieDetailsShowed, setIsMovieDetailsShowed] = useState(movieId ? true : false)
  const [searchParams, setSearchParams] = useSearchParams({
    search: '',
    genre: '',
    sort: '',
  })
  
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const urlSearchParams = new URLSearchParams(window.location.search);
    fetch(`http://localhost:4000/movies?limit=100&${urlSearchParams}`, {signal})
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => setMoviesLoader(data.data))
    .catch(err => console.log(err));
    return function cleanup() {
      abortController.abort();
    };
  }, [searchParams]);
 
  const handleMainClick = (e) => {
    if(e.target.className === 'movieLogo_img') {
      setIsMovieDetailsShowed(!isMovieDetailsShowed)
    }
    if(e.target.className !== 'movieLogo_img') {
      setIsMovieDetailsShowed(false)
    }
  }

  return (
    <>
      <div className="wrapper">
        <Header
          isMovieDetailsShowed={isMovieDetailsShowed}
          setSearchParams={setSearchParams}
        />
        <div className="main" onClick={handleMainClick}>
          <div className="moviesSection">
            <div className="filterSectionContainer">
              <div className="filterBy">
                <GenreSelect setSearchParams={setSearchParams}/>
              </div>
              <div className="sortBy">
                <SortControl setSearchParams={setSearchParams}/>
              </div>
            </div>
            <MovieTilesList
              movieList={moviesLoader}
              setSearchParams={setSearchParams}
            />
          </div>
        </div>
        <div className="footer">
        </div>
      </div>
    </>
  )

}

export default MovieListPage;

