import React, { Component } from 'react';
import TweenLite from 'gsap';
import GetWorks from '../get-works';

class WorkHead extends Component {
  componentWillMount() {
    this.media = () => {
      this.mediaType = 'image';

      if (GetWorks[this.props.id].video) {
        this.mediaType = 'video';
        return (
          <video
            className="work-head__media--video"
            src={GetWorks[this.props.id].video}
            poster={GetWorks[this.props.id].poster}
            autoPlay
            muted
            loop
          />
        );
      }
      return (
        <div
          className="work-head__media--image"
          style={{ backgroundImage: `url(${GetWorks[this.props.id].poster})` }}
        />
      );
    };
  }
  componentDidMount() {
    const el = document.querySelector(`.work-page--${GetWorks[this.props.id].shortName} .work-page__scroll`);
    const height = window.innerHeight;
    let visible = false;

    if (window.innerWidth >= 480) {
      el.addEventListener('scroll', (e) => {
        if (e.target.scrollTop < height) {
          this.workMedia.style.transform = `translateY(${e.target.scrollTop / 2}px)`;

          /* play video if is visible */
          if (visible === false && this.mediaType === 'video') {
            el.querySelector('.work-head__media--video').play();
            visible = true;
          }
        /* pause video if not visible */
        } else if (visible === true && this.mediaType === 'video') {
          el.querySelector('.work-head__media--video').pause();
          visible = false;
        }
      });
    }
  }
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
    return (
      <div className="work-head hide-viewport--min">
        <div className="work-head__media" ref={(workMedia) => { this.workMedia = workMedia; }}>
          {this.media()}
        </div>
        <div className="container">
          <h1 className="work-head__title">{ GetWorks[this.props.id].title }</h1>
          <h6 className="work-head__category">{ GetWorks[this.props.id].category }</h6>
        </div>
        <button
          type="button"
          title="Go Down"
          className="work-head__button"
          ref={(button) => { this.button = button; }}
          onClick={this.downButton}
        />
      </div>
    );
  }
}

WorkHead.propTypes = {
  id: React.PropTypes.number,
};

export default WorkHead;
