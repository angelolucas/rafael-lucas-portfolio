/* eslint-disable */

// Dependencies
import React from 'react';
import Match from 'react-router/Match';
import { Link } from 'react-router';
import { TransitionMotion, spring } from 'react-motion';

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
      <MatchWithFade pattern="/mova-mais" component={MovaMais} />
      <MatchWithFade pattern="/caixa-nas-ruas" component={CaixaNasRuas} />
      <MatchWithFade pattern="/bb-privete" component={BBPrivete} />
      <MatchWithFade pattern="/david-yurman" component={DavidYurman} />
      <MatchWithFade pattern="/encinter" component={Encinter} />
      <MatchWithFade pattern="/emicida" component={Emicida} />

      <Navigation />
    </div>

    <Link className="works-page__back-to-home" to="/">
      Back
      <div />
    </Link>

    <BackToTop container={'.works-page__scroll'} />
  </div>
);

const MatchWithFade = ({ component: Component, ...rest }) => {
  const willLeave = () => ({ zIndex: 1, opacity: spring(0) });

  return (
    <Match {...rest} children={({ matched, ...props }) => (
      <TransitionMotion
        willLeave={willLeave}
        styles={matched ? [{
          key: props.location.pathname,
          style: { opacity: 1 },
          data: props,
        }] : []}
      >
        {interpolatedStyles => (
          <div>
            {interpolatedStyles.map(config => (
              <div
                key={config.key}
                className="interpolated"
                style={{ ...config.style }}
              >
                <Component {...config.data} />
              </div>
            ))}
          </div>
        )}
      </TransitionMotion>
    )} />
  );
};

export default WorksPage;
