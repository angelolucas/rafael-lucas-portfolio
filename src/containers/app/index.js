import React, { Component } from 'react';
import {Link} from 'react-router';
import IntroHead from '../../components/intro';
import Footer from '../../components/footer';

class app extends Component {
  render() {
    return (
      <div className="app">
        
        <IntroHead></IntroHead>
        
        <main>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mova-mais">Mova Mais</Link>
              <Link to="/caixa-nas-ruas">Caixa nas Ruas</Link>
              <Link to="/bb-privete">BB Privete</Link>
              <Link to="/david-yurman">David Yurman</Link>
              <Link to="/encinter">Encinter</Link>
              <Link to="/emicida">Emicida</Link>
            </li>
          </ul>
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
