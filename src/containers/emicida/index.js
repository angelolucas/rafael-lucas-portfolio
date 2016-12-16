import React, { Component } from 'react';
import Navigation from '../../components/navigation';

class emicida extends Component {
  componentDidMount() {
    document.body.classList.add('single-work-active');  
  }
  componentWillUnmount() {
    document.body.classList.remove('single-work-active');
  }
  render() {
    const workid = 6;

    return (
      <div className="emicida">
        <div className="content">
          <h2 className="single-work__title">Emicida</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
        <Navigation workid={workid}></Navigation>
      </div>
    );
  }
}

export default emicida;
