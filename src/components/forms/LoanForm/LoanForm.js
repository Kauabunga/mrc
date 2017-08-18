import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import SelectField from '../../fields/SelectField/SelectField';
import { connect } from 'react-redux';
import { FORM_NAME } from './LoanForm.constants';
import { selectLoanData } from '../../../global/application/application.selectors';

class LoanForm extends Component {
  componentWillReceiveProps(nextProps) {
    this.props.onChange(nextProps.formValues);
  }

  isIncomplete(formValues) {
    // TODO implement
    return !!formValues;
  }

  render() {
    const { handleSubmit, kilometresTraveled, formValues } = this.props;

    const isIncomplete = this.isIncomplete(formValues);

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Field
            name="kilometresTraveled"
            label="What is your current employment status?"
            component={SelectField}
            options={kilometresTraveled}
          />

          {isIncomplete ? null : <h3>Complete</h3>}
        </form>
      </div>
    );
  }
}

LoanForm.defaultProps = {
  kilometresTraveled: [],
};

LoanForm.propTypes = {
  onChange: PropTypes.func.isRequired,

  kilometresTraveled: PropTypes.array.isRequired,
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
    enableReinitialize: true,
  })(LoanForm),
);
