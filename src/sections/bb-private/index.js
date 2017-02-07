import React from 'react';

import WorkPage from '../work-page';

import WorkHead from '../../components/work-head';

// Assets
import video from './media/video.mp4';
import logo from './media/logo.png';
import mockup from './media/mockup.png';
import siteMap from './media/site-map.png';
import homePage from './media/home-page.png';
import privateClient from './media/privat-client.png';
import investiments from './media/investiments.png';
import financialAdvisory from './media/financial-advisory.png';
import aboutTheClient from './media/about-the-client.png';
import guideline from './media/guideline.png';
import mockup2 from './media/mockup2.png';

function Section() {
  return (
    <section className="bbp">

      {/* Hero Image */}
      <WorkHead
        title="BB Private"
        category="web desktop"
        color="black"
        src={video}
        type="video"
      />

      {/* Intro */}
      <div className="work-intro">
        <div className="container">
          <img src={logo} width="204" alt="Logo Banco do Brasil Private" />
          <h2>Concept</h2>
          <h3 className="work-intro__subtitle">Não conte com a Sorte. Conte com o Private.</h3>
          <p className="work-intro__description">Site institucional do segmento Private do maior banco da América Latina. Tem por objetivo atenter às necessidades de aconselhamento financeiro e gestão de recursos, com estratégias personalizadas de forma isenta e transparente.</p>
        </div>
      </div>

      {/* Mockup */}
      <div className="work-mockup">
        <div className="container container--full">
          <img src={mockup} alt="" />
        </div>
      </div>

      {/* Objective */}
      <div className="work-objective">
        <div className="container">
          <h2>Objective</h2>
          <p>Desenhar um ambiente agradável e confiável onde o cliente se sinta seguro. Além de transmitir credibilidade ao público e apresentar o modelo de relacionamento exclusivo, sólido e experiente.</p>
        </div>
      </div>

      {/* Site Map */}
      <div className="work-sitemap">
        <div className="container">
          <h2>Structure of site</h2>
          <img src={siteMap} alt="Site Map" />
        </div>
      </div>

      {/* Home Page Screens */}
      <div className="work-screen">
        <div className="container">
          <img className="work-screen__image" src={homePage} alt="Home Page" />
          <div className="work-screen__info">
            <h3 className="work-screen__title">Home Page</h3>
            <p className="work-screen__description">Página inicial, exibe um slideshow elegante que dá acesso a página em destaque do momento. No header tem os três pilares do site e o botão para acesso a área privada.</p>
          </div>
        </div>
      </div>

      {/* Private Client Screens */}
      <div className="work-screen">
        <div className="container">
          <img className="work-screen__image" src={privateClient} alt="Private Client" />
          <div className="work-screen__info">
            <h3 className="work-screen__title">Private Client</h3>
            <p className="work-screen__description">Página que expõe as principais vantagens de ser cliente do seguimento, e o leque de serviços oferecidos, como atendimento exclusivo e consultoria financeira.</p>
          </div>
        </div>
      </div>

      {/* Investiments Screens */}
      <div className="work-screen">
        <div className="container">
          <img className="work-screen__image" src={investiments} alt="Investiments" />
          <div className="work-screen__info">
            <h3 className="work-screen__title">Investiments</h3>
            <p className="work-screen__description">Elenca nessa página as principais formas de investimentos de maneira clara, diversificada e direta.</p>
          </div>
        </div>
      </div>

      {/* Financial Advisory Screens */}
      <div className="work-screen">
        <div className="container">
          <img className="work-screen__image" src={financialAdvisory} alt="Financial Advisory" />
          <div className="work-screen__info">
            <h3 className="work-screen__title">Financial Advisory</h3>
            <p className="work-screen__description">Essa página detalha sobre a assessoria financira, discriminando produtos como cartões, seguros e tarifas de serviços.</p>
          </div>
        </div>
      </div>

      {/* About The Client Screens */}
      <div className="work-screen">
        <div className="container">
          <img className="work-screen__image" src={aboutTheClient} alt="About The Client" />
          <div className="work-screen__info">
            <h3 className="work-screen__title">About The Client</h3>
            <p className="work-screen__description">Página que detalha sobre o segmento e o próprio banco, de maneira segura, sólida e experiente.</p>
          </div>
        </div>
      </div>

      {/* Guideline */}
      { window.innerWidth > 480 &&
      <div className="work-guideline">
        <div className="container">
          <img src={guideline} alt="Guideline" />
        </div>
      </div>
      }

      {/* Mockup */}
      <div className="container container--full">
        <img src={mockup2} alt="" />
      </div>
    </section>
  );
}

function BBPrivate() {
  return <WorkPage section={Section()} position={3} theme="dark" />;
}

export default BBPrivate;
