import React from 'react';

import WorkPage from '../work-page';

import WorkHead from '../../components/work-head';

// Assets
import video from './media/video.mp4';
import logo from './media/logo.png';
import mockup from './media/mockup.png';

function Section() {
  return (
    <section className="dy">

      {/* Hero Image */}
      <WorkHead
        title="David Yurman"
        category="web mobile"
        color="black"
        src={video}
        type="video"
      />

      {/* Intro */}
      <div className="work-intro">
        <div className="container">
          <img src={logo} width="116" alt="David Yurman" />
          <h2>Concept</h2>
          <h3 className="work-intro__subtitle">Discover the artistry and inspiration of America’s preeminent jewelry designer.</h3>
          <p className="work-intro__description">{'David Yurman Inc. is a privately held American designer jewelry company founded by David Yurman and Sybil Yurmanand headquartered in New York City. There are currently a total of 32 David Yurman boutiques in North America and worldwide.'}</p>
        </div>
      </div>

      {/* Mockup */}
      <div className="container">
        <img src={mockup} alt="" />
      </div>

      {/* Objective */}
      <div className="work-objective">
        <div className="container">
          <h2>Objective</h2>
          <p>{'Projetar uma experiência móvel para um comércio eletrônico de jóias de luxo, permitindo que a exposição e compra dos produtos sejam efetuadas de maneira amigável, intuitiva e elegante.'}</p>
        </div>
      </div>

    </section>
  );
}

function DavidYurman() {
  return <WorkPage section={Section()} position={4} />;
}

export default DavidYurman;
