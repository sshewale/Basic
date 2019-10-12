import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './routes/main-router';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
};

export default App;
