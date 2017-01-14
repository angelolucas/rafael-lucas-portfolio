import React from 'react';

import WorkPage from '../work-page';

import WorkHead from '../../components/work-head';

// Assets
import workHeadImage from './media/work-head.jpg';

function Section() {
  return (
    <section className="dy">

      {/* Hero Image */}
      <WorkHead color="#ebeade" src={workHeadImage} type="image" />
    </section>
  );
}

function Encinter() {
  return <WorkPage section={Section()} position={5} />;
}

export default Encinter;
