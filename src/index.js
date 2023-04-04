import React from 'react';
import ReactDOM from 'react-dom/client';
// import Counter from './modules/Counter/Counter';

import MainPage from './modules/MainPage/MainPage';


import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Counter /> */}
    <MainPage />
  </React.StrictMode>
);
