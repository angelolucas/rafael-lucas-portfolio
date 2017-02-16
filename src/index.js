// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router/BrowserRouter';

// Global Styles
import './styles/style.css';

// App
import Home from './sections/home';
import AllWorks from './sections/all-works';

ReactDOM.render(
  <Router>
    <div>
      <Home />
      <AllWorks />
    </div>
  </Router>,
  document.getElementById('root'),
);
