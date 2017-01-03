import React, { Component } from 'react';
import TweenLite from 'gsap';

class BackToTop extends Component {
  componentDidMount() {
    const container = document.querySelector('.single-work .scroll');
    const height = 1000;
    const button = this.button;

    container.onscroll = () => {
      if (container.scrollTop > height) {
        button.classList.add('back-to-top--show');
      } else {
        button.classList.remove('back-to-top--show');
      }
    };
  }
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
