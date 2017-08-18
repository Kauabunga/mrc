export const selectApplication = state => state.application;

export const selectKickOffData = state => selectApplication(state).kickOff;
export const selectLoanData = state => selectApplication(state).loan;
export const selectPersonalData = state => selectApplication(state).personal;
export const selectFinancialData = state => selectApplication(state).financial;
