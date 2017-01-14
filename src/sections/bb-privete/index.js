import React from 'react';

import WorkPage from '../work-page';

import WorkHead from '../../components/work-head';

// Assets
import video from './media/video.mp4';

function Section() {
  return (
    <section className="cnr">

      {/* Hero Image */}
      <WorkHead color="black" src={video} type="video" />

    </section>
  );
}

function BBPrivete() {
  return <WorkPage section={Section()} position={3} />;
}

export default BBPrivete;
