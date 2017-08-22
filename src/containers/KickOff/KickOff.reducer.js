import Immutable from 'seamless-immutable';

const initialState = Immutable({
  employmentStatuses: getEmploymentStatuses(),
  professions: getProfessions(),
  partyTypes: getPartyTypes(),
  products: getProducts(),
});

export const kickOffReducer = (state = initialState, action) => {
  switch (action.type) {
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
