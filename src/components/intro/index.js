import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TweenLite from 'gsap';

import './index.css';

class HeroIntro extends Component {
  componentDidMount() {
    const title = ReactDOM.findDOMNode(this.refs.title);
    const background = ReactDOM.findDOMNode(this.refs.background);
    const heightEffect = 80 / (100 * window.innerHeight);

    window.addEventListener('scroll', () => {
      let opacity = (window.scrollY * 100) / heightEffect; // get scroll in percentage
      opacity = opacity / 100; // decreases to scale 0 to 1
      opacity = 1 - opacity; // invert values
      opacity = opacity.toFixed(3); // limits to 3 decimals
      if (opacity < 0) {
        opacity = 0;
      }
      title.setAttribute('style', `opacity:${opacity}`);
      background.setAttribute('style', `opacity:${opacity}`);
    });
  }
  goTo(e) {
    const goTo = `.${e.target.attributes['data-anchoring'].value}`;

    TweenLite.to(
      window,
      0.5,
      {
        scrollTo: {
          y: goTo,
          offsetY: 15,
        },
      },
    );
  }
  render() {
    return (

      <header className="hero-intro">
        <div ref="background" className="hero-intro__background" />
        <h1 ref="title" className="hero-intro__title">Rafael Lucas</h1>
        <h2 className="hero-intro__description">I am a brazilian designer specializing in interactive experiences living in Brasília, Brazil.</h2>

        <nav className="hero-intro__anchoring">
          <button className="item" type="button">about</button>
          <button className="item" type="button" data-anchoring="list-works" onClick={this.goTo}>work</button>
          <button className="item" type="button" data-anchoring="footer" onClick={this.goTo}>contact</button>
        </nav>
      </header>

    );
  }
}

export default HeroIntro;
