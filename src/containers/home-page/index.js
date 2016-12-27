import React from 'react';

import IntroHead from '../../components/intro';
import ListWorks from '../../components/list-works';
import Footer from '../../components/footer';

const HomePage = () => (
  <div className="home-page">
    <IntroHead />

    <main className="home-page--main">
      <ListWorks />
    </main>

    <Footer />
  </div>
);

export default HomePage;
