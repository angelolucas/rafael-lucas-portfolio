// Dependencies
import React from 'react';

import posterMovaMais from '../../containers/mova-mais/media/video-poster.jpg';
import videoMovaMais from '../../containers/mova-mais/media/video.mp4';
import posterCaixaNasRuas from '../../containers/caixa-nas-ruas/media/work-head.jpg';

function WorkPreLoader() {
  return (
    <div className="work-pre-loader" style={{ display: 'none' }}>
      <img src={posterMovaMais} alt="" />
      <img src={posterCaixaNasRuas} alt="" />
      <video src={videoMovaMais} />
    </div>
  );
}

export default WorkPreLoader;
