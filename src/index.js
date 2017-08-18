import React from 'react';
import { render } from 'react-snapshot';
import { Provider } from 'react-redux';

import jss from 'jss'
import preset from 'jss-preset-default'

import store from './global/store';
import routes from './global/routes';

import registerServiceWorker from './registerServiceWorker';

jss.setup(preset());

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
