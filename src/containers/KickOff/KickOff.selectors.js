export const selectKickOffContainer = (state) => state.containers.kickOffReducer;

export const selectEmploymentStatuses = (state) =>
  selectKickOffContainer(state).employmentStatuses;

export const selectProfessions = (state) =>
  selectKickOffContainer(state).professions;

export const selectPartyTypes = (state) =>
  selectKickOffContainer(state).partyTypes;
