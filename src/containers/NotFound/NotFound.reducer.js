import * as Immutable from 'seamless-immutable';

const initialState = Immutable({});

export const notFoundReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
