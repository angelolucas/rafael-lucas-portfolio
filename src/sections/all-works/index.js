// Dependencies
import React from 'react';
import MatchWithFade from '../../components/match-with-fade';
import GetWorks from '../../components/get-works';

// Works
import MovaMais from '../mova-mais';
import CaixaNasRuas from '../caixa-nas-ruas';
import BBPrivate from '../bb-private';
import DavidYurman from '../david-yurman';
import Escinter from '../escinter';
import Emicida from '../emicida';

function AllWorks() {
  return (
    <div className="all-works">
      <MatchWithFade pattern="/mova-mais" component={MovaMais} />
      <MatchWithFade pattern="/caixa-nas-ruas" component={CaixaNasRuas} />
      <MatchWithFade pattern="/bb-private" component={BBPrivate} />
      <MatchWithFade pattern="/david-yurman" component={DavidYurman} />
      <MatchWithFade pattern="/escinter" component={Escinter} />
      <MatchWithFade pattern="/emicida" component={Emicida} />

      {/* Load videos and posters if viewport is greater than 480px */}
      { window.innerWidth >= 480 &&
      <div className="all-works__preloaders" style={{ display: 'none' }}>
        {
          Object.keys(GetWorks).map((work, key) => (
            GetWorks[work].poster &&
            <img key={key} src={GetWorks[work].poster} alt="" />
          ))
        }
        {
          Object.keys(GetWorks).map((work, key) => (
            GetWorks[work].video &&
            <video key={key} src={GetWorks[work].video} preload="auto" />
          ))
        }
      </div>
      }
    </div>
  );
}

export default AllWorks;
