import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './modules/Counter/Counter';
import GenreSelect from './modules/GenreSelect/GenreSelect';
import SearchForm from './modules/SearchForm/SearchForm';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter />
    <SearchForm />
    <GenreSelect />
  </React.StrictMode>
);
