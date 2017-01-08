import React, { Component } from 'react';
import TweenLite from 'gsap';

class WorkHead extends Component {
  downButton() {
    TweenLite.to(
      document.querySelector('.works-page__scroll'),
      0.5,
      {
        scrollTo: {
          y: window.innerHeight,
        },
      },
    );
  }
  render() {
    let media = null;
    // Media Type Video
    if (this.props.type === 'video') {
      media = (
        <video
          className="work-head__media work-head__media--video"
          src={this.props.src}
          autoPlay
          poster={this.props.poster}
          muted
          loop
        />
      );
    }

    // Media Type Image
    if (this.props.type === 'image') {
      media = (
        <div
          className="work-head__media work-head__media--image"
          style={{ backgroundImage: `url(${this.props.src})` }}
        />
      );
    }
    return (
      <div className="work-head">
        {media}
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
  src: React.PropTypes.string,
  type: React.PropTypes.string,
  poster: React.PropTypes.string,
};

export default WorkHead;
