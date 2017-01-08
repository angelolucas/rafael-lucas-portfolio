// Dependencies
import React from 'react';

import movaMaisHead from '../../containers/mova-mais/images/video-poster.jpg';
import caixaNasRuasHead from '../../containers/caixa-nas-ruas/images/work-head.jpg';

function WorkPreLoader() {
  return (
    <div className="work-pre-loader" style={{ display: 'none' }}>
      <img src={movaMaisHead} alt="" />
      <img src={caixaNasRuasHead} alt="" />
    </div>
  );
}

export default WorkPreLoader;
