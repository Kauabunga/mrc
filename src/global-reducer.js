import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { appReducer } from './containers/App';
import { kickOffReducer } from './containers/KickOff';
import { applicationReducer } from './containers/Application';
import { loanReducer } from './containers/Loan';

const containersReducer = {
  containers: combineReducers({
    appReducer,
    kickOffReducer,
    applicationReducer,
    loanReducer,
    // NOTE: put other App reducers here
  }),
};

const createGlobalReducer = () =>
  combineReducers({
    ...containersReducer,
    router: routerReducer,
    form: formReducer,
  });

export default createGlobalReducer;
