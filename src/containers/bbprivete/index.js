import React, { Component } from 'react';

class bbprivete extends Component {
	componentDidMount() {
   	document.body.classList.add('single-work-active');	
  }
  componentWillUnmount() {
    document.body.classList.remove('single-work-active');
  }
  render() {
    return (
      <div className="bbprivete">
        <h2>BB Privete</h2>
      </div>
    );
  }
}

export default bbprivete;
