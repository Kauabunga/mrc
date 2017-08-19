import * as Immutable from 'seamless-immutable';

const initialState = Immutable({
  kilometresTraveledOptions: getKilometresTraveledOptions(),
  loanTermOptions: getLoanTermOptions(),
});

export const loanReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

function getKilometresTraveledOptions() {
  return [
    {
      label: '0-100km',
      value: '0-100km',
    },
    {
      label: '101-1000km',
      value: '101-1000km',
    },
  ];
}

function getLoanTermOptions() {
  return [
    {
      label: '12 Months',
      value: '12',
    },
    {
      label: '24 Months',
      value: '24',
    },
    {
      label: '36 Months',
      value: '36',
    },
    {
      label: '48 Months',
      value: '48',
    },
    {
      label: '60 Months',
      value: '60',
    },
  ];
}
