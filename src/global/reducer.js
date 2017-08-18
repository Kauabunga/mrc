import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { appReducer } from '../containers/App/App.reducer';
import { kickOffReducer } from '../containers/KickOff/KickOff.reducer';
import { applicationReducer } from '../containers/Application/Application.reducer';
import { loanReducer } from '../containers/Loan/Loan.reducer';

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
