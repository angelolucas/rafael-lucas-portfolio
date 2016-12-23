// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router/BrowserRouter';
import Match from 'react-router/Match';

import './styles/style.css';

// App
import App from './containers/app';
import MovaMais from './containers/mova-mais';
import CaixaNasRuas from './containers/caixa-nas-ruas';
import BBPrivete from './containers/bb-privete';
import DavidYurman from './containers/david-yurman';
import Encinter from './containers/encinter';
import Emicida from './containers/emicida';

ReactDOM.render(
  <Router>
    <div>
      <App />
      <div className="single-work">
        <div className="mova-mais"><Match pattern="/mova-mais" component={MovaMais} /></div>
        <div className="caixa-nas-ruas"><Match pattern="/caixa-nas-ruas" component={CaixaNasRuas} /></div>
        <div className="bb-privete"><Match pattern="/bb-privete" component={BBPrivete} /></div>
        <div className="david-yurman"><Match pattern="/david-yurman" component={DavidYurman} /></div>
        <div className="encinter"><Match pattern="/encinter" component={Encinter} /></div>
        <div className="emicida"><Match pattern="/emicida" component={Emicida} /></div>
      </div>
    </div>
  </Router>,
  document.getElementById('root'),
);
