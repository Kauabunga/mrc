import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Link } from 'react-router-dom';
import Button from '../../ui/Button/Button';
import SelectField from '../../fields/SelectField/SelectField';
import RadioField from '../../fields/RadioField/RadioField';
import { connect } from 'react-redux';
import { FORM_NAME } from './PreliminaryInformationForm.constants';
import { YesNoOptions } from '../../fields/RadioField/RadioField.YesNo';
import { OneTwoOptions } from '../../fields/RadioField/RadioField.OneTwo';
import { classes } from './PreliminaryInformationForm.styles';
import { selectKickOffData } from '../../../global/application/application.selectors';

class PreliminaryInformationForm extends Component {
  isProfessionHidden(formValues) {
    return !formValues.employment || formValues.employment === 'unemployed';
  }

  isPartyTypeHidden(formValues) {
    return this.isProfessionHidden(formValues) || !formValues.profession;
  }

  isBusinessUseHidden(formValues) {
    return this.isPartyTypeHidden(formValues) || formValues.partyType !== 'company';
  }

  isProductHidden(formValues) {
    return (
      this.isPartyTypeHidden(formValues) ||
      !formValues.partyType ||
      (formValues.partyType === 'company' && formValues.businessUse !== 'no')
    );
  }

  isCustomerCountHidden(formValues) {
    return this.isProductHidden(formValues) || !formValues.product;
  }

  isOfAgeHidden(formValues) {
    return this.isCustomerCountHidden(formValues) || !formValues.customerCount;
  }

  isHadDefaultedHidden(formValues) {
    return this.isOfAgeHidden(formValues) || formValues.ofAge !== 'yes';
  }

  isHadBankruptHidden(formValues) {
    return this.isHadDefaultedHidden(formValues) || formValues.hasDefaulted !== 'no';
  }

  isHadBankruptDischargedHidden(formValues) {
    return this.isHadBankruptHidden(formValues) || formValues.hasBankrupt !== 'yes';
  }

  isIsAustralianHidden(formValues) {
    return (
      this.isHadBankruptHidden(formValues) ||
      !formValues.hasBankrupt ||
      (formValues.hasBankrupt === 'yes' && formValues.hasBankruptDischarged !== 'yes')
    );
  }

  isIncomplete(formValues) {
    return this.isIsAustralianHidden(formValues) || !formValues.isAustralian;
  }

  getDeadEndMessage(form) {
    if (form.employment === 'unemployed') {
      return `To gain an online approval you must currently be employed, however alternatives options to gain Finance approval are available, please contact us on 1300 730 200 or this link.`;
    } else if (!this.isBusinessUseHidden(form) && form.partyType === 'company' && form.businessUse === 'yes') {
      return `This loan application is only for personal purposes. If you require finance for business use, please visit your preferred Mercedes-Benz dealer.`;
    } else if (!this.isOfAgeHidden(form) && form.ofAge === 'no') {
      return `Applicant must be over 18 years of age`;
    } else if (!this.isHadDefaultedHidden(form) && form.hasDefaulted === 'yes') {
      return `Applicant can not have defaulted a loan in the last 3 years`;
    } else if (
      !this.isHadBankruptDischargedHidden(form) &&
      form.hasBankrupt === 'yes' &&
      form.hasBankruptDischarged === 'no'
    ) {
      return `Applicant can not have been charged for bankruptcy.`;
    } else {
      return null;
    }
  }

  componentWillReceiveProps(nextProps) {
    this.props.onChange(nextProps.formValues);
  }

