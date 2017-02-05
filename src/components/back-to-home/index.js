import React from 'react';
import { Link } from 'react-router';

function BackToHome() {
  return (
    <Link className="back-to-home" to="/" title="Back">
      Back
      <div />
    </Link>
  );
}

export default BackToHome;
