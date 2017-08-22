import Immutable from 'seamless-immutable';
import { REHYDRATE } from 'redux-persist/constants';
import canUseDOM from 'can-use-dom';

const initialState = Immutable({
  hasHydrated: !canUseDOM,
});

export const persistReducer = (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE:
      return state.merge({ hasHydrated: true });
    default:
      return state;
  }
};
