import React, { Component } from 'react';

class emicida extends Component {
	componentDidMount() {
   	document.body.classList.add('single-work-active');	
  }
  componentWillUnmount() {
    document.body.classList.remove('single-work-active');
  }
  render() {
    return (
      <div className="emicida">
        <h2>Emicida</h2>
      </div>
    );
  }
}

export default emicida;
