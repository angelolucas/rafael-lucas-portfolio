// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router/BrowserRouter';

import './styles/style.css';

// App
import HomePage from './containers/home-page';
import WorksPage from './containers/works-page';

ReactDOM.render(
  <Router>
    <div>
      <HomePage />
      <WorksPage />
    </div>
  </Router>,
  document.getElementById('root'),
);
