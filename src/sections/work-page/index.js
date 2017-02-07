// Dependencies
import React, { Component } from 'react';

// Components
import WorkNavigation from '../../components/work-navigation';
import BackToHome from '../../components/back-to-home';
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
      <div className={`work-page work-page--${this.props.theme}`}>
        <div className="work-page__scroll" ref={(scroll) => { this.scroll = scroll; }}>

          {this.props.section}

          <WorkNavigation position={this.props.position} />
        </div>

        <BackToHome container={'.work-page__scroll'} />

        <BackToTop container={'.work-page__scroll'} />
      </div>
    );
  }
}

WorkPage.propTypes = {
  section: React.PropTypes.object,
  position: React.PropTypes.number,
  theme: React.PropTypes.string,
};

export default WorkPage;
