// Dependencies
import React from 'react';

import posterMovaMais from '../../containers/mova-mais/media/video-poster.jpg';
import posterCaixaNasRuas from '../../containers/caixa-nas-ruas/media/work-head.jpg';
import posterBBPrivete from '../../containers/bb-privete/media/work-head.jpg';
import posterEncinter from '../../containers/encinter/media/work-head.jpg';
import videoMovaMais from '../../containers/mova-mais/media/video.mp4';
import videoEmicida from '../../containers/emicida/media/video.mp4';
import videoDavidYurman from '../../containers/david-yurman/media/video.mp4';

function WorkPreLoader() {
  return (
    <div className="work-pre-loader" style={{ display: 'none' }}>
      <img src={posterMovaMais} alt="" />
      <img src={posterCaixaNasRuas} alt="" />
      <img src={posterBBPrivete} alt="" />
      <img src={posterEncinter} alt="" />
      <video src={videoMovaMais} />
      <video src={videoEmicida} />
      <video src={videoDavidYurman} />
    </div>
  );
}

export default WorkPreLoader;
