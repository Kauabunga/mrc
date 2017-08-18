import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate, createTransform } from 'redux-persist';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import createGlobalReducer from './reducer';
import globalSagas from './sagas';
import * as Immutable from 'seamless-immutable';

export const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

const rootReducer = createGlobalReducer();
const enhancers = [
  autoRehydrate(),
];
const middlewares = [
  // Middleware for intercepting and dispatching navigation actions
  routerMiddleware(history),
  sagaMiddleware,
];

// Redux dev tools
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

const store = createStore(
  rootReducer,
  undefined,
  composedEnhancers,
);

sagaMiddleware.run(globalSagas);

const myTransform = createTransform(
  // transform state coming from redux on its way to being serialized and stored
  (inboundState, key) => inboundState.asMutable(),
  // transform state coming from storage, on its way to be rehydrated into redux
  (outboundState, key) => Immutable(outboundState),
  // configuration options
  {whitelist: ['containers']}
);

const persistConfig = {
  transforms: [myTransform],
  blacklist: ['router'],
};

persistStore(store, persistConfig);

export default store;

