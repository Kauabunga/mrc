import React, { Component } from 'react';
import Toolbar from '../../components/ui/Toolbar/Toolbar';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { HotKeys } from 'react-hotkeys';
import canUseDOM from 'can-use-dom';
import NotFound from '../NotFound/NotFound';
import KickOff from '../KickOff/KickOff';
import Loan from '../applicationChildren/Loan/Loan';
import Personal from '../applicationChildren/Personal/Personal';
import Financial from '../applicationChildren/Financial/Financial';
import Summary from '../applicationChildren/Summary/Summary';
import Application from '../Application/Application';
import injectSheet from 'react-jss';
import { styles } from './App.styles';

export class App extends Component {
  render() {
    const { classes } = this.props;

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

        {canUseDOM
          ? <HotKeys focused={true} keyMap={keyMap} attach={window} handlers={handlers} />
          : null}

        <Toolbar />
        <div className={classes.appRoot}>
          <div className={classes.appContainer}>
            <Switch>
              <Route exact path="/404" component={NotFound} />
              <Route exact path="/" component={KickOff} />

              <Route path="/application">
                <Application>
                  <Switch>
                    <Route exact path="/application/loan" component={Loan} />
                    <Route exact path="/application/personal" component={Personal} />
                    <Route exact path="/application/financial" component={Financial} />
                    <Route exact path="/application/summary" component={Summary} />
                    <Redirect from="/application" to="/application/loan" />
                  </Switch>
                </Application>
              </Route>

              <Redirect from="*" to="/404" />
            </Switch>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(App)));
