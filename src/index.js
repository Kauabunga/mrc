import React from 'react';
import { render } from 'react-snapshot';
import { Provider } from 'react-redux';
import jss from 'jss';
import preset from 'jss-preset-default';
import store from './global/store';
import routes from './global/routes';
import registerServiceWorker from './registerServiceWorker';
import ReactGA from 'react-ga';

// Load all the roboto fonts - Also done on index.html for faster load
import 'typeface-roboto';

// TODO use react jss library
jss.setup(preset());

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE, { debug: false });

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
