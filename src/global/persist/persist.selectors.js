export const selectPersist = state => state.persist;

export const selectHasHydrated = state => selectPersist(state).hasHydrated;
