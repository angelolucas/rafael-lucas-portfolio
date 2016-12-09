import React, { Component } from 'react';

import './index.css';
import IntroHead from '../../components/intro';
import ListWorks from '../../components/listworks';
import Footer from '../../components/footer';

class app extends Component {
  render() {
    return (
      <div className="app-container">
        
        <IntroHead></IntroHead>
        
        <main>
          <ListWorks></ListWorks>
        </main>

        <Footer></Footer>

        <div className="content-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default app;
