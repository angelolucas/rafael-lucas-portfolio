import React, { Component } from 'react';
import { Link } from 'react-router';

import './index.css';
import movamaisthumb from '../../containers/mova-mais/thumb.png';
import movamaisthumboverlay from '../../containers/mova-mais/thumb-overlay.png';

import caixanasruasthumb from '../../containers/caixa-nas-ruas/thumb.png';
import caixanasruasthumboverlay from '../../containers/caixa-nas-ruas/thumb-overlay.png';

import bbprivetethumb from '../../containers/bb-privete/thumb.png';

import davidyurmanthumb from '../../containers/david-yurman/thumb.png';

import encinterthumb from '../../containers/encinter/thumb.png';
import encinterthumboverlay from '../../containers/encinter/thumb-overlay.png';

import emicidathumb from '../../containers/emicida/thumb.png';
import emicidathumboverlay from '../../containers/emicida/thumb-overlay.png';

class ListWorks extends Component {
  
  render() {
    const movamaisthumboverlayBg = {
      backgroundImage: 'url(' + movamaisthumboverlay + ')'
    };
    const caixanasruasthumboverlayBg = {
      backgroundImage: 'url(' + caixanasruasthumboverlay + ')'
    };
    const encinterthumboverlayBg = {
      backgroundImage: 'url(' + encinterthumboverlay + ')'
    };
    const emicidathumboverlayBg = {
      backgroundImage: 'url(' + emicidathumboverlay + ')'
    };

    return (
      <ul className="list-works">
        <li>
          <div className="list-works__thumb">
            <img src={movamaisthumb} alt="Mova mais" />
            <div style={movamaisthumboverlayBg}></div>
          </div>
          <h3 className="list-works__title">Mova Mais - Startup</h3>
          <p className="list-works__category">app</p>
          <Link className="list-works__link" to="/mova-mais">Mais informações</Link>
        </li>
        <li>
          <div className="list-works__thumb">
            <img src={caixanasruasthumb} alt="Caixa nas Ruas" />
            <div style={caixanasruasthumboverlayBg}></div>
          </div>
          <h3 className="list-works__title">Caixa nas Ruas</h3>
          <p className="list-works__category">web desktop & mobile</p>
          <Link className="list-works__link" to="/caixa-nas-ruas">Mais informações</Link>
        </li>
        <li>
          <div className="list-works__thumb">
            <img src={bbprivetethumb} alt="BB Privete" />
          </div>
          <h3 className="list-works__title">BB Privete</h3>
          <p className="list-works__category">web desktop</p>
          <Link className="list-works__link" to="/bb-privete">Mais informações</Link>
        </li>
        <li>
          <div className="list-works__thumb">
            <img src={davidyurmanthumb} alt="David Yurman" />
          </div>
          <h3 className="list-works__title">David Yurman</h3>
          <p className="list-works__category">web mobile</p>
          <Link className="list-works__link" to="/david-yurman">Mais informações</Link>
        </li>
        <li>
          <div className="list-works__thumb">
            <img src={encinterthumb} alt="Encinter" />
            <div style={encinterthumboverlayBg}></div>
          </div>
          <h3 className="list-works__title">Encinter</h3>
          <p className="list-works__category">web mobile</p>
          <Link className="list-works__link" to="/encinter">Mais informações</Link>
        </li>
        <li>
          <div className="list-works__thumb">
            <img src={emicidathumb} alt="Emicida" />
            <div style={emicidathumboverlayBg}></div>
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