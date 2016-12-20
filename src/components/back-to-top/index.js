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
      <div className="back-to-top">
        <button onClick={this.onClickButton}>top</button>
      </div>
    );
  }
}

export default BackToTop;
