import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import jss from 'jss';
import preset from 'jss-preset-default';
import store from './global/store';
import routes from './global/routes';
import { unregister } from './registerServiceWorker';
import ReactGA from 'react-ga';
import 'typeface-roboto';

// TODO use react jss library
jss.setup(preset());

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE, { debug: false });

ReactDOM.render(
  <div>
    <Provider store={store}>
      {routes}
    </Provider>
  </div>,
  document.getElementById('root'),
);

// Service Worker registration
// registerServiceWorker();
unregister();
