import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './global/store';
import router from './global/router';
import { unregister } from './registerServiceWorker';
import ReactGA from 'react-ga';
import './polyfill';
import 'typeface-roboto';
import initReactFastclick from 'react-fastclick';

initReactFastclick();

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE, { debug: false });

ReactDOM.render(
  <div>
    <Provider store={store}>
      {router}
    </Provider>
  </div>,
  document.getElementById('root'),
);

// Service Worker registration
// registerServiceWorker();
unregister();
