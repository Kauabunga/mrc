import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { history } from './store';
import App from '../containers/App';
import Application from '../containers/Application';
import Loan from '../containers/Loan';
import KickOff from '../containers/KickOff';
import NotFound from '../containers/NotFound';

const routes = (
  <ConnectedRouter history={history}>
    <App>
      <Switch>
        <Route exact path="/404" component={NotFound} />
        <Route exact path="/" component={KickOff} />

        <Route path="/application">
          <Application>
            <Switch>
              <Route path="/application/loan" component={Loan} />
              <Redirect from="/application" to="/application/loan" />
            </Switch>
          </Application>
        </Route>

        <Redirect from="*" to="/404" />
      </Switch>
    </App>
  </ConnectedRouter>
);
export default routes;
