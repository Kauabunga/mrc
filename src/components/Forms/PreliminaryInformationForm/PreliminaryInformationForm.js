import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import './PreliminaryInformationForm.css';
import Button from '../../UI/Button';
import SelectField from '../../Fields/SelectField';
import TextField from '../../Fields/TextField';

class PreliminaryInformationForm extends Component {
  render() {
    const {handleSubmit, employmentStatuses} = this.props;
    console.log(employmentStatuses);
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" component="input" type="text"/>
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" component="input" type="text"/>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" component="input" type="email"/>
          </div>

          <Field name="email" label="Email" type="email" component={TextField}/>

          <Field name="employment" label="What is your current employment status?" component={SelectField}>
            {
              employmentStatuses.map(status => (
                <option key={status.value} value={status.value}>{status.label}</option>
              ))
            }
          </Field>

          <Button raised type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

PreliminaryInformationForm.defaultProps = {
  employmentStatuses: [],
};

PreliminaryInformationForm.propTypes = {
  employmentStatuses: PropTypes.array.isRequired,
};

export default reduxForm({
  // a unique name for the form
  form: 'PreliminaryInformation',
})(PreliminaryInformationForm);
