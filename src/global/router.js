import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { history } from './store';
import ReactGA from 'react-ga';
import routes from './routes';

// Trigger GA events on page navigations
history.listen((location, action) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

const router = (
  <ConnectedRouter history={history}>
    {routes}
  </ConnectedRouter>
);

export default router;
