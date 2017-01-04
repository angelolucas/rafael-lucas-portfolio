import React from 'react';

import HomeIntro from '../../components/home-intro';
import ListWorks from '../../components/list-works';
import HomeFooter from '../../components/home-footer';

const HomePage = () => (
  <div className="home-page">
    <HomeIntro />

    <main className="home-page--main">
      <ListWorks />
    </main>

    <HomeFooter />
  </div>
);

export default HomePage;
