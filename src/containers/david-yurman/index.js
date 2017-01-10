import React from 'react';

import WorkPage from '../work-page';

import WorkHead from '../../components/work-head';

// Assets
import video from './media/video.mp4';

function Section() {
  return (
    <section className="dy">

      {/* Hero Image */}
      <WorkHead color="black" src={video} type="video" />
    </section>
  );
}

function DavidYurman() {
  return <WorkPage section={Section()} position={4} />;
}

export default DavidYurman;
