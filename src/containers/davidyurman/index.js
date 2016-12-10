import React, { Component } from 'react';

class davidyurman extends Component {
	componentDidMount() {
   	document.body.classList.add('single-work-active');	
  }
  componentWillUnmount() {
    document.body.classList.remove('single-work-active');
  }
  render() {
    return (
      <div className="davidyurman">
        <h2>David Yurman</h2>
      </div>
    );
  }
}

export default davidyurman;
