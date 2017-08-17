export const selectKickOffContainer = (state) => state.containers.kickOffReducer;


export const selectEmploymentStatuses = (state) =>
  selectKickOffContainer(state).employmentStatuses;
