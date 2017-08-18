import * as Immutable from 'seamless-immutable';

import { UPDATE_KICK_OFF_DATA, UPDATE_LOAN_DATA } from './application.constants';

const initialState = Immutable({
  kickOff: {},
  loan: {},
});

export const applicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_KICK_OFF_DATA:
      return state.merge({
        kickOff: state.kickOff.merge(action.data),
      });
    case UPDATE_LOAN_DATA:
      return state.merge({
        loan: state.loan.merge(action.data),
      });
    default:
      return state;
  }
};
