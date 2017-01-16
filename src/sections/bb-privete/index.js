import React from 'react';

import WorkPage from '../work-page';

import WorkHead from '../../components/work-head';

// Assets
import video from './media/video.mp4';
import logo from './media/logo.png';
/*
import mockup from './media/mockup.png';
import siteMap from './media/site-map.png';
import homePage from './media/home-page.png';
import privateClient from './media/privat-client.png';
import investiments from './media/investiments.png';
import financialAdvisory from './media/financial-advisory.png';
import aboutTheClient from './media/about-the-client.png';
import guideline from './media/guideline.png';
*/

function Section() {
  return (
    <section className="bbp">

      {/* Hero Image */}
      <WorkHead color="black" src={video} type="video" />

      {/* Intro */}
      <div className="work-intro">
        <div className="container">
          <h1 className="work-intro__title">Banco do Brasil Privete</h1>
          <img src={logo} width="204" alt="Logo Banco do Brasil Privete" />
          <h2>Concept</h2>
          <h3 className="work-intro__subtitle">Não conte com a Sorte. Conte com o Private.</h3>
          <p className="work-intro__description">{'Site institucional do segmento Private do maior banco da América Latina. Tem por objetivo atenter às necessidades de aconselhamento financeiro e gestão de recursos, com estratégias personalizadas de forma isenta e transparente.'}</p>
        </div>
      </div>
    </section>
  );
}

function BBPrivete() {
  return <WorkPage section={Section()} position={3} />;
}

export default BBPrivete;
