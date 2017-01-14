import React from 'react';

import Header from '../../components/header';
import ListWorks from '../../components/list-works';
import Footer from '../../components/footer';

const HomePage = () => (
  <div className="home-page">
    <Header />

    <main className="home-page--main">
      <ListWorks />
    </main>

    <Footer />
  </div>
);

export default HomePage;
