import React from 'react';
import { render } from 'react-snapshot';
import { Provider } from 'react-redux';

import store from './global/store';
import routes from './global/routes';

import registerServiceWorker from './registerServiceWorker';

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
