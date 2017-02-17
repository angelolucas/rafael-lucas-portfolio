import React from 'react';

import WorkPage from '../work-page';

import WorkHead from '../../components/work-head';

// Assets
import movaMais from './media/mova-mais.png';
import posterVideo from './media/video-poster.jpg';
import video from './media/video.mp4';
import mockup from './media/mockup.jpg';
import step01 from './media/step1.png';
import step02 from './media/step2.png';
import step03 from './media/step3.png';
import dailyGoal from './media/daily-goal.png';
import engagement01 from './media/engagement01.png';
import engagement02 from './media/engagement02.png';
import engagement03 from './media/engagement03.png';
import points01 from './media/points01.png';
import points02 from './media/points02.png';
import other01 from './media/other01.png';
import other02 from './media/other02.png';
import other03 from './media/other03.png';
import other04 from './media/other04.png';
import other05 from './media/other05.png';
import guidelineColors from './media/guideline-colors.png';
import guidelineFont from './media/guideline-font.png';
import guidelineIcons from './media/guideline-icons.png';
import counter from './media/counter.png';
import googlePlay from './media/google-play.png';
import appleStore from './media/apple-store.png';

function Section() {
  return (
    <section className="mm">

      {/* Hero Image */}
      <WorkHead
        name="mm"
        title="Mova Mais"
        category="app"
        src={video}
        poster={posterVideo}
        type="video"
      />

      {/* Intro */}
      <div className="work-intro">
        <div className="container">
          <img src={movaMais} alt="Mova Mais" />
          <h2>Concept</h2>
          <h3 className="work-intro__subtitle">Ganhe pontos por fazer exercícios.</h3>
          <p className="work-intro__description">A plataforma tem por objetivo incentivar pessoas a saírem do sedentarismo, acompanhando a rotina de atividades físicas e recompensado com pontos de programas de fidelidade, que podem ser trocados por voos, eletrônicos e muitos outros.</p>
        </div>
      </div>

      {/* Mockup */}
      <div className="container container--full">
        <img src={mockup} alt="" />
      </div>

      {/* Objective */}
      <div className="work-objective">
        <div className="container">
          <h2>Objective</h2>
          <p>Apresentar claramente a proposta de valor, tendo sempre um crescimento consistente da base de usuários, atrelado a uma interface amigável, concisa e focada no usuário.</p>
        </div>
      </div>

      {/* Step 01 */}
      <div className="work-step">
        <div className="container">
          <h3 className="work-step__title">Flow</h3>
          <ul className="work-flow">
            <li className="work-flow__item work-flow__item--monitor">
              <p className="work-flow__item__text">Monitor<br /> physical activities</p>
            </li>
            <li className="work-flow__item work-flow__item--daily">
              <p className="work-flow__item__text">Reach the<br /> daily goal</p>
            </li>
            <li className="work-flow__item work-flow__item--convert">
              <p className="work-flow__item__text">Join points<br /> to convert</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Step 02 */}
      <div className="work-step work-step--mm02">
        <div className="container">
          <h3 className="work-step__title">Walkthroughs</h3>
          <p className="work-step__description">A experiência do onboarding foi projetada para ser simples e didática, sem deixar de ser atrativa desde o primeiro momento, por isso a importância de ter uma linguagem clara e divertida.</p>
          <ul className="chess-list chess-list-walkt">
            <li>
              <div className="chess-list__info">
                <p>“Cadastre-se em um dos apps de monitoramento e conecte sua conta.”</p>
              </div>
              <div>
                <img src={step01} alt="" />
              </div>
            </li>
            <li>
              <div className="chess-list__info">
                <p>“Monitore suas atividades pelo app que conectou.”</p>
              </div>
              <div>
                <img src={step02} alt="" />
              </div>
            </li>
            <li>
              <div className="chess-list__info">
                <p>“Alcance sua meta diária  e acumule pontos para conversão”</p>
              </div>
              <div>
                <img src={step03} alt="" />
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Step 03 */}
      <div className="work-step work-step--mm03">
        <div className="container">
          <h3 className="work-step__title">Daily Goal</h3>
          <p className="work-step__description">Um dos maiores objetivos da aplicativo é fazer com que o usuário se sinta sempre motivado a se exercitar, por isso exibimos mensagens de incentivo, sobretudo para não perder a sequência de exercícios.</p>
        </div>
        <div className="mm__daily-goal__image">
          <img src={dailyGoal} alt="" />
        </div>
      </div>

      {/* Step 04 */}
      <div className="work-step work-step--mm04">
        <div className="container">
          <h3 className="work-step__title">Engagement</h3>
          <p className="work-step__description">Reter o usuário é sempre um grande desafio se tratando de atividade física, por isso elaboramos um recurso chamado “Combo”, que beneficia com mais pontos os usuários que atiguem a meta diária com mais frequência.</p>
          <ul className="chess-list chess-list-engagement">
            <li>
              <div className="chess-list__info">
                <h4 className="chess-list__title">Hit Target!</h4>
                <p>“Você ganhou <strong>20 pontos</strong> por cumprir sua meta pela primeira vez!”</p>
              </div>
              <div>
                <img src={engagement01} alt="" />
              </div>
            </li>
            <li>
              <div className="chess-list__info">
                <h4 className="chess-list__title">Keep Your Combo</h4>
                <p>“Criando uma sequência de metas atingidas você pode ganhar até <strong>40 pontos</strong> por cumprimento de meta.”</p>
              </div>
              <div>
                <img src={engagement02} alt="" />
              </div>
            </li>
            <li>
              <div className="chess-list__info">
                <h4 className="chess-list__title">Rest Is Important</h4>
                <p>“Você pode descansar por até <strong>2 dias</strong> seguidos sem quebrar seu combo.”</p>
              </div>
              <div>
                <img src={engagement03} alt="" />
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Step 05 */}
      <div className="work-step work-step--mm05">
        <div className="container">
          <h3 className="work-step__title">Points</h3>
          <p className="work-step__description">Permitir um acesso fácil e rápido aos pontos é crucial, apresentando-o de madeira clara, pois é a ponta final da nossa promessa de valor. Além do que, esse benefício, no nosso caso, atua como a “Metáfora da Cenoura”. Ele é o principal fator motivacional para muitos usuários.</p>
        </div>
        <div className="container container--full">
          <ul className="two-columns">
            <li className="two-columns__item">
              <img src={points01} alt="" />
            </li>
            <li className="two-columns__item">
              <img src={points02} alt="" />
            </li>
          </ul>
        </div>
      </div>

      {/* Step 06 */}
      <div className="work-step work-step--mm06">
        <div className="container">
          <h3 className="work-step__title">Other Resources</h3>
          <ul className="chess-list chess-list--resources">
            <li>
              <div className="chess-list__info">
                <h4 className="chess-list__title">Ranking Of Friends</h4>
                <p>Um recurso muito eficiente de estímulo a prática de exercício, e fomenta competição entre amigos, além de permitir comentários em atividades, likes e outros recursos sociais.</p>
              </div>
              <div>
                <img src={other01} alt="" />
              </div>
            </li>
            <li>
              <div className="chess-list__info">
                <h4 className="chess-list__title">Tracker</h4>
                <p>Tem por objetivo remover eventuais obstáculos do usuário no fluxo de embarque, e encurtar o espaço entre a prática do exercício e o benefício concreto. Em fase de teste.</p>
              </div>
              <div>
                <img src={other02} alt="" />
              </div>
            </li>
            <li>
              <div className="chess-list__info">
                <h4 className="chess-list__title">Member Get Member</h4>
                <p>Focado em aquisição. O usuário conquista pontos para cada amigo que entrar na plataforma e fizer pelo menos uma atividade.</p>
              </div>
              <div>
                <img src={other03} alt="" />
              </div>
            </li>
            <li>
              <div className="chess-list__info">
                <h4 className="chess-list__title">Duels</h4>
                <p>Permite que os usuários disputam entre si. O recurso possibilita a escolha de atributos a fim de incentivar a competição.</p>
              </div>
              <div>
                <img src={other04} alt="" />
              </div>
            </li>
            <li>
              <div className="chess-list__info">
                <h4 className="chess-list__title">Navegation</h4>
                <p>O menu dá acesso rápido a todos os recursos do aplicativo, além de feedback sobre a conexão do tracker.</p>
              </div>
              <div>
                <img src={other05} alt="" />
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Step 07 */}
      { window.innerWidth >= 480 &&
      <div className="work-step work-step--mm07 work-guideline">
        <div className="container">
          <h3 className="work-step__title">Guideline</h3>
          <img src={guidelineColors} alt="" />
          <img src={guidelineFont} alt="" />
          <img src={guidelineIcons} alt="" />
        </div>
      </div>
      }

      {/* Step 08 */}
      <div className="work-step work-step--mm08">
        <div className="container">
          <h3 className="work-step__title">Results</h3>
          <img src={counter} alt="" />
          <p>users around the world.</p>
        </div>
      </div>

      {/* Available In */}
      <div className="mm__available">
        <div className="container">
          <a href="https://play.google.com/store/apps/details?id=com.movamais.app" target="_blank" rel="noopener noreferrer">
            <img src={googlePlay} alt="" />
          </a>
          <a href="https://itunes.apple.com/br/app/mova-mais/id1096302778?l=pt&ls=1&mt=8" target="_blank" rel="noopener noreferrer">
            <img src={appleStore} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}

function MovaMais() {
  return (
    <WorkPage
      section={Section()}
      name="mm"
      position={1}
      theme="light"
    />
  );
}

export default MovaMais;
