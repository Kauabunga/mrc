import Immutable from 'seamless-immutable';
import { REHYDRATE } from 'redux-persist/constants';
import root from 'window-or-global';

const initialState = Immutable({
  hasHydrated: !root.document,
});

export const persistReducer = (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE:
      return state.merge({ hasHydrated: true });
    default:
      return state;
  }
};
