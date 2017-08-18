import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Link } from 'react-router-dom';
import Button from '../../ui/Button/Button';
import SelectField from '../../fields/SelectField/SelectField';
import RadioField from '../../fields/RadioField/RadioField';
import { connect } from 'react-redux';
import { FORM_NAME } from './LoanForm.constants';

class LoanForm extends Component {
  render() {
    const { handleSubmit, kilometresTraveled, formValues } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Field
            name="kilometresTraveled"
            label="What is your current employment status?"
            component={SelectField}
            options={kilometresTraveled}
          />
        </form>
      </div>
    );
  }
}

LoanForm.defaultProps = {
  kilometresTraveled: [],
};

LoanForm.propTypes = {
  kilometresTraveled: PropTypes.array.isRequired,
};

const selector = formValueSelector(FORM_NAME);

export default connect(state => ({
  formValues: {
    kilometresTraveled: selector(state, 'kilometresTraveled'),
  },
}))(
  reduxForm({
    form: FORM_NAME,
  })(LoanForm),
);
