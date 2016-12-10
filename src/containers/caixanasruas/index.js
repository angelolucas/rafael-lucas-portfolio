import React, { Component } from 'react';

class caixanasruas extends Component {
	componentDidMount() {
   	document.body.classList.add('single-work-active');	
  }
  componentWillUnmount() {
    document.body.classList.remove('single-work-active');
  }
  render() {
    return (
      <div className="caixanasruas">
        <h2>Caixa nas Ruas</h2>
      </div>
    );
  }
}

export default caixanasruas;
