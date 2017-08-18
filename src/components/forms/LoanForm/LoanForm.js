import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import SelectField from '../../fields/SelectField/SelectField';
import { connect } from 'react-redux';
import { FORM_NAME } from './LoanForm.constants';
import { selectLoanData } from '../../../global/application/application.selectors';
import TextField from '../../fields/TextField/TextField';

class LoanForm extends Component {
  isIncomplete(formValues) {
    // TODO implement
    return !!formValues;
  }

  render() {
    const { handleSubmit, kilometresTraveledOptions, formValues } = this.props;

    const isIncomplete = this.isIncomplete(formValues);

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Field
            name="kilometresTraveled"
            label="How many kilometres do you typically travel in a year?"
            info="kkhjklhkldjfhasdf"
            component={SelectField}
            options={kilometresTraveledOptions}
          />

          <Field
            name="loanTerm"
            label="Loan Term"
            component={SelectField}
            options={kilometresTraveledOptions}
          />

          <Field name="amount" label="Finance amount" type="number" component={TextField} />

          {isIncomplete ? null : <h3>Complete</h3>}
        </form>
      </div>
    );
  }
}

LoanForm.defaultProps = {
  kilometresTraveledOptions: [],
};

LoanForm.propTypes = {
  onChange: PropTypes.func.isRequired,

  kilometresTraveledOptions: PropTypes.array.isRequired,
};

const selector = formValueSelector(FORM_NAME);

export default connect(state => ({
  initialValues: selectLoanData(state),
  formValues: {
    kilometresTraveled: selector(state, 'kilometresTraveled'),
  },
}))(
  reduxForm({
    form: FORM_NAME,
  })(LoanForm),
);
