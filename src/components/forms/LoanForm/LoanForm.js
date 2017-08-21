import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FORM_NAME } from './LoanForm.constants';
import { selectLoanData } from '../../../global/application/application.selectors';
import { createForm } from '../BaseForm/BaseForm';
import { getDefinition } from './LoanForm.definition';

const BaseForm = createForm(FORM_NAME, selectLoanData);

export class LoanForm extends Component {
  render() {
    const { onChange, onSubmit } = this.props;

    const definition = getDefinition(this.props);

    return <BaseForm onSubmit={onSubmit} onChange={onChange} definition={definition} />;
  }
}

LoanForm.defaultProps = {
  kilometresTraveledOptions: [],
  loanTermOptions: [],
};

LoanForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,

  kilometresTraveledOptions: PropTypes.array.isRequired,
  loanTermOptions: PropTypes.array.isRequired,
};

export default LoanForm;
