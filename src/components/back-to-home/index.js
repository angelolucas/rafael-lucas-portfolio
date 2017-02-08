import React from 'react';
import { Link } from 'react-router';

function BackToHome() {
  return (
    <Link
      className="back-to-home"
      title="Back"
      to="/"
    >
      Back
      <div />
    </Link>
  );
}

export default BackToHome;
