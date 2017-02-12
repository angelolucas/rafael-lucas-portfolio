import React from 'react';
import { Link } from 'react-router';
import GetWorks from '../get-works';

const WorkNavigation = (props) => {
  const worksLength = Object.keys(GetWorks).length;

  const WorkPosition = props.position;
  let prev = WorkPosition - 1;
  let next = WorkPosition + 1;

  if (WorkPosition === 1) {
    prev = worksLength;
  } else if (WorkPosition === worksLength) {
    next = 1;
  }

  return (
    <div className="work-navigation">
      <Link to={GetWorks[prev].name}>prv</Link>
      <Link to={GetWorks[next].name}>nxt</Link>
    </div>
  );
};

WorkNavigation.propTypes = {
  position: React.PropTypes.number,
};

export default WorkNavigation;
