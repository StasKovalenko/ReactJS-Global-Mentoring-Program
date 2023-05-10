import React from 'react';
import ReactDOM from 'react-dom/client';
// import Counter from './modules/Counter/Counter';

import MovieListPage from './modules/MovieListPage/MovieListPage';


import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Counter /> */}
    <MovieListPage />
  </React.StrictMode>
);
