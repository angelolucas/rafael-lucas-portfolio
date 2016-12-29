import React, { Component } from 'react';
import TweenLite from 'gsap';

class BackToTop extends Component {
  onClickButton() {
    const singleWork = document.querySelector('.single-work .scroll');
    TweenLite.to(singleWork, 0.5, { scrollTo: 0 });
  }
  render() {
    return (
      <button className="back-to-top" onClick={this.onClickButton}>top</button>
    );
  }
}

export default BackToTop;
