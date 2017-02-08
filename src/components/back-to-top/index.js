import React, { Component } from 'react';
import TweenLite from 'gsap';

class BackToTop extends Component {
  backToTop(container) {
    TweenLite.to(
      document.querySelector(container),
      0.5,
      { scrollTo: 0 },
    );
  }
  render() {
    return (
      <button
        type="button"
        title="Back To Top"
        className="back-to-top"
        onClick={() => this.backToTop(this.props.container)}
      >
        <svg viewBox="0 0 483 266.1">
          <path className="back-to-top__svg" d="M20.2 263L239.9 41l222.8 225.1 20.3-20.6-222.7-225v-.1L240.1 0 0 242.6z" />
        </svg>
      </button>
    );
  }
}

BackToTop.propTypes = {
  container: React.PropTypes.string,
};

BackToTop.defaultProps = {
  container: 'body',
};

export default BackToTop;
