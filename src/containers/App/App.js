import React, { Component } from 'react';
import Toolbar from '../../components/UI/Toolbar';
import { Link, withRouter } from 'react-router-dom';

import './App.css';
import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import KickOff from '../KickOff';
import Loan from '../Loan';

class App extends Component {

  render() {
    const {children} = this.props;
    return (
      <div>
        <Helmet>
          <title>App</title>
        </Helmet>
        <Toolbar />
        <div className="App">
          {children}
        </div>
      </div>
    );
  }
}

App.defaultProps = {};

App.propTypes = {
  // children: PropTypes.insta
};

const mapStateToProps = state => ({
  route: state.router
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
