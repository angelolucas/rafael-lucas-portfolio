import React from 'react';
import TweenLite from 'gsap';

const active = (e) => {
  const elems = document.querySelectorAll('.header-navigation__item');

  [].forEach.call(elems, (el) => {
    el.classList.remove('link-underlined--active');
  });

  (e.target).classList.add('link-underlined--active');
};
const about = (e) => {
  document.body.classList.remove('contact-section--active');
  document.body.classList.add('about-section--active');
  active(e);
};
const contact = (e) => {
  document.body.classList.remove('about-section--active');
  document.body.classList.add('contact-section--active');
  active(e);
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
      <button className="header-navigation__item header-navigation__item--about link-underlined" onClick={about}>
        about
      </button>

      <button className="header-navigation__item header-navigation__item--work link-underlined" onClick={work}>
        work
      </button>

      <button className="header-navigation__item header-navigation__item--contact link-underlined" onClick={contact}>
        contact
      </button>
    </nav>
  );
}

export default HeaderNavigation;
