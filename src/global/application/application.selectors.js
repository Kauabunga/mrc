export const selectApplication = state => state.application;

export const selectKickOffData = state => selectApplication(state).kickOff.asMutable();
export const selectLoanData = state => selectApplication(state).loan.asMutable();
