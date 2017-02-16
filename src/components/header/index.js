import React from 'react';

import Introduction from '../../sections/introduction';
import About from '../../sections/about';
import Contact from '../../sections/contact';
import Navigation from '../header-navigation';

function Header() {
  return (
    <header className="header">
      <Introduction />

      <About />

      <Contact />

      <Navigation />
    </header>
  );
}

export default Header;
