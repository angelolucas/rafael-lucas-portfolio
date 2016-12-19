// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

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
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="mova-mais" component={MovaMais} />
      <Route path="caixa-nas-ruas" component={CaixaNasRuas} />
      <Route path="bb-privete" component={BBPrivete} />
      <Route path="david-yurman" component={DavidYurman} />
      <Route path="encinter" component={Encinter} />
      <Route path="emicida" component={Emicida} />
    </Route>
  </Router>,
  document.getElementById('root'),
);
