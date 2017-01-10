import React from 'react';

import WorkPage from '../work-page';

import WorkHead from '../../components/work-head';

// Assets
import workHeadImage from './media/work-head.jpg';

function Section() {
  return (
    <section className="dy">

      {/* Hero Image */}
      <WorkHead src={workHeadImage} type="image" />
    </section>
  );
}

function Encinter() {
  return <WorkPage section={Section()} position={6} />;
}

export default Encinter;
