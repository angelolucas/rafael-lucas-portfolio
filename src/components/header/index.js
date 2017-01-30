import React, { Component } from 'react';


import Introduction from '../../sections/introduction';
import About from '../../sections/about';
import Contact from '../../sections/contact';
import Navigation from '../header-navigation';

class Header extends Component {
  componentDidMount() {
    const heightEffect = (80 / 100) * window.innerHeight;

    window.addEventListener('scroll', () => {
      let opacity = (window.scrollY * 100) / heightEffect; // get scroll in percentage
      opacity /= 100; // decreases to scale 0 to 1
      opacity = 1 - opacity; // invert values
      opacity = opacity.toFixed(3); // limits to 3 decimals

      if (opacity < 0) {
        opacity = 0;
      }

      this.effect.setAttribute('style', `opacity:${opacity}`);
    });
  }
  render() {
    return (
      <header className="header">
        <div ref={(effect) => { this.effect = effect; }}>
          <div className="header__background" />

          <h1 className="header__title">Rafael Lucas</h1>

          <Introduction />

          <About />

          <Contact />

          <Navigation />
        </div>
      </header>
    );
  }
}

export default Header;
