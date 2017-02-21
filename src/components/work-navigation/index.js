import React, { Component } from 'react';
import { Link } from 'react-router';
import GetWorks from '../get-works';

class WorkNavigation extends Component {
  componentWillMount() {
    const worksLength = Object.keys(GetWorks).length;
    const workPosition = this.props.position;
    this.prev = workPosition - 1;
    this.next = workPosition + 1;

    if (workPosition === 1) {
      this.prev = worksLength;
    } else if (workPosition === worksLength) {
      this.next = 1;
    }

    this.media = (id) => {
      if (GetWorks[id].video) {
        return (
          <video
            className="work-nav__media--video"
            src={GetWorks[id].video}
            muted
            loop
          />
        );
      }
      return (
        <div
          className="work-nav__media--image"
          style={{ backgroundImage: `url(${GetWorks[id].poster})` }}
        />
      );
    };
  }
  componentDidMount() {
    const video = document.querySelectorAll('.work-nav__media--video');
    for (let i = 0; i < video.length; i += 1) {
      video[i].onmouseenter = () => {
        video[i].play();
      };
      video[i].onmouseleave = () => {
        setTimeout(() => {
          video[i].pause();
        }, 500);
      };
    }
  }
  render() {
    return (
      <div className="work-nav">
        <div className="work-nav__item work-nav__item--prev">
          <Link className="work-nav__link" to={GetWorks[this.prev].name}>
            {/* Disabled media for small and med devides */}
            { window.innerWidth >= 960 &&
              <div className="work-nav__media hide-viewport--min">{this.media(this.prev)}</div>
            }
            <div className="work-nav__info">
              <span className="work-nav__where">prv</span>
              <span className="work-nav__title-container">
                <span className="work-nav__title">{GetWorks[this.prev].title}</span>
              </span>
            </div>
          </Link>
        </div>
        <div className="work-nav__item work-nav__item--next">
          <Link className="work-nav__link" to={GetWorks[this.next].name}>
            {/* Disabled media for small and med devides */}
            { window.innerWidth >= 960 &&
              <div className="work-nav__media hide-viewport--min">{this.media(this.next)}</div>
            }
            <div className="work-nav__info">
              <span className="work-nav__where">nxt</span>
              <span className="work-nav__title-container">
                <span className="work-nav__title">{GetWorks[this.next].title}</span>
              </span>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

WorkNavigation.propTypes = {
  position: React.PropTypes.number,
};

export default WorkNavigation;
