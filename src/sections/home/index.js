import React, { Component } from 'react';

import Header from '../../components/header';
import ListWorks from '../../components/list-works';
import Footer from '../../components/footer';

class Home extends Component {
  componentDidMount() {
    const heightEffect = (80 / 100) * window.innerHeight;
    let opacity = 1;

    window.addEventListener('scroll', () => {
      if (window.scrollY < heightEffect) {
        opacity = (window.scrollY * 100) / heightEffect; // get scroll in percentage
        opacity /= 100; // decreases to scale 0 to 1
        opacity = 1 - opacity; // invert values
        opacity = opacity.toFixed(3); // limits to 3 decimals
      } else {
        opacity = 0;
      }

      this.effect.setAttribute('style', `opacity:${opacity}`);
      this.effect2.setAttribute('style', `opacity:${opacity}`);
    });
  }
  render() {
    return (
      <div>
        <div className="home__effect__container">
          <div className="home__effect__header" ref={(effect) => { this.effect = effect; }}>
            <Header />
          </div>
          <ListWorks />
          <div className="home__effect__overlay" ref={(effect2) => { this.effect2 = effect2; }} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
