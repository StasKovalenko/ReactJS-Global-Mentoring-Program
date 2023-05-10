import React, { useState, useEffect } from "react";
import MovieTilesList from '../MovieTileList/MovieTileList';
import SearchForm from '../SearchForm/SearchForm';
import GenreSelect from '../GenreSelect/GenreSelect';
import SortControl from "../SortControl/SortControl";
import Header from "../Header/Header";

import './MovieListPage.css'

const MovieListPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortCriterion, setSortCriterion] = useState('');
  const [activeGenre, setActiveGenre] = useState('');
  const [selectedMovie, setSelectedMovie] = useState('');
  const [isOpenDialogAddMovie, setIsOpenDialogAddMovie] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [isMovieDetailShowed, setIsMovieDetailShowed] = useState(null);

  const handleMovieContainerClick = (e) => {
    if(e.target.className === 'movieLogo_img') {
      setIsMovieDetailShowed(!isMovieDetailShowed)
    }
    if(e.target.className !== 'movieLogo_img') {
      setIsMovieDetailShowed(false)
    }
  }

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    fetch(`http://localhost:4000/movies?limit=100`, { signal })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        let filteredMovies = data.data;
      if (searchQuery) {
        filteredMovies = filteredMovies.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()));
      }
      if (activeGenre === 'all') {
        setMovieList(data.data)
      }
      if (activeGenre && activeGenre !== 'all') {
        filteredMovies = filteredMovies.filter(movie => movie.genres.includes(activeGenre));
      }

      switch (sortCriterion) {
        case 'release_date':
          filteredMovies = filteredMovies.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
          break;
        case 'title':
          filteredMovies = filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
          break;
        default:
          break;
      }
      setMovieList(filteredMovies)
      })
      .catch(err => console.log(err));

    return function cleanup() {
      abortController.abort();
    };
  }, [searchQuery, sortCriterion, activeGenre]);

  return (
    <>
      <div className="wrapper">
        <div className="header">
          <div className="headerBackground"></div>
          <Header 
            isOpenDialogAddMovie={isOpenDialogAddMovie}
            setIsOpenDialogAddMovie={setIsOpenDialogAddMovie} 
          />
          <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
        <div className="main" onClick={handleMovieContainerClick}>
          <div className="moviesSection">
            <div className="filterSectionContainer">
              <div className="filterBy">
                <GenreSelect activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
              </div>
              <div className="sortBy">
                <SortControl sortCriterion={sortCriterion} setSortCriterion={setSortCriterion} />
              </div>
            </div>
            <MovieTilesList
              
              setIsMovieDetailShowed={setIsMovieDetailShowed}
              isMovieDetailShowed={isMovieDetailShowed}
              movieList={movieList}
              selectedMovie={selectedMovie}
              setSelectedMovie={setSelectedMovie}
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