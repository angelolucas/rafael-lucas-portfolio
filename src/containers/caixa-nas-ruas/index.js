import React from 'react';

import WorksPage from '../works-page';

import WorkHead from '../../components/work-head';

// Assets
import caixaNasRuas from './images/caixa-nas-ruas.svg';
import workHeadImage from './images/work-head.jpg';
import mockupTop from './images/mockup-top.png';

function Section() {
  return (
    <section className="cnr">

      {/* Hero Image */}
      <WorkHead image={workHeadImage} />

      {/* Intro */}
      <div className="work-intro">
        <div className="container">
          <h1 className="work-intro__title">Caixa Nas Ruas</h1>
          <img src={caixaNasRuas} width="281" alt="Caixa Nas Ruas" />
          <h2>Concept</h2>
          <h3>O seu bem-estar começa Nas Ruas.</h3>
          <p>{'O programa Caixa Nas Ruas estimula o engajamento dos usuários motivando a prática regular de atividades físicas através de conteúdo, senso de pertencimento, estímulo social e programa de relacionamento.'}</p>
        </div>
      </div>

      {/* Mockup */}
      <div className="container">
        <img src={mockupTop} alt="" />
      </div>

      {/* Objective */}
      <div className="work-objective">
        <div className="container">
          <h2>Objective</h2>
          <p>{'Desenhar uma plataforma simples e amigável que estimule a saúde e a qualidade de vida, promovendo a prática esportiva de forma saudável com premiações.'}</p>
        </div>
      </div>

    </section>
  );
}

function CaixaNasRuas() {
  return <WorksPage section={Section()} position={2} />;
}

export default CaixaNasRuas;
