// Dependencies
import React from 'react';
import MatchWithFade from '../../components/match-with-fade';

// Works
import MovaMais from '../mova-mais';
import CaixaNasRuas from '../caixa-nas-ruas';
import BBPrivate from '../bb-private';
import DavidYurman from '../david-yurman';
import Escinter from '../escinter';
import Emicida from '../emicida';

// Pre load media
import posterMovaMais from '../mova-mais/media/video-poster.jpg';
import posterCaixaNasRuas from '../caixa-nas-ruas/media/work-head.jpg';

import videoMovaMais from '../mova-mais/media/video.mp4';
import videoBBPrivate from '../bb-private/media/video.mp4';
import videoEscinter from '../escinter/media/video.mp4';
import videoEmicida from '../emicida/media/video.mp4';
import videoDavidYurman from '../david-yurman/media/video.mp4';

function AllWorks() {
  return (
    <div className="all-works">
      <MatchWithFade pattern="/mova-mais" component={MovaMais} />
      <MatchWithFade pattern="/caixa-nas-ruas" component={CaixaNasRuas} />
      <MatchWithFade pattern="/bb-private" component={BBPrivate} />
      <MatchWithFade pattern="/david-yurman" component={DavidYurman} />
      <MatchWithFade pattern="/escinter" component={Escinter} />
      <MatchWithFade pattern="/emicida" component={Emicida} />

      { window.innerWidth >= 480 &&
      <div className="all-works__preloaders" style={{ display: 'none' }}>
        <img src={posterMovaMais} alt="" />
        <img src={posterCaixaNasRuas} alt="" />
        <video src={videoMovaMais} />
        <video src={videoBBPrivate} />
        <video src={videoDavidYurman} />
        <video src={videoEscinter} />
        <video src={videoEmicida} />
      </div>
      }
    </div>
  );
}

export default AllWorks;
