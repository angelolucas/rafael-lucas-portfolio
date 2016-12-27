// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router/BrowserRouter';
import Match from 'react-router/Match';

import './styles/style.css';

// App
import HomePage from './containers/home-page';
import MovaMais from './containers/mova-mais';
import CaixaNasRuas from './containers/caixa-nas-ruas';
import BBPrivete from './containers/bb-privete';
import DavidYurman from './containers/david-yurman';
import Encinter from './containers/encinter';
import Emicida from './containers/emicida';

ReactDOM.render(
  <Router>
    <div>
      <HomePage />
      <div className="single-work">
        <Match pattern="/mova-mais" component={MovaMais} />
        <Match pattern="/caixa-nas-ruas" component={CaixaNasRuas} />
        <Match pattern="/bb-privete" component={BBPrivete} />
        <Match pattern="/david-yurman" component={DavidYurman} />
        <Match pattern="/encinter" component={Encinter} />
        <Match pattern="/emicida" component={Emicida} />
      </div>
    </div>
  </Router>,
  document.getElementById('root'),
);
