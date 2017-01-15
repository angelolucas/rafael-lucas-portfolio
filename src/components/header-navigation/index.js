import React from 'react';
import TweenLite from 'gsap';

const about = () => {
  document.body.classList.remove('contact-section--active');
  document.body.classList.add('about-section--active');
};
const contact = () => {
  document.body.classList.remove('about-section--active');
  document.body.classList.add('contact-section--active');
};
const work = () => {
  TweenLite.to(
    window,
    0.5,
    {
      scrollTo: {
        y: window.innerHeight,
      },
    },
  );
};

function HeaderNavigation() {
  return (
    <nav className="header-navigation">
      <button className="header-navigation__item" onClick={about}>
        about
      </button>

      <button className="header-navigation__item" onClick={work}>
        work
      </button>

      <button className="header-navigation__item" onClick={contact}>
        contact
      </button>
    </nav>
  );
}

export default HeaderNavigation;
