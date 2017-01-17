import React from 'react';

import WorkPage from '../work-page';

import WorkHead from '../../components/work-head';

// Assets
import video from './media/video.mp4';
import logo from './media/logo.png';

function Section() {
  return (
    <section className="mcd">

      {/* Hero Image */}
      <WorkHead
        title="Emicida"
        category="web mobile"
        color="black"
        src={video}
        type="video"
      />

      {/* Intro */}
      <div className="work-intro">
        <div className="container">
          <img src={logo} width="180" alt="David Yurman" />
          <h2>Concept</h2>
          <h3 className="work-intro__subtitle">E.M.I.C.I.D.A<br /> &quot;Enquanto Minha Imaginação Compuser Insanidades Domino a Arte&quot;</h3>
          <p className="work-intro__description">{'Site institucional do rapper e produtor musical brasileiro Emicida. Considero uma das maiores revelações do hip hop do Brasil. Famoso por suas constantes vitórias nas batalhas do improvi'}</p>
        </div>
      </div>
    </section>
  );
}

function Emicida() {
  return <WorkPage section={Section()} position={6} />;
}

export default Emicida;
