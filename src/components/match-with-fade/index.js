/* eslint-disable */
import React from 'react';
import Match from 'react-router/Match';
import { TransitionMotion, spring } from 'react-motion';

const styles = {}

styles.fill = {
  position: 'fixed',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  zIndex: 10
}

const MatchWithFade = ({ component: Component, ...rest }) => {
  const willLeave = () => ({ zIndex: 12, opacity: spring(0) });

  return (
    <Match {...rest} children={({ matched, ...props }) => (
      <TransitionMotion
        willLeave={willLeave}
        styles={matched ? [{
          key: props.location.pathname,
          style: { opacity: 1 },
          data: props,
        }] : []}
      >
        {interpolatedStyles => (
          <div>
            {interpolatedStyles.map(config => (
              <div
                key={config.key}
                style={{ ...styles.fill, ...config.style }}
              >
                <Component {...config.data} />
              </div>
            ))}
          </div>
        )}
      </TransitionMotion>
    )} />
  );
};

export default MatchWithFade;