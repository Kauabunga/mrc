export const selectPersonalContainer = state => state.containers.personalReducer;

export const selectTitleOptions = state => selectPersonalContainer(state).titleOptions;
