import SelectField from '../../fields/SelectField/SelectField';
import TextField from '../../fields/TextField/TextField';
import RadioField from '../../fields/RadioField/RadioField';
import { YesNoOptions } from '../../fields/RadioField/RadioField.YesNo';

/*
 * Hidden
 */

const isKilometresTraveledHidden = (value, allValues) => {
  return false;
};

const isLoanTermHidden = (value, allValues) => {
  return !allValues.kilometresTraveled;
};

const isFinanceAmountHidden = (value, allValues) => {
  return isLoanTermHidden(null, allValues) || !allValues.loanTerm;
};

/*
 * VALIDATION
 */

const isValidFinanceAmount = value => {
  return value > 200000 ? 'We can only finance loans up to $200,000' : undefined;
};

const isValidDeposit = value => {
  return value > 1000000 ? 'We cannot accept deposits over $1,000,000' : undefined;
};

const isValidPostcode = value => {
  return !/^\d\d\d\d$/.test(value) ? 'A postcode must be 4 digits' : undefined;
};

/*
 * DEFINITION
 */

export function getDefinition(options) {
  const {
    kilometresTraveledOptions,
    loanTermOptions,
    dealershipOptions,
    buildYearOptions,
    makeOptions,
    modelOptions,
  } = options;

  return [
    {
      name: 'kilometresTraveled',
      label: 'How many kilometres do you typically travel in a year?',
      component: SelectField,
      validate: [],
      options: kilometresTraveledOptions,
    },
    {
      name: 'loanTerm',
      label: 'Loan Term',
      component: SelectField,
      validate: [],
      options: loanTermOptions,
    },
    {
      name: 'amount',
      label: 'Finance amount',
      type: 'number',
      component: TextField,
      size: 180,
      validate: [isValidFinanceAmount],
    },
    {
      name: 'deposit',
      label: 'Deposit',
      type: 'number',
      component: TextField,
      size: 180,
      validate: [isValidDeposit],
    },
    {
      name: 'postcode',
      label: 'Postcode',
      type: 'number',
      component: TextField,
      size: 120,
      validate: [isValidPostcode],
    },
    {
      name: 'dealership',
      label: 'Dealership',
      component: SelectField,
      validate: [],
      options: dealershipOptions,
    },
    {
      name: 'buildYear',
      label: 'Build Year',
      component: SelectField,
      validate: [],
      options: buildYearOptions,
    },
    {
      name: 'make',
      label: 'Make',
      component: SelectField,
      validate: [],
      options: makeOptions,
    },
    {
      name: 'model',
      label: 'Model',
      component: SelectField,
      validate: [],
      options: modelOptions,
    },
    {
      name: 'currentFinanceCustomer',
      label: 'Current Finance Customer?',
      component: RadioField,
      validate: [],
      options: YesNoOptions,
    },
    {
      name: 'tradeIn',
      label: 'Trade In?',
      component: RadioField,
      validate: [],
      options: YesNoOptions,
    },
    {
      name: 'underFinance',
      label: 'Under Finance?',
      component: RadioField,
      validate: [],
      options: YesNoOptions,
    },
  ];
}
