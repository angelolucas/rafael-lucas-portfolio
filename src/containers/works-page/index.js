// Dependencies
import React from 'react';
import Match from 'react-router/Match';
import { Link } from 'react-router';

// Works
import MovaMais from '../mova-mais';
import CaixaNasRuas from '../caixa-nas-ruas';
import BBPrivete from '../bb-privete';
import DavidYurman from '../david-yurman';
import Encinter from '../encinter';
import Emicida from '../emicida';

// Components
import Navigation from '../../components/navigation';
import BackToTop from '../../components/back-to-top';

const WorksPage = () => (
  <div className="works-page">
    <div className="works-page__scroll">
      <Match pattern="/mova-mais" component={MovaMais} />
      <Match pattern="/caixa-nas-ruas" component={CaixaNasRuas} />
      <Match pattern="/bb-privete" component={BBPrivete} />
      <Match pattern="/david-yurman" component={DavidYurman} />
      <Match pattern="/encinter" component={Encinter} />
      <Match pattern="/emicida" component={Emicida} />

      <Navigation />
    </div>

    <Link className="works-page__back-to-home" to="/">
      Back
      <div />
    </Link>

    <BackToTop container={'.works-page__scroll'} />
  </div>
);

export default WorksPage;
