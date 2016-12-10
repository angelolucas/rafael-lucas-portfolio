import React, { Component } from 'react';

class encinter extends Component {
	componentDidMount() {
   	document.body.classList.add('single-work-active');	
  }
  componentWillUnmount() {
    document.body.classList.remove('single-work-active');
  }
  render() {
    return (
      <div className="encinter">
        <h2>Encinter</h2>
      </div>
    );
  }
}

export default encinter;
