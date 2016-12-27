import React from 'react';
import { Link } from 'react-router';

function Navigation() {
  const workList = {
    1: '/mova-mais',
    2: '/caixa-nas-ruas',
    3: '/bb-privete',
    4: '/david-yurman',
    5: '/encinter',
    6: '/emicida',
  };

  const workLength = Object.keys(workList).length;

  const workid = 1; // this.props.workid
  let prev = workid - 1;
  let next = workid + 1;

  if (workid === 1) {
    prev = workLength;
  }
  if (workid === workLength) {
    next = 1;
  }

  return (
    <div className="navigation">
      <Link to={workList[prev]}>prv</Link>
      <Link to={workList[next]}>nxt</Link>
    </div>
  );
}

export default Navigation;
