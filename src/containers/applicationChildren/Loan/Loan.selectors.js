export const selectLoanContainer = state => state.containers.loanReducer;

export const selectKilometresTraveled = state => selectLoanContainer(state).kilometresTraveled;
