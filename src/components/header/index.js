import React, { Component } from 'react';

import Navigation from '../header-navigation';
import About from '../../sections/about';
import Contact from '../../sections/contact';

class Header extends Component {
  componentDidMount() {
    const heightEffect = (90 / 100) * window.innerHeight;

    window.addEventListener('scroll', () => {
      let opacity = (window.scrollY * 100) / heightEffect; // get scroll in percentage
      opacity /= 100; // decreases to scale 0 to 1
      opacity = 1 - opacity; // invert values
      opacity = opacity.toFixed(3); // limits to 3 decimals

      if (opacity < 0) {
        opacity = 0;
      }

      this.bg.setAttribute('style', `opacity:${opacity}`);
      this.content.setAttribute('style', `opacity:${opacity}`);
    });
  }
  render() {
    return (
      <header className="header">
        <div className="header__background" ref={(bg) => { this.bg = bg; }} />
        <div ref={(content) => { this.content = content; }}>
          <h1 className="header__title">Rafael Lucas</h1>

          <div className="header__description">
            <h2>Hi! My name is Rafael Lucas, I&apos;m a designer specializing in interactive experiences living in Brasília, Brazil.</h2>
          </div>

          <About />

          <Contact />

          <Navigation />
        </div>
      </header>
    );
  }
}

export default Header;
