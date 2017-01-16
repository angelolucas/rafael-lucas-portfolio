import React from 'react';

import WorkPage from '../work-page';

import WorkHead from '../../components/work-head';

// Assets
import video from './media/video.mp4';
import logo from './media/logo.svg';
import mockup from './media/mockup.jpg';
/*
import siteMap from './media/site-map.png';
import homePage from './media/home-page.png';
import products from './media/products.png';
import productsDetail from './media/products-detail.png';
import contact from './media/contact.png';
import navigation from './media/navigation.png';
import devices from './media/devices.png';
import credits from './media/credits.png';
import guideline from './media/guideline.png';
*/

function Section() {
  return (
    <section className="ect">

      {/* Hero Image */}
      <WorkHead color="white" src={video} type="video" />

      {/* Intro */}
      <div className="work-intro">
        <div className="container">
          <h1 className="work-intro__title">Encinter</h1>
          <img src={logo} width="187" height="187" alt="Logo Encinter" />
          <h2>Concept</h2>
          <h3 className="work-intro__subtitle">Escinter. Spaces That Engage.</h3>
          <p className="work-intro__description">{'A Escinter é uma empresa familiar com 25 anos de atuação no mercado de interiores de espaços corporativos. Ciente de que a qualidade do espaço de trabalho interfere diretamente na vida das pessoas, sua missão é garantir que seus clientes tenham melhor qualidade de vida e desempenho.'}</p>
        </div>
      </div>

      {/* Mockup */}
      <div className="container">
        <img src={mockup} alt="" />
      </div>
    </section>
  );
}

function Encinter() {
  return <WorkPage section={Section()} position={5} />;
}

export default Encinter;
