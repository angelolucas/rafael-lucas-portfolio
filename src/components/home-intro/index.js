import React, { Component } from 'react';
import TweenLite from 'gsap';

class HomeIntro extends Component {
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

      this.title.setAttribute('style', `opacity:${opacity}`);
      this.background.setAttribute('style', `opacity:${opacity}`);
      this.description.setAttribute('style', `opacity:${opacity}`);
      this.anchoring.setAttribute('style', `opacity:${opacity}`);
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

      <header className="home-intro">
        <div
          ref={(background) => { this.background = background; }}
          className="home-intro__background"
        />

        <h1
          ref={(title) => { this.title = title; }}
          className="home-intro__title"
        >
          Rafael Lucas
        </h1>

        <h2
          ref={(description) => { this.description = description; }}
          className="home-intro__description"
        >
          {'I am a brazilian designer specializing in interactive experiences living in Brasília, Brazil.'}
        </h2>

        <nav
          ref={(anchoring) => { this.anchoring = anchoring; }}
          className="home-intro__anchoring"
        >
          <button
            type="button"
            className="item"
          >
            about
          </button>

          <button
            type="button"
            className="item"
            data-anchoring="list-works"
            onClick={this.goTo}
          >
            work
          </button>

          <button
            type="button"
            className="item"
            data-anchoring="footer"
            onClick={this.goTo}
          >
            contact
          </button>
        </nav>
      </header>
    );
  }
}

export default HomeIntro;
