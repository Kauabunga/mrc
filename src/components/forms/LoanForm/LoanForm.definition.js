import React, { Component } from 'react';
import SelectField from '../../fields/SelectField/SelectField';
import TextField from '../../fields/TextField/TextField';

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
  return value > 100000 ? 'We can only finance loans up to $100,000' : undefined;
};

/*
 * DEFINITION
 */

export function getDefinition(options) {
  const { kilometresTraveledOptions, loanTermOptions } = options;
  return [
    {
      name: 'kilometresTraveled',
      label: 'How many kilometres do you typically travel in a year?',
      component: SelectField,
      warn: [isKilometresTraveledHidden],
      validate: [],
      options: kilometresTraveledOptions,
    },
    {
      name: 'loanTerm',
      label: 'Loan Term',
      component: SelectField,
      warn: [isLoanTermHidden],
      validate: [],
      options: loanTermOptions,
    },
    {
      name: 'amount',
      label: 'Finance amount',
      type: 'number',
      component: TextField,
      warn: [isFinanceAmountHidden],
      validate: [isValidFinanceAmount],
    },
  ];
}
