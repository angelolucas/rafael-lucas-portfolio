// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router';

// Components
import Navigation from '../../components/navigation';
import BackToTop from '../../components/back-to-top';

class WorksPage extends Component {
  componentDidMount() {
    document.body.classList.add('works-page-active');
  }
  componentWillUnmount() {
    if (location.pathname === '/') {
      document.body.classList.remove('works-page-active');
    }
  }
  render() {
    return (
      <div>
        <div className="works-page__scroll">

          {this.props.section}

          <Navigation position={this.props.position} />
        </div>

        <Link className="works-page__back-to-home" to="/">
          Back
          <div />
        </Link>

        <BackToTop container={'.works-page__scroll'} />
      </div>
    );
  }
}

WorksPage.propTypes = {
  section: React.PropTypes.object,
  position: React.PropTypes.number,
};

export default WorksPage;