  render() {
    const { handleSubmit, products, partyTypes, employmentStatuses, professions, formValues } = this.props;

    const isProfessionHidden = this.isProfessionHidden(formValues);
    const isPartyTypeHidden = this.isPartyTypeHidden(formValues);
    const isBusinessUseHidden = this.isBusinessUseHidden(formValues);
    const isProductHidden = this.isProductHidden(formValues);
    const isCustomerCountHidden = this.isCustomerCountHidden(formValues);
    const isOfAgeHidden = this.isOfAgeHidden(formValues);
    const isHadDefaultedHidden = this.isHadDefaultedHidden(formValues);
    const isHadBankruptHidden = this.isHadBankruptHidden(formValues);
    const isHadBankruptDischargedHidden = this.isHadBankruptDischargedHidden(formValues);
    const isIsAustralianHidden = this.isIsAustralianHidden(formValues);

    const isIncomplete = this.isIncomplete(formValues);

    const deadEndMessage = this.getDeadEndMessage(formValues);

    return (
      <div className={classes.container}>
        <form onSubmit={handleSubmit}>
          <Field
            name="employment"
            label="What is your current employment status?"
            component={SelectField}
            options={employmentStatuses}
          />

          <Field
            name="profession"
            isHidden={isProfessionHidden}
            label="What is your current profession?"
            component={SelectField}
            options={professions}
          />

          <Field
            name="partyType"
            isHidden={isPartyTypeHidden}
            label="Are you applying as an Individual or a Company?"
            component={RadioField}
            options={partyTypes}
          />

          <Field
            name="businessUse"
            isHidden={isBusinessUseHidden}
            label="Is the vehicle wholly or predominantly (more than 50%) for business use?"
            component={RadioField}
            options={YesNoOptions}
          />

          <Field
            name="product"
            isHidden={isProductHidden}
            label="Finance Product"
            component={SelectField}
            options={products}
          />

          <Field
            name="customerCount"
            isHidden={isCustomerCountHidden}
            label="How many people are applying for this loan?"
            component={RadioField}
            options={OneTwoOptions}
          />

          <Field
            name="ofAge"
            isHidden={isOfAgeHidden}
            label="Are you over 18 years old?"
            component={RadioField}
            options={YesNoOptions}
          />

          <Field
            name="hasDefaulted"
            isHidden={isHadDefaultedHidden}
            label="Have you defaulted on a loan in the last 3 years?"
            component={RadioField}
            options={YesNoOptions}
          />

          <Field
            name="hasBankrupt"
            isHidden={isHadBankruptHidden}
            label="Have you declared bankruptcy in the last 7 years?"
            component={RadioField}
            options={YesNoOptions}
          />

          <Field
            name="hasBankruptDischarged"
            isHidden={isHadBankruptDischargedHidden}
            label="Have you been discharged?"
            component={RadioField}
            options={YesNoOptions}
          />

          <Field
            name="isAustralian"
            isHidden={isIsAustralianHidden}
            label="Are you an Australian resident or Citizen for tax purposes?"
            component={RadioField}
            options={YesNoOptions}
          />

          <h3>
            {deadEndMessage}
          </h3>

          {isIncomplete
            ? null
            : <div>
                <h3>You are ready to apply.</h3>
                <Link to="/application" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Button raised type="submit">
                    Next
                  </Button>
                </Link>
              </div>}
        </form>
      </div>
    );
  }
}

PreliminaryInformationForm.defaultProps = {
  employmentStatuses: [],
  professions: [],
  partyTypes: [],
  products: [],
};

PreliminaryInformationForm.propTypes = {
  onChange: PropTypes.func.isRequired,

  employmentStatuses: PropTypes.array.isRequired,
  professions: PropTypes.array.isRequired,
  partyTypes: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired,
};

const selector = formValueSelector(FORM_NAME);

export default connect(state => ({
  initialValues: selectKickOffData(state),
  formValues: {
    employment: selector(state, 'employment'),
    profession: selector(state, 'profession'),
    partyType: selector(state, 'partyType'),
    businessUse: selector(state, 'businessUse'),
    product: selector(state, 'product'),
    customerCount: selector(state, 'customerCount'),
    ofAge: selector(state, 'ofAge'),
    hasDefaulted: selector(state, 'hasDefaulted'),
    hasBankrupt: selector(state, 'hasBankrupt'),
    hasBankruptDischarged: selector(state, 'hasBankruptDischarged'),
    isAustralian: selector(state, 'isAustralian'),
  },
}))(
  reduxForm({
    form: FORM_NAME,
  })(PreliminaryInformationForm),
);
