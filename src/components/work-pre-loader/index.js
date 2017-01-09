// Dependencies
import React from 'react';

import posterMovaMais from '../../containers/mova-mais/media/video-poster.jpg';
import posterCaixaNasRuas from '../../containers/caixa-nas-ruas/media/work-head.jpg';
import videoMovaMais from '../../containers/mova-mais/media/video.mp4';
import videoEmicida from '../../containers/emicida/media/video.mp4';

function WorkPreLoader() {
  return (
    <div className="work-pre-loader" style={{ display: 'none' }}>
      <img src={posterMovaMais} alt="" />
      <img src={posterCaixaNasRuas} alt="" />
      <video src={videoMovaMais} />
      <video src={videoEmicida} />
    </div>
  );
}

export default WorkPreLoader;
