// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router/BrowserRouter';
import MatchWithFade from './components/match-with-fade';

// Global Styles
import './styles/style.css';

// App
import HomePage from './sections/home-page';
import MovaMais from './sections/mova-mais';
import CaixaNasRuas from './sections/caixa-nas-ruas';
import BBPrivete from './sections/bb-privete';
import DavidYurman from './sections/david-yurman';
import Encinter from './sections/encinter';
import Emicida from './sections/emicida';

// Work Pre loader
import WorkPreLoader from './components/work-pre-loader';

ReactDOM.render(
  <Router>
    <div>
      <HomePage />
      <WorkPreLoader />
      <div className="work-page">
        <MatchWithFade pattern="/mova-mais" component={MovaMais} />
        <MatchWithFade pattern="/caixa-nas-ruas" component={CaixaNasRuas} />
        <MatchWithFade pattern="/bb-privete" component={BBPrivete} />
        <MatchWithFade pattern="/david-yurman" component={DavidYurman} />
        <MatchWithFade pattern="/encinter" component={Encinter} />
        <MatchWithFade pattern="/emicida" component={Emicida} />
      </div>
    </div>
  </Router>,
  document.getElementById('root'),
);
