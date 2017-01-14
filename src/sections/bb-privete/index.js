import React from 'react';

import WorkPage from '../work-page';

import WorkHead from '../../components/work-head';

// Assets
import workHeadImage from './media/work-head.jpg';

function Section() {
  return (
    <section className="cnr">

      {/* Hero Image */}
      <WorkHead color="black" src={workHeadImage} type="image" />

    </section>
  );
}

function BBPrivete() {
  return <WorkPage section={Section()} position={3} />;
}

export default BBPrivete;
