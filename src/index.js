// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router/BrowserRouter';

// Global Styles
import './styles/style.css';

// App
import Header from './components/header';
import ListWorks from './components/list-works';
import Footer from './components/footer';
import Works from './sections/works';

ReactDOM.render(
  <Router>
    <div>
      <Header />

      <ListWorks />

      <Footer />

      <Works />
    </div>
  </Router>,
  document.getElementById('root'),
);
