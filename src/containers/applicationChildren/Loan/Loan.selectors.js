export const selectLoanContainer = state => state.containers.loanReducer;

export const selectKilometresTraveledOptions = state =>
  selectLoanContainer(state).kilometresTraveledOptions;
