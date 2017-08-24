import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import App from '../containers/Root/Root';
import Application from '../containers/Application/Application';
import KickOff from '../containers/KickOff/KickOff';
import NotFound from '../containers/NotFound/NotFound';
import Loan from '../containers/applicationChildren/Loan/Loan';
import Personal from '../containers/applicationChildren/Personal/Personal';
import Financial from '../containers/applicationChildren/Financial/Financial';
import Summary from '../containers/applicationChildren/Summary/Summary';

const routes = (
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
);

export default routes;
