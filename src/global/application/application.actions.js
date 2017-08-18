import {
  UPDATE_FINANCIAL_DATA,
  UPDATE_KICK_OFF_DATA,
  UPDATE_LOAN_DATA,
  UPDATE_PERSONAL_DATA,
} from './application.constants';

export const updateKickOffData = data => ({
  type: UPDATE_KICK_OFF_DATA,
  data,
});

export const updateLoanData = data => ({
  type: UPDATE_LOAN_DATA,
  data,
});

export const updatePersonalData = data => ({
  type: UPDATE_PERSONAL_DATA,
  data,
});

export const updateFinancialData = data => ({
  type: UPDATE_FINANCIAL_DATA,
  data,
});
