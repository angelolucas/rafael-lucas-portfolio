// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import './styles/style.css'

// App
import app from './containers/app'
import movamais from './containers/movamais'
import caixanasruas from './containers/caixanasruas'
import bbprivete from './containers/bbprivete'
import davidyurman from './containers/davidyurman'
import encinter from './containers/encinter'
import emicida from './containers/emicida'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={app}>
      
      <Route path="mova-mais" component={movamais}/>
      <Route path="caixa-nas-ruas" component={caixanasruas}/>
      <Route path="bb-privete" component={bbprivete}/>
      <Route path="david-yurman" component={davidyurman}/>
      <Route path="encinter" component={encinter}/>
      <Route path="emicida" component={emicida}/>
      
    </Route>
  </Router>,
  document.getElementById('root')
);
