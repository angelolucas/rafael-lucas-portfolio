import React from 'react';

import IntroHead from '../../components/intro';
import ListWorks from '../../components/list-works';
import Footer from '../../components/footer';

const App = () => (
  <div className="app-container">
    <IntroHead />

    <main>
      <ListWorks />
    </main>

    <Footer />
  </div>
);

export default App;
