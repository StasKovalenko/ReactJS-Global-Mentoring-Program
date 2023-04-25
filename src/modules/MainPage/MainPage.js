import React from "react";
import MovieTilesList from '../MovieTileList/MovieTileList';
import SearchForm from '../SearchForm/SearchForm';
import GenreSelect from '../GenreSelect/GenreSelect';

import './MainPage.css'
import SortControl from "../SortControl/SortControl";

const MainPage = () => {
  return (
    <>
      <div className="wrapper">
        <div className="header">
          <div className="headerBackground"></div>
          <SearchForm />
        </div>
        <div className="main">
          <div className="moviesSection">
            <div className="filterSectionContainer">
              <div className="filterBy">
                <GenreSelect />
              </div>
              <div className="sortBy">
                <SortControl />
              </div>
            </div>
            <MovieTilesList />
          </div>
        </div>
        <div className="footer">
        </div>
      </div>
    </>
  )

}

export default MainPage;