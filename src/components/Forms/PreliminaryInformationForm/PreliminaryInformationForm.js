import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import './PreliminaryInformationForm.css';
import Button from '../../UI/Button';
import SelectField from '../../Fields/SelectField';
import RadioField, { YesNoOptions } from '../../Fields/RadioField';
import { formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { FORM_NAME } from './PreliminaryInformationForm.constants';


class PreliminaryInformationForm extends Component {

  isProfessionHidden(formValues) {
    return !formValues.employment;
  }

  isPartyTypeHidden(formValues) {
    return this.isProfessionHidden(formValues) || !formValues.profession;
  }

  isBusinessUseHidden(formValues) {
    return this.isPartyTypeHidden(formValues) || formValues.partyType !== 'company';
  }

  render() {
    const {handleSubmit, partyTypes, employmentStatuses, professions, formValues} = this.props;

    const isProfessionHidden = this.isProfessionHidden(formValues);
    const isPartyTypeHidden = this.isPartyTypeHidden(formValues);
    const isBusinessUseHidden = this.isBusinessUseHidden(formValues);

    const isDeadEnd = 'TODO';

    return (
      <div>
        <form onSubmit={handleSubmit}>

          <Field name="employment"
                 label="What is your current employment status?"
                 component={SelectField}
                 options={employmentStatuses}>
          </Field>

          <Field name="profession"
                 isHidden={isProfessionHidden}
                 label="What is your current profession?"
                 component={SelectField}
                 options={professions}>
          </Field>

          <Field name="partyType"
                 isHidden={isPartyTypeHidden}
                 label="Are you applying as an Individual or a Company?"
                 component={RadioField}
                 options={partyTypes}>
          </Field>

          <Field name="businessUse"
                 isHidden={isBusinessUseHidden}
                 label="Is the vehicle wholly or predominantly (more than 50%) for business use?"
                 component={RadioField}
                 options={YesNoOptions}>
          </Field>

          {/* Add dead end text */}

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
  professions: [],
  partyTypes: [],
};

PreliminaryInformationForm.propTypes = {
  employmentStatuses: PropTypes.array.isRequired,
  professions: PropTypes.array.isRequired,
  partyTypes: PropTypes.array.isRequired,
};

const selector = formValueSelector(FORM_NAME);

let connectedComponent = connect(
  state => ({
    formValues: {
      employment: selector(state, 'employment'),
      profession: selector(state, 'profession'),
      partyType: selector(state, 'partyType'),
      businessUse: selector(state, 'businessUse'),
    }
  })
)(PreliminaryInformationForm);

export default reduxForm({
  form: FORM_NAME,
})(connectedComponent);
