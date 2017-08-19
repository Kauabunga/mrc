export const selectLoanContainer = state => state.containers.loanReducer;

export const selectKilometresTraveledOptions = state =>
  selectLoanContainer(state).kilometresTraveledOptions;

export const selectLoanTermOptions = state => selectLoanContainer(state).loanTermOptions;
