import * as Immutable from 'seamless-immutable';

import {
  UPDATE_FINANCIAL_DATA,
  UPDATE_KICK_OFF_DATA,
  UPDATE_LOAN_DATA,
  UPDATE_PERSONAL_DATA,
} from './application.constants';

const initialState = Immutable({
  kickOff: {},
  loan: {},
  personal: {},
  financial: {},
});

export const applicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_KICK_OFF_DATA:
      return state.merge({ kickOff: state.kickOff.merge(action.data) });
    case UPDATE_LOAN_DATA:
      return state.merge({ loan: state.loan.merge(action.data) });
    case UPDATE_PERSONAL_DATA:
      return state.merge({ personal: state.personal.merge(action.data) });
    case UPDATE_FINANCIAL_DATA:
      return state.merge({ financial: state.financial.merge(action.data) });
    default:
      return state;
  }
};
