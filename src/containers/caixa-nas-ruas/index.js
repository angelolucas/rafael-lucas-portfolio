import React from 'react';

import WorksPage from '../works-page';

import WorkHead from '../../components/work-head';

// Assets
import workHeadImage from './images/work-head.jpg';

function Section() {
  return (
    <section className="mm">

      {/* Hero Image */}
      <WorkHead image={workHeadImage} />

    </section>
  );
}

function CaixaNasRuas() {
  return <WorksPage section={Section()} position={2} />;
}

export default CaixaNasRuas;
