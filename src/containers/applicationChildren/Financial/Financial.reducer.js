import Immutable from 'seamless-immutable';

const initialState = Immutable({});

export const financialReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
