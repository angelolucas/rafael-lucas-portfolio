import React, { Component } from 'react';

import mockupTop from './images/mockup-top.jpg';
import step01 from './images/step1.png';
import step02 from './images/step2.png';
import step03 from './images/step3.png';
import engagement01 from './images/engagement01.png';
import engagement02 from './images/engagement02.png';
import engagement03 from './images/engagement03.png';
import points01 from './images/points01.png';
import points02 from './images/points02.png';


class MovaMais extends Component {
  componentDidMount() {
    document.body.classList.add('single-work-active');
  }
  componentWillUnmount() {
    document.body.classList.remove('single-work-active');
  }
  render() {
    return (
      <section className="mm">

        {/* Hero Image */}
        <div className="mm__hero" />

        {/* Intro */}
        <div className="mm__intro">
          <div className="container">
            <h1 className="mm__intro__title">Mova Mais</h1>
            <h2>Concept</h2>
            <h3>Ganhe pontos por fazer exercícios.</h3>
          </div>
        </div>
        <div className="container">
          <img src={mockupTop} alt="" />
        </div>

        {/* Objective */}
        <div className="mm__objective">
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
            <ul className="mm__chess-list">
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
            <ul className="mm__chess-list">
              <li>
                <div className="image">
                  <img src={engagement01} alt="" />
                </div>
                <div className="text">
                  <h4>Hit Target!</h4>
                  <p>{'“Você ganhou 20 pontos por cumprir sua meta pela primeira vez!”'}</p>
                </div>
              </li>
              <li>
                <div className="image">
                  <img src={engagement02} alt="" />
                </div>
                <div className="text">
                  <h4>Keep Your Combo</h4>
                  <p>{'“Criando uma sequência de metas atingidas você pode ganhar até 40 pontos por cumprimento de meta.”'}</p>
                </div>
              </li>
              <li>
                <div className="image">
                  <img src={engagement03} alt="" />
                </div>
                <div className="text">
                  <h4>Rest Is Important</h4>
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
            <ul className="mm__chess-list">
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
      </section>
    );
  }
}

export default MovaMais;
