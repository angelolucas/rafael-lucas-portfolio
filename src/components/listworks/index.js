import React, { Component } from 'react';
import { Link } from 'react-router';

import './index.css';
import thumb from './thumb.jpg';
import thumbOutside from './thumb-outside.png';

class ListWorks extends Component {
  
  render() {
    const thumbOutsideBg = {
      backgroundImage: 'url(' + thumbOutside + ')'
    };

    return (
      <ul className="list-works">
        <li>
          <div className="list-works__thumb">
            <img src={thumb} alt="Mova mais" />
            <div style={thumbOutsideBg}></div>
          </div>
          <h3 className="list-works__title">Mova Mais - Startup</h3>
          <p className="list-works__category">app</p>
          <Link className="list-works__link" to="/mova-mais">Mais informações</Link>
        </li>
        <li>
          <div className="list-works__thumb">
            <img src={thumb} alt="Mova mais" />
            <div style={thumbOutsideBg}></div>
          </div>
          <h3 className="list-works__title">Caixa nas Ruas</h3>
          <p className="list-works__category">web desktop & mobile</p>
          <Link className="list-works__link" to="/caixa-nas-ruas">Mais informações</Link>
        </li>
        <li>
          <div className="list-works__thumb">
            <img src={thumb} alt="Mova mais" />
            <div style={thumbOutsideBg}></div>
          </div>
          <h3 className="list-works__title">BB Privete</h3>
          <p className="list-works__category">web desktop</p>
          <Link className="list-works__link" to="/bb-privete">Mais informações</Link>
        </li>
        <li>
          <div className="list-works__thumb">
            <img src={thumb} alt="Mova mais" />
            <div style={thumbOutsideBg}></div>
          </div>
          <h3 className="list-works__title">David Yurman</h3>
          <p className="list-works__category">web mobile</p>
          <Link className="list-works__link" to="/david-yurman">Mais informações</Link>
        </li>
        <li>
          <div className="list-works__thumb">
            <img src={thumb} alt="Mova mais" />
            <div style={thumbOutsideBg}></div>
          </div>
          <h3 className="list-works__title">Encinter</h3>
          <p className="list-works__category">web mobile</p>
          <Link className="list-works__link" to="/encinter">Mais informações</Link>
        </li>
        <li>
          <div className="list-works__thumb">
            <img src={thumb} alt="Mova mais" />
            <div style={thumbOutsideBg}></div>
          </div>
          <h3 className="list-works__title">Emicida</h3>
          <p className="list-works__category">web mobile</p>
          <Link className="list-works__link" to="/emicida">Mais informações</Link>
        </li>
      </ul>
    )
  }
}

export default ListWorks