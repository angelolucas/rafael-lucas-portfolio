import React, { Component } from 'react';

import mockupTop from './images/mockup-top.png';
import step01 from './images/step1.png';
import step02 from './images/step2.png';
import step03 from './images/step3.png';

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
        <div className="mm__hero" />
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
        <div className="mm__objective">
          <div className="container">
            <h2>Objective</h2>
            <p>{'Apresentar claramente a proposta de valor, tendo sempre um crescimento consistente da base de usuários, atrelado a uma interface amigável, concisa e focada no usuário.'}</p>
          </div>
        </div>
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
      </section>
    );
  }
}

export default MovaMais;
