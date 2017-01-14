// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router';

// Components
import Navigation from '../../components/navigation';
import BackToTop from '../../components/back-to-top';

class WorkPage extends Component {
  componentDidMount() {
    document.body.classList.add('work-page-active');
  }
  componentWillUnmount() {
    if (location.pathname === '/') {
      document.body.classList.remove('work-page-active');
    }
  }
  render() {
    return (
      <div>
        <div className="work-page__scroll">

          {this.props.section}

          <Navigation position={this.props.position} />
        </div>

        <Link className="work-page__back-to-home" to="/">
          Back
          <div />
        </Link>

        <BackToTop container={'.work-page__scroll'} />
      </div>
    );
  }
}

WorkPage.propTypes = {
  section: React.PropTypes.object,
  position: React.PropTypes.number,
};

export default WorkPage;
