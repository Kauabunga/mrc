import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { kickOffReducer } from '../containers/KickOff/KickOff.reducer';
import { loanReducer } from '../containers/applicationChildren/Loan/Loan.reducer';
import { applicationReducer } from './application/application.reducer';
import { personalReducer } from '../containers/applicationChildren/Personal/Personal.reducer';
import { summaryReducer } from '../containers/applicationChildren/Summary/Summary.reducer';
import { financialReducer } from '../containers/applicationChildren/Financial/Financial.reducer';

const containersReducer = {
  containers: combineReducers({
    kickOffReducer,
    loanReducer,
    personalReducer,
    financialReducer,
    summaryReducer,
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
