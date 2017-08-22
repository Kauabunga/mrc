import Immutable from 'seamless-immutable';

const initialState = Immutable({
  titleOptions: getTitleOptions(),
});

export const personalReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

function getTitleOptions() {
  return [
    {
      label: 'Mr',
      value: 'mr',
    },
    {
      label: 'Mrs',
      value: 'mrs',
    },
  ];
}
