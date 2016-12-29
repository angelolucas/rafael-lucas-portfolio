import React, { Component } from 'react';

import mockupTop from './images/mockup-top.png';

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
        <div className="mm__step mm__step0">
          <div className="container">
            <h3 className="mm__step__title"><span>01</span> flow</h3>
            <ul className="mm__step0__items">
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
      </section>
    );
  }
}

export default MovaMais;
