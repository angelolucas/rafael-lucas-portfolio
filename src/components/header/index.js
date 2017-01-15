import React, { Component } from 'react';
import TweenLite from 'gsap';

import About from '../../sections/about';

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

      this.background.setAttribute('style', `opacity:${opacity}`);
      this.content.setAttribute('style', `opacity:${opacity}`);
    });
  }
  about() {
    document.body.classList.add('about-section--active');
  }
  contact() {
    document.body.classList.add('contact-section--active');
  }
  work() {
    TweenLite.to(
      window,
      0.5,
      {
        scrollTo: {
          y: window.innerHeight,
        },
      },
    );
  }

  render() {
    return (

      <header className="header">
        <div className="header__background" ref={(background) => { this.background = background; }} />
        <div ref={(content) => { this.content = content; }}>
          <h1 className="header__title">Rafael Lucas</h1>

          <div className="header__description">
            <h2>
              {'I am a brazilian designer specializing in interactive experiences living in Brasília, Brazil.'}
            </h2>
          </div>

          <About />

          <nav className="header__anchoring">
            <button className="item" onClick={this.about}>
              about
            </button>

            <button className="item" onClick={this.work}>
              work
            </button>

            <button className="item" onClick={this.contact}>
              contact
            </button>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
