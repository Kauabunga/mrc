import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { history } from './store';
import ReactGA from 'react-ga';
import App from '../containers/App/App';
import Application from '../containers/Application/Application';
import KickOff from '../containers/KickOff/KickOff';
import NotFound from '../containers/NotFound/NotFound';
import Loan from '../containers/applicationChildren/Loan/Loan';
import Personal from '../containers/applicationChildren/Personal/Personal';
import Financial from '../containers/applicationChildren/Financial/Financial';
import Summary from '../containers/applicationChildren/Summary/Summary';

// Trigger GA events on page navigations
history.listen((location, action) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

const routes = (
  <ConnectedRouter history={history}>
    <App>
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
    </App>
  </ConnectedRouter>
);

export default routes;
