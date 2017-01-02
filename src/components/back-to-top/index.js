import React, { Component } from 'react';
import TweenLite from 'gsap';

class BackToTop extends Component {
  backToTop() {
    TweenLite.to(
      document.querySelector('.single-work .scroll'),
      0.5,
      { scrollTo: 0 },
    );
  }
  render() {
    return (
      <button
        ref={(button) => { this.button = button; }}
        className="back-to-top"
        onClick={this.backToTop}
      />
    );
  }
}

export default BackToTop;
