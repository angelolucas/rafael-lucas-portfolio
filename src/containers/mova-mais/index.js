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
            <h2 className="mm__intro__concept-h">Concept</h2>
            <h3 className="mm__intro__concept">Ganhe pontos por fazer exercícios.</h3>
          </div>
        </div>
        <div className="container">
          <img src={mockupTop} alt="" />
        </div>
      </section>
    );
  }
}

export default MovaMais;
