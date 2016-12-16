import React, { Component } from 'react';
import { Link } from 'react-router';

import IntroHead from '../../components/intro';
import ListWorks from '../../components/listworks';
import Footer from '../../components/footer';
import BackToTop from '../../components/backtotop';

class app extends Component {
  render() {
    return (
      <div className="app-container">
        
        <IntroHead></IntroHead>
        
        <main>
          <ListWorks></ListWorks>
        </main>

        <Footer></Footer>

        <section className="single-work">
          <Link className="single-work__back" to="/">Back</Link>
          {this.props.children}
          <BackToTop></BackToTop>
        </section>
      </div>
    );
  }
}

export default app;
