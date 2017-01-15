import React from 'react';
import { Link } from 'react-router';

const WorkNavigation = (props) => {
  const worksList = {
    1: '/mova-mais',
    2: '/caixa-nas-ruas',
    3: '/bb-privete',
    4: '/david-yurman',
    5: '/encinter',
    6: '/emicida',
  };

  const worksLength = Object.keys(worksList).length;

  const WorkPosition = props.position;
  let prev = WorkPosition - 1;
  let next = WorkPosition + 1;

  if (WorkPosition === 1) {
    prev = worksLength;
  }
  if (WorkPosition === worksLength) {
    next = 1;
  }

  return (
    <div className="work-navigation">
      <Link to={worksList[prev]}>prv</Link>
      <Link to={worksList[next]}>nxt</Link>
    </div>
  );
};

WorkNavigation.propTypes = {
  position: React.PropTypes.number,
};

export default WorkNavigation;
