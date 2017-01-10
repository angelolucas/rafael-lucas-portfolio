import React from 'react';

import WorkPage from '../work-page';

import WorkHead from '../../components/work-head';

// Assets
import video from './media/video.mp4';

function Section() {
  return (
    <section className="mcd">

      {/* Hero Image */}
      <WorkHead color="black" src={video} type="video" />
    </section>
  );
}

function Emicida() {
  return <WorkPage section={Section()} position={6} />;
}

export default Emicida;
