import * as Immutable from 'seamless-immutable';

import { GET_API_DATA, GET_API_DATA_LOADED, GET_API_DATA_ERROR } from './KickOff.constants';

const initialState = Immutable({
  employmentStatuses: getEmploymentStatuses(),
  professions: getProfessions(),
  partyTypes: getPartyTypes(),
  products: getProducts(),
});

export const kickOffReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_API_DATA:
      return state.set('apiDataLoading', true).set('apiDataError', null);
    case GET_API_DATA_LOADED:
      return state
        .set('apiData', action.data)
        .set('apiDataLoading', false)
        .set('apiDataLoaded', true)
        .set('apiDataError', null);
    case GET_API_DATA_ERROR:
      return state.set('apiDataLoading', false).set('apiDataLoaded', false).set('apiDataError', action.error);
    default:
      return state;
  }
};

function getProducts() {
  return [
    {
      label: 'Consumer loan',
      value: 'consumerLoan',
    },
  ];
}

function getPartyTypes() {
  return [
    {
      label: 'Individual',
      value: 'individual',
    },
    {
      label: 'Company',
      value: 'company',
    },
  ];
}

function getEmploymentStatuses() {
  return [
    {
      label: 'Employed',
      value: 'employed',
    },
    {
      label: 'Self Employed',
      value: 'selfEmployed',
    },
    {
      label: 'Retired',
      value: 'retired',
    },
    {
      label: 'Unemployed',
      value: 'unemployed',
    },
  ];
}

function getProfessions() {
  return [
    {
      label: 'Professional Executive',
      value: 'professionalExecutive',
    },
    {
      label: 'Office Staff Clerical',
      value: 'officeStaffClerical',
    },
    {
      label: 'Trade',
      value: 'trade',
    },
    {
      label: 'Unskilled',
      value: 'unskilled',
    },
    {
      label: 'Other',
      value: 'other',
    },
  ];
}
