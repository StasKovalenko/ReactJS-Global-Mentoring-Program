import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './components/Counter';
import GenreSelect from './components/GenreSelect';
import SearchForm from './components/SearchForm';

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter />
    <SearchForm />
    <GenreSelect />
  </React.StrictMode>
);
