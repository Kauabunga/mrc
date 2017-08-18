import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { kickOffReducer } from '../containers/KickOff/KickOff.reducer';
import { loanReducer } from '../containers/applicationChildren/Loan/Loan.reducer';
import { applicationReducer } from './application/application.reducer';

const containersReducer = {
  containers: combineReducers({
    kickOffReducer,
    loanReducer,
    // NOTE: put other App reducers here
  }),
};

const createGlobalReducer = () =>
  combineReducers({
    ...containersReducer,
    application: applicationReducer,
    router: routerReducer,
    form: formReducer,
  });

export default createGlobalReducer;
