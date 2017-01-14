import React from 'react';

import Header from '../../components/header';
import ListWorks from '../../components/list-works';
import Footer from '../../components/footer';

const Home = () => (
  <div className="home">
    <Header />

    <main className="home--main">
      <ListWorks />
    </main>

    <Footer />
  </div>
);

export default Home;
