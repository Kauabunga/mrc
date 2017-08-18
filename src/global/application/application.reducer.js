import * as Immutable from 'seamless-immutable';

import { UPDATE_KICK_OFF_DATA } from './application.constants';

const initialState = Immutable({
  kickOff: {},
});

export const applicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_KICK_OFF_DATA:
      return state.merge({
        kickOff: state.kickOff.merge(action.data),
      });
    default:
      return state;
  }
};
