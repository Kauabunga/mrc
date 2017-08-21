import React, { Component } from 'react';
import SelectField from '../../fields/SelectField/SelectField';
import RadioField from '../../fields/RadioField/RadioField';
import { YesNoOptions } from '../../fields/RadioField/RadioField.YesNo';
import { OneTwoOptions } from '../../fields/RadioField/RadioField.OneTwo';
import EmploymentInfo from './PreliminaryInformationForm.info.employment';
import SubmitField from '../../fields/SubmitField/SubmitField';

/*
 * Hidden
 */

const isProfessionHidden = (value, allValues) => {
  return (allValues && !allValues.employment) || allValues.employment === 'unemployed';
};

const isPartyTypeHidden = (value, allValues) => {
  return isProfessionHidden(null, allValues) || !allValues.profession;
};

const isBusinessUseHidden = (value, allValues) => {
  return isPartyTypeHidden(null, allValues) || allValues.partyType !== 'company';
};

const isProductHidden = (value, allValues) => {
  return (
    isPartyTypeHidden(null, allValues) ||
    !allValues.partyType ||
    (allValues.partyType === 'company' && allValues.businessUse !== 'no')
  );
};

const isCustomerCountHidden = (value, allValues) => {
  return isProductHidden(null, allValues) || !allValues.product;
};

const isOfAgeHidden = (value, allValues) => {
  return isCustomerCountHidden(null, allValues) || !allValues.customerCount;
};

const isHasDefaultedHidden = (value, allValues) => {
  return isOfAgeHidden(null, allValues) || allValues.ofAge !== 'yes';
};

const isHadBankruptHidden = (value, allValues) => {
  return isHasDefaultedHidden(null, allValues) || allValues.hasDefaulted !== 'no';
};

const isHasBankruptDischargedHidden = (value, allValues) => {
  return isHadBankruptHidden(null, allValues) || allValues.hasBankrupt !== 'yes';
};

const isIsAustralianHidden = (value, allValues) => {
  return (
    isHadBankruptHidden(null, allValues) ||
    !allValues.hasBankrupt ||
    (allValues.hasBankrupt === 'yes' && allValues.hasBankruptDischarged !== 'yes')
  );
};

const isNotComplete = (value, allValues) => {
  return isIsAustralianHidden(null, allValues) || !allValues.isAustralian;
};

/*
 * VALIDATION
 */

const isUnemployed = value => {
  return value === 'unemployed'
    ? 'To gain an online approval you must currently be employed, however alternatives options to gain Finance approval are available, please contact us on 1300 730 200 or this link.'
    : undefined;
};

const isBusinessVehicle = (value, allValues) => {
  return value === 'yes' && allValues.partyType === 'company'
    ? 'This loan application is only for personal purposes. If you require finance for business use, please visit your preferred Mercedes-Benz dealer.'
    : undefined;
};

const isNotOfAge = (value, allValues) => {
  return value === 'no' ? 'Applicant must be over 18 years of age' : undefined;
};

const isHasDefaulted = (value, allValues) => {
  return value === 'yes'
    ? 'Applicant can not have defaulted a loan in the last 3 years.'
    : undefined;
};

const isHasBankruptDischarged = (value, allValues) => {
  return value === 'no' && allValues.hasBankrupt === 'yes'
    ? 'Applicant can not have been charged for bankruptcy.'
    : undefined;
};

/*
 * DEFINITION
 */

export function getDefinition(options) {
  const { products, partyTypes, employmentStatuses, professions } = options;
  return [
    {
      name: 'employment',
      label: 'What is your current employment status?',
      component: SelectField,
      validate: [isUnemployed],
      infoContent: EmploymentInfo,
      options: employmentStatuses,
    },
    {
      name: 'profession',
      label: 'What is your current profession?',
      warn: [isProfessionHidden],
      component: SelectField,
      info:
        'Choose the option that best describes your profession. If none of the available choices apply, please select other.',
      options: professions,
    },
    {
      name: 'partyType',
      label: 'Are you applying as an Individual or a Company?',
      warn: [isPartyTypeHidden],
      component: RadioField,
      options: partyTypes,
    },
    {
      name: 'businessUse',
      label: 'Is the vehicle wholly or predominantly (more than 50%) for business use?',
      warn: [isBusinessUseHidden],
      validate: [isBusinessVehicle],
      component: RadioField,
      info:
        'This loan application is only for personal purposes. If you require finance for business use, please visit your preferred Mercedes-Benz dealer.',
      options: YesNoOptions,
    },
    {
      name: 'product',
      label: 'Finance Product',
      warn: [isProductHidden],
      component: SelectField,
      options: products,
    },
    {
      name: 'customerCount',
      label: 'How many people are applying for this loan?',
      warn: [isCustomerCountHidden],
      component: RadioField,
      options: OneTwoOptions,
    },
    {
      name: 'ofAge',
      label: 'Are you over 18 years old?',
      warn: [isOfAgeHidden],
      validate: [isNotOfAge],
      component: RadioField,
      options: YesNoOptions,
    },
    {
      name: 'hasDefaulted',
      label: 'Have you defaulted on a loan in the last 3 years?',
      warn: [isHasDefaultedHidden],
      validate: [isHasDefaulted],
      component: RadioField,
      options: YesNoOptions,
    },
    {
      name: 'hasBankrupt',
      label: 'Have you declared bankruptcy in the last 7 years?',
      warn: [isHadBankruptHidden],
      component: RadioField,
      options: YesNoOptions,
    },
    {
      name: 'hasBankruptDischarged',
      label: 'Have you been discharged?',
      warn: [isHasBankruptDischargedHidden],
      validate: [isHasBankruptDischarged],
      component: RadioField,
      options: YesNoOptions,
    },
    {
      name: 'isAustralian',
      label: 'Are you an Australian resident or Citizen for tax purposes?',
      warn: [isIsAustralianHidden],
      component: RadioField,
      options: YesNoOptions,
    },
    {
      name: 'complete',
      warn: [isNotComplete],
      component: SubmitField,
    },
  ];
}
