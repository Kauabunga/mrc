import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import { kickOffReducer } from './containers/KickOff';

const containersReducer = {
  containers: combineReducers({
    kickOffReducer,
    // NOTE: put other App reducers here
  }),
};

const createGlobalReducer = () =>
  combineReducers({
    ...containersReducer,
    route: routerReducer,
    form: formReducer,
  });

export default createGlobalReducer;
