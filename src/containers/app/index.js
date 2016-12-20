import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import IntroHead from '../../components/intro';
import ListWorks from '../../components/list-works';
import Footer from '../../components/footer';
import BackToTop from '../../components/back-to-top';

const App = ({ children }) => (
  <div className="app-container">
    <IntroHead />
    <main>
      <ListWorks />
    </main>

    <Footer />

    <section className="single-work">
      {children}

      <Link className="single-work__back" to="/">
        Back
        <div />
      </Link>
      <BackToTop />
    </section>
  </div>
);

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};


export default App;
