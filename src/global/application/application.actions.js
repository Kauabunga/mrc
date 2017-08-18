import { UPDATE_KICK_OFF_DATA, UPDATE_LOAN_DATA } from './application.constants';

export const updateKickOffData = data => ({
  type: UPDATE_KICK_OFF_DATA,
  data,
});

export const updateLoanData = data => ({
  type: UPDATE_LOAN_DATA,
  data,
});
