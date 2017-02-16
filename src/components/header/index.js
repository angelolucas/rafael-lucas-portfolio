import React, { Component } from 'react';
import TweenLite from 'gsap';

import Introduction from '../../sections/introduction';
import About from '../../sections/about';
import Contact from '../../sections/contact';

class Header extends Component {
  componentWillMount() {
    this.section = (id) => {
      const section = document.querySelector(`.header__section[data-section-id="${id}"]`);
      const sectionSiblings = document.querySelectorAll('.header__section');
      const nav = document.querySelector(`.header__nav__item[data-section-id="${id}"]`);
      const navSiblings = document.querySelectorAll('.header__nav__item');

      [].forEach.call(sectionSiblings, (el) => {
        el.classList.remove('header__section--active');
      });
      [].forEach.call(navSiblings, (el) => {
        el.classList.remove('header__nav__item--active', 'link-underlined--active');
      });

      section.classList.add('header__section--active');

      if (nav) {
        nav.classList.add('header__nav__item--active', 'link-underlined--active');
      }
    };
    this.work = () => {
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
  }
  render() {
    return (
      <header className="header">

        {/* Sections */}
        <div className="header__sections">

          {/* Introduction Section (Default) */}
          <div data-section-id="1" className="header__section header__section--center header__section--active">
            <Introduction />
          </div>

          {/* About Section */}
          <div data-section-id="2" className="header__section header__section--left">
            <About />
            <button
              className="header__section__back link-underlined"
              onClick={() => this.section(1)}
            >
              Back <span className="header__section__back--arrow" />
            </button>
          </div>

          {/* Contact Section */}
          <div data-section-id="3" className="header__section header__section--right">
            <Contact />
            <button
              className="header__section__back link-underlined"
              onClick={() => this.section(1)}
            >
              <span className="header__section__back--arrow" /> Back
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="header__nav">
          <button
            className="header__nav__item link-underlined"
            data-section-id="2"
            onClick={() => this.section(2)}
          >
            about
          </button>

          <button
            className="header__nav__item link-underlined"
            onClick={this.work}
          >
            work
          </button>

          <button
            className="header__nav__item link-underlined"
            data-section-id="3"
            onClick={() => this.section(3)}
          >
            contact
          </button>
        </nav>
      </header>
    );
  }
}

export default Header;
