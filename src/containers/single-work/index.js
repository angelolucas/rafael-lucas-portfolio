// Dependencies
import React from 'react';
import Match from 'react-router/Match';
import { Link } from 'react-router';

// Single Works
import MovaMais from '../mova-mais';
import CaixaNasRuas from '../caixa-nas-ruas';
import BBPrivete from '../bb-privete';
import DavidYurman from '../david-yurman';
import Encinter from '../encinter';
import Emicida from '../emicida';

// Components
import BackToTop from '../../components/back-to-top';
import Navigation from '../../components/navigation';

const SingleWork = () => (
  <div className="single-work">
    <div className="scroll">
      <Match pattern="/mova-mais" component={MovaMais} />
      <Match pattern="/caixa-nas-ruas" component={CaixaNasRuas} />
      <Match pattern="/bb-privete" component={BBPrivete} />
      <Match pattern="/david-yurman" component={DavidYurman} />
      <Match pattern="/encinter" component={Encinter} />
      <Match pattern="/emicida" component={Emicida} />

      <Navigation />
    </div>

    <Link className="single-work__back" to="/">
      Back
      <div />
    </Link>

    <BackToTop />
  </div>
);

export default SingleWork;
