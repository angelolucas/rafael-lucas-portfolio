import React, { Component } from 'react';
import TweenLite from 'gsap';

class WorkHead extends Component {
  downButton() {
    TweenLite.to(
      document.querySelector('.single-work__scroll'),
      0.5,
      {
        scrollTo: {
          y: window.innerHeight,
        },
      },
    );
  }
  render() {
    return (
      <div className="work-head" style={{ backgroundImage: `url(${this.props.image})` }}>
        <button
          type="button"
          className="work-head__button"
          ref={(button) => { this.button = button; }}
          onClick={this.downButton}
        />
      </div>
    );
  }
}

WorkHead.propTypes = {
  image: React.PropTypes.string,
};

export default WorkHead;
