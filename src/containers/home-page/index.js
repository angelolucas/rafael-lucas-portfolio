import React from 'react';

import Header from '../../components/header';
import ListWorks from '../../components/list-works';
import HomeFooter from '../../components/home-footer';

const HomePage = () => (
  <div className="home-page">
    <Header />

    <main className="home-page--main">
      <ListWorks />
    </main>

    <HomeFooter />
  </div>
);

export default HomePage;
