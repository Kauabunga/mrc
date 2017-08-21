import * as Immutable from 'seamless-immutable';
import { REHYDRATE } from 'redux-persist/constants';

const initialState = Immutable({
  hasHydrated: false,
});

export const persistReducer = (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE:
      return state.merge({ hasHydrated: true });
    default:
      return state;
  }
};
