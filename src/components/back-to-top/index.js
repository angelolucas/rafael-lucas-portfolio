import React, { Component } from 'react';
import TweenLite from 'gsap';
import './index.css';

class BackToTop extends Component {
  onClickButton() {
    const singleWork = document.querySelector('.single-work');
    TweenLite.to(singleWork, 0.5, { scrollTo: 0 });
  }
  render() {
    return (
      <button className="back-to-top" onClick={this.onClickButton}>top</button>
    );
  }
}

export default BackToTop;
