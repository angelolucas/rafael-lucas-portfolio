import React, { Component } from 'react';
import TweenLite from 'gsap';

class BackToTop extends Component {
  componentDidMount() {
    const container = document.querySelector(this.props.container);
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
        ref={(button) => { this.button = button; }}
        className="back-to-top"
        onClick={() => this.backToTop(this.props.container)}
      />
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
