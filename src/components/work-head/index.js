import React, { Component } from 'react';
import TweenLite from 'gsap';

class WorkHead extends Component {
  downButton() {
    TweenLite.to(
      document.querySelector('.work-page__scroll'),
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
      <div className="work-head" style={{ backgroundColor: this.props.color }}>
        {media}
        <div className="container">
          <h1 className="work-head__title">{ this.props.title }</h1>
          <h6 className="work-head__category">{ this.props.category }</h6>
        </div>
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
  title: React.PropTypes.string,
  category: React.PropTypes.string,
  color: React.PropTypes.string,
  src: React.PropTypes.string,
  type: React.PropTypes.string,
  poster: React.PropTypes.string,
};

export default WorkHead;
