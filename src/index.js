// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router/BrowserRouter';
import ReactGA from 'react-ga';

// Global Styles
import './styles/style.css';

// App
import Home from './sections/home';
import AllWorks from './sections/all-works';

ReactGA.initialize('UA-93149537-1');

function fireTracking() {
  ReactGA.pageview(window.location.hash);
}

ReactDOM.render(
  <Router onUpdate={fireTracking}>
    <div>
      <Home />
      <AllWorks />
    </div>
  </Router>,
  document.getElementById('root'),
);
