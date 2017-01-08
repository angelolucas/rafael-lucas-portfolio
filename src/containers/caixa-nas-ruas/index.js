import React from 'react';

import WorksPage from '../works-page';

import WorkHead from '../../components/work-head';

// Assets
import caixaNasRuas from './images/caixa-nas-ruas.svg';
import workHeadImage from './images/work-head.jpg';

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

    </section>
  );
}

function CaixaNasRuas() {
  return <WorksPage section={Section()} position={2} />;
}

export default CaixaNasRuas;
