import React from 'react';

import WorkPage from '../work-page';

import WorkHead from '../../components/work-head';

// Assets
import caixaNasRuas from './media/caixa-nas-ruas.svg';
import workHeadImage from './media/work-head.jpg';
import mockup from './media/mockup.png';
import siteMap from './media/site-map.png';
import dashboard from './media/dashboard.png';
import team from './media/team.png';
import shield1 from './media/shield1.png';
import shield2 from './media/shield2.png';
import shield3 from './media/shield3.png';
import events from './media/events.png';
import editorial from './media/editorial.png';
import store from './media/store.png';
import mobile from './media/mobile.png';
import colors from './media/colors.png';
import types from './media/types.png';
import result1 from './media/result1.svg';
import result2 from './media/result2.svg';
import result3 from './media/result3.svg';
import result4 from './media/result4.svg';
import result5 from './media/result5.svg';

function Section() {
  return (
    <section className="cnr">

      {/* Hero Image */}
      <WorkHead color="#a0a8ab" src={workHeadImage} type="image" />

      {/* Intro */}
      <div className="work-intro">
        <div className="container">
          <h1 className="work-intro__title">Caixa Nas Ruas</h1>
          <img src={caixaNasRuas} width="281" alt="Caixa Nas Ruas" />
          <h2>Concept</h2>
          <h3 className="work-intro__subtitle">O seu bem-estar começa Nas Ruas.</h3>
          <p className="work-intro__description">{'O programa Caixa Nas Ruas estimula o engajamento dos usuários motivando a prática regular de atividades físicas através de conteúdo, senso de pertencimento, estímulo social e programa de relacionamento.'}</p>
        </div>
      </div>

      {/* Mockup */}
      <div className="container">
        <img src={mockup} alt="" />
      </div>

      {/* Objective */}
      <div className="work-objective work-objective--cnr">
        <div className="container">
          <h2>Objective</h2>
          <p>{'Desenhar uma plataforma simples e amigável que estimule a saúde e a qualidade de vida, promovendo a prática esportiva de forma saudável com premiações.'}</p>
        </div>
      </div>

      {/* Step 01 */}
      <div className="work-step work-step--cnr01">
        <div className="container">
          <h3 className="work-step__title">Site Map</h3>
          <img src={siteMap} alt="Site Map" />
        </div>
      </div>

      {/* Step 02 */}
      <div className="work-step work-step--cnr02">
        <div className="container">
          <h3 className="work-step__title">Pages</h3>
          <h4>Dashboard</h4>
          <p className="work-step__description">{'Central de medição de desempenho de cada participante com dados detalhados sobre a perseverança de treino, objetivos individuais e visualizações de dados quantitativas e qualitativas.'}</p>
          <img src={dashboard} alt="Dashboard Page" />
          <h4>Teams</h4>
          <p className="work-step__description">{'As equipes têm a missão de cooperação mútua, e o critério de formação é estabelecido pelos próprios usuários. A equipe tem um lema e um brasão de identificação.'}</p>
          <img src={team} alt="Team Page" />
          <div className="cnr__shields">
            <img src={shield1} alt="Shield1" />
            <img src={shield2} alt="Shield2" />
            <img src={shield3} alt="Shield3" />
          </div>
          <h4>Events</h4>
          <p className="work-step__description">{'Apresentação do calendário de provas com navegação de estímulo a participação das pessoas nesses eventos através da plataforma.'}</p>
          <img src={events} alt="events" />
          <h4>Editorial</h4>
          <p className="work-step__description">{'O conteúdo do programa possui caráter motivador, tendo como missão estimular as pessoas a se afastarem do sedentarismo através do bom exemplo, da inspiração e do potencial de superação de cada um. Ajudar os praticantes a removerem barreiras motivacionais e técnicas que atrapalhem o início ou evolução na prática de uma modalidade.'}</p>
          <img src={editorial} alt="events" />
          <h4>Store</h4>
          <p className="work-step__description">{'Vitrine de produtos para trocar com os pontos acumulados na plataforma de acordo com seu desempenho.'}</p>
          <img src={store} alt="store" />
        </div>
      </div>

      {/* Step 03 */}
      <div className="work-step work-step--cnr03">
        <div className="container">
          <h3 className="work-step__title">Web Mobile</h3>
          <img src={mobile} alt="mobile" />
        </div>
      </div>

      {/* Step 04 */}
      <div className="work-step work-step--cnr04">
        <div className="container">
          <h3 className="work-step__title">Guideline</h3>
          <img src={colors} alt="colors" />
          <img src={types} alt="types" />
        </div>
      </div>

      {/* Step 05 */}
      <div className="work-step work-step--cnr05">
        <div className="container">
          <h3 className="work-step__title">Resultados</h3>
          <ul>
            <li>
              <img width="42" src={result1} alt="" />
              <h4>5 milhões</h4>
              <p>quilômetros percorridos</p>
            </li>
            <li>
              <img width="42" src={result2} alt="" />
              <h4>125</h4>
              <p>equivale a voltas à terra</p>
            </li>
            <li>
              <img width="37" src={result3} alt="" />
              <h4>+ 300 mil</h4>
              <p>horas de exercícios</p>
            </li>
            <li>
              <img width="34" src={result4} alt="" />
              <h4>4 milhões</h4>
              <p>calorias queimadas</p>
            </li>
            <li>
              <img width="31" src={result5} alt="" />
              <h4>+ 1 bilhão</h4>
              <p>passos dados</p>
            </li>
          </ul>
        </div>
      </div>

    </section>
  );
}

function CaixaNasRuas() {
  return <WorkPage section={Section()} position={2} />;
}

export default CaixaNasRuas;
