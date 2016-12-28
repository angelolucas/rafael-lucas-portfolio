// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router/BrowserRouter';

import './styles/style.css';

// App
import HomePage from './containers/home-page';
import SingleWork from './containers/single-work';

ReactDOM.render(
  <Router>
    <div>
      <HomePage />
      <SingleWork />
    </div>
  </Router>,
  document.getElementById('root'),
);
