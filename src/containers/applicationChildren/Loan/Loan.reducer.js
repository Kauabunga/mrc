import * as Immutable from 'seamless-immutable';

const initialState = Immutable({
  kilometresTraveled: getKilometresTraveled(),
});

export const loanReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

function getKilometresTraveled() {
  return [
    {
      label: '0-100km',
      value: '0-100km',
    },
    {
      label: '101-1000km',
      value: '101-1000km',
    },
  ]
}