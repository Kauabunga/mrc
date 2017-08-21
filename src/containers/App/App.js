import React, { Component } from 'react';
import Toolbar from '../../components/ui/Toolbar/Toolbar';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { classes } from './App.styles';
import { HotKeys } from 'react-hotkeys';

export class App extends Component {
  render() {
    const { children } = this.props;

    const handlers = {
      reset: event => {
        window.sessionStorage.clear();
        window.location.href = '/';
      },
    };

    const keyMap = {
      reset: ['shift+del', 'shift+backspace'],
    };

    return (
      <div>
        <Helmet>
          <title>App</title>
        </Helmet>
        <HotKeys focused={true} keyMap={keyMap} attach={window} handlers={handlers} />
        <Toolbar />
        <div className={classes.root}>
          <div className={classes.container}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

App.defaultProps = {};

App.propTypes = {
  // children: PropTypes.insta
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
