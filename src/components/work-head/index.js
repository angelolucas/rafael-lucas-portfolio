import React, { Component } from 'react';

class WorkHead extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <div className="work-head" style={{ backgroundImage: `url(${this.props.image})` }} />
    );
  }
}

WorkHead.propTypes = {
  image: React.PropTypes.string,
};

export default WorkHead;
