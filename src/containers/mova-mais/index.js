import React from 'react';

import WorkPage from '../work-page';

import WorkHead from '../../components/work-head';

// Assets
import movaMais from './images/mova-mais.png';
import posterVideo from './images/video-poster.jpg';
import video from './images/video.mp4';
import mockupTop from './images/mockup-top.jpg';
import step01 from './images/step1.png';
import step02 from './images/step2.png';
import step03 from './images/step3.png';
import engagement01 from './images/engagement01.png';
import engagement02 from './images/engagement02.png';
import engagement03 from './images/engagement03.png';
import points01 from './images/points01.png';
import points02 from './images/points02.png';
import other01 from './images/other01.png';
import other02 from './images/other02.png';
import other03 from './images/other03.png';
import other04 from './images/other04.png';
import other05 from './images/other05.png';
import guidelineColors from './images/guideline-colors.png';
import guidelineFont from './images/guideline-font.png';
import guidelineIcons from './images/guideline-icons.png';
import counter from './images/counter.png';
import googlePlay from './images/google-play.svg';
import appleStore from './images/apple-store.svg';

function Section() {
  return (
    <section className="mm">

      {/* Hero Image */}
      <WorkHead src={video} poster={posterVideo} type="video" />

      {/* Intro */}
      <div className="work-intro">
        <div className="container">
          <h1 className="work-intro__title">Mova Mais</h1>
          <img src={movaMais} alt="Mova Mais" />
          <h2>Concept</h2>
          <h3>Ganhe pontos por fazer exercícios.</h3>
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
          <p>{'Apresentar claramente a proposta de valor, tendo sempre um crescimento consistente da base de usuários, atrelado a uma interface amigável, concisa e focada no usuário.'}</p>
        </div>
      </div>

      {/* Step 01 */}
      <div className="mm__step mm__step01">
        <div className="container">
          <h3 className="mm__step__title"><span>01</span> Flow</h3>
          <ul className="mm__step01__items">
            <li>
              <p>Monitor<br /> physical activities</p>
            </li>
            <li>
              <p>Reach the<br /> daily goal</p>
            </li>
            <li>
              <p>Join points<br /> to convert</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Step 02 */}
      <div className="mm__step mm__step02">
        <div className="container">
          <h3 className="mm__step__title"><span>02</span> Walkthroughs</h3>
          <p className="mm__step__description">{'A experiência do onboarding foi projetada para ser simples e didática, sem deixar de ser atrativa desde o primeiro momento, por isso a importância de ter uma linguagem clara e divertida.'}</p>
          <ul className="chess-list">
            <li>
              <div className="image">
                <img src={step01} alt="" />
              </div>
              <div className="text">
                <p>{'“Cadastre-se em um dos apps de monitoramento e conecte sua conta.”'}</p>
              </div>
            </li>
            <li>
              <div className="image">
                <img src={step02} alt="" />
              </div>
              <div className="text">
                <p>{'“Monitore suas atividades pelo app que conectou.”'}</p>
              </div>
            </li>
            <li>
              <div className="image">
                <img src={step03} alt="" />
              </div>
              <div className="text">
                <p>{'“Alcance sua meta diária  e acumule pontos para conversão”'}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Step 03 */}
      <div className="mm__step mm__step03">
        <div className="container">
          <h3 className="mm__step__title"><span>03</span> Daily Goal</h3>
          <p className="mm__step__description">{'Um dos maiores objetivos da aplicativo é fazer com que o usuário se sinta sempre motivado a se exercitar, por isso exibimos mensagens de incentivo, sobretudo para não perder a sequência de exercícios.'}</p>
        </div>
        <div className="mm__step03__background" />
      </div>

      {/* Step 04 */}
      <div className="mm__step mm__step04">
        <div className="container">
          <h3 className="mm__step__title"><span>04</span> Engagement</h3>
          <p className="mm__step__description">{'Reter o usuário é sempre um grande desafio se tratando de atividade física, por isso elaboramos um recurso chamado “Combo”, que beneficia com mais pontos os usuários que atiguem a meta diária com mais frequência.'}</p>
          <ul className="chess-list">
            <li>
              <div className="image">
                <img src={engagement01} alt="" />
              </div>
              <div className="text">
                <h4 className="chess-list__item__title">Hit Target!</h4>
                <p>{'“Você ganhou 20 pontos por cumprir sua meta pela primeira vez!”'}</p>
              </div>
            </li>
            <li>
              <div className="image">
                <img src={engagement02} alt="" />
              </div>
              <div className="text">
                <h4 className="chess-list__item__title">Keep Your Combo</h4>
                <p>{'“Criando uma sequência de metas atingidas você pode ganhar até 40 pontos por cumprimento de meta.”'}</p>
              </div>
            </li>
            <li>
              <div className="image">
                <img src={engagement03} alt="" />
              </div>
              <div className="text">
                <h4 className="chess-list__item__title">Rest Is Important</h4>
                <p>{'“Você pode descansar por até 2 dias seguidos sem quebrar seu combo.”'}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Step 05 */}
      <div className="mm__step mm__step05">
        <div className="container">
          <h3 className="mm__step__title"><span>05</span> Points</h3>
          <p className="mm__step__description">{'Permitir um acesso fácil e rápido aos pontos é crucial, apresentando-o de madeira clara, pois é a ponta final da nossa promessa de valor. Além do que, esse benefício, no nosso caso, atua como a “Metáfora da Cenoura”. Ele é o principal fator motivacional para muitos usuários.'}</p>
          <ul className="chess-list">
            <li>
              <div className="image">
                <img src={points01} alt="" />
              </div>
              <div className="text">
                <img src={points02} alt="" />
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Step 06 */}
      <div className="mm__step mm__step06">
        <div className="container">
          <h3 className="mm__step__title"><span>06</span> Other Resources</h3>
          <ul className="chess-list">
            <li>
              <div className="image">
                <img src={other01} alt="" />
              </div>
              <div className="text">
                <h4 className="chess-list__item__title">Ranking Of Friends</h4>
                <p>{'Um recurso muito eficiente de estímulo a prática de exercício, e fomenta competição entre amigos, além de permitir comentários em atividades, likes e outros recursos sociais.'}</p>
              </div>
            </li>
            <li>
              <div className="image">
                <img src={other02} alt="" />
              </div>
              <div className="text">
                <h4 className="chess-list__item__title">Tracker</h4>
                <p>{'Tem por objetivo remover eventuais obstáculos do usuário no fluxo de embarque, e encurtar o espaço entre a prática do exercício e o benefício concreto. Em fase de teste.'}</p>
              </div>
            </li>
            <li>
              <div className="image">
                <img src={other03} alt="" />
              </div>
              <div className="text">
                <h4 className="chess-list__item__title">Member Get Member</h4>
                <p>{'Focado em aquisição. O usuário conquista pontos para cada amigo que entrar na plataforma e fizer pelo menos uma atividade.'}</p>
              </div>
            </li>
            <li>
              <div className="image">
                <img src={other04} alt="" />
              </div>
              <div className="text">
                <h4 className="chess-list__item__title">Duels</h4>
                <p>{'Permite que os usuários disputam entre si. O recurso possibilita a escolha de atributos a fim de incentivar a competição.'}</p>
              </div>
            </li>
            <li>
              <div className="image">
                <img src={other05} alt="" />
              </div>
              <div className="text">
                <h4 className="chess-list__item__title">Navegation</h4>
                <p>{'O menu dá acesso rápido a todos os recursos do aplicativo, além de feedback sobre a conexão do tracker.'}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Step 07 */}
      <div className="mm__step mm__step07">
        <div className="container">
          <h3 className="mm__step__title"><span>07</span> Guideline</h3>
          <img src={guidelineColors} alt="" />
          <img src={guidelineFont} alt="" />
          <img src={guidelineIcons} alt="" />
        </div>
      </div>

      {/* Step 08 */}
      <div className="mm__step mm__step08">
        <div className="container">
          <h3 className="mm__step__title"><span>08</span> Results</h3>
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
  return <WorkPage section={Section()} position={1} />;
}

export default MovaMais;
