import React, { Component } from 'react';
import { Link } from 'react-router';

import IntroHead from '../../components/intro';
import ListWorks from '../../components/list-works';
import Footer from '../../components/footer';
import BackToTop from '../../components/back-to-top';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <IntroHead />
        <main>
          <ListWorks />
        </main>

        <Footer />

        <section className="single-work">
          {this.props.children}

          <Link className="single-work__back" to="/">
            Back
            <div />
          </Link>
          <BackToTop />
        </section>
      </div>
    );
  }
}

export default App;
