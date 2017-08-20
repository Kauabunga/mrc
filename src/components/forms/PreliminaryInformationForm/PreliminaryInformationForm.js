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
import EmploymentInfo from './PreliminaryInformationForm.info.employment';
import { TransitionMotion, spring, presets } from 'react-motion';

export class PreliminaryInformationForm extends Component {
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

  isHasDefaultedHidden(formValues) {
    return this.isOfAgeHidden(formValues) || formValues.ofAge !== 'yes';
  }

  isHadBankruptHidden(formValues) {
    return this.isHasDefaultedHidden(formValues) || formValues.hasDefaulted !== 'no';
  }

  isHasBankruptDischargedHidden(formValues) {
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
    } else if (
      !this.isBusinessUseHidden(form) &&
      form.partyType === 'company' &&
      form.businessUse === 'yes'
    ) {
      return `This loan application is only for personal purposes. If you require finance for business use, please visit your preferred Mercedes-Benz dealer.`;
    } else if (!this.isOfAgeHidden(form) && form.ofAge === 'no') {
      return `Applicant must be over 18 years of age`;
    } else if (!this.isHasDefaultedHidden(form) && form.hasDefaulted === 'yes') {
      return `Applicant can not have defaulted a loan in the last 3 years`;
    } else if (
      !this.isHasBankruptDischargedHidden(form) &&
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

  willEnter() {
    return {
      height: 0,
      opacity: 0,
    };
  };

  willLeave() {
    return {
      height: spring(0),
      opacity: spring(0),
    };
  };

  render() {
    const {
      handleSubmit,
      products,
      partyTypes,
      employmentStatuses,
      professions,
      formValues,
    } = this.props;

    const definition = [
      {
        name: 'employment',
        label: "What is your current employment status?",
        component: SelectField,
        infoContent: EmploymentInfo,
        options: employmentStatuses,
      },
      {
        name: 'profession',
        label: "What is your current profession?",
        isHidden: this.isProfessionHidden(formValues),
        component: SelectField,
        info: 'Choose the option that best describes your profession. If none of the available choices apply, please select other.',
        options: professions,
      },
      {
        name: 'partyType',
        label: "Are you applying as an Individual or a Company?",
        isHidden: this.isPartyTypeHidden(formValues),
        component: RadioField,
        options: partyTypes,
      },
      {
        name: "businessUse",
        isHidden: this.isBusinessUseHidden(formValues),
        label: "Is the vehicle wholly or predominantly (more than 50%) for business use?",
        component: RadioField,
        info: "This loan application is only for personal purposes. If you require finance for business use, please visit your preferred Mercedes-Benz dealer.",
        options: YesNoOptions,
      },
      {
        name: "product",
        isHidden: this.isProductHidden(formValues),
        label: "Finance Product",
        component: SelectField,
        options: products,
      },
      {
        name: "customerCount",
        isHidden: this.isCustomerCountHidden(formValues),
        label: "How many people are applying for this loan?",
        component: RadioField,
        options: OneTwoOptions,
      },
      {
        name: "ofAge",
        isHidden: this.isOfAgeHidden(formValues),
        label: "Are you over 18 years old?",
        component: RadioField,
        options: YesNoOptions,
      },
      {
        name: "hasDefaulted",
        isHidden: this.isHasDefaultedHidden(formValues),
        label: "Have you defaulted on a loan in the last 3 years?",
        component: RadioField,
        options: YesNoOptions,
      },
      {
        name: "hasBankrupt",
        isHidden: this.isHadBankruptHidden(formValues),
        label: "Have you declared bankruptcy in the last 7 years?",
        component: RadioField,
        options: YesNoOptions,
      },
      {
        name: "hasBankruptDischarged",
        isHidden: this.isHasBankruptDischargedHidden(formValues),
        label: "Have you been discharged?",
        component: RadioField,
        options: YesNoOptions,
      },
      {
        name: "isAustralian",
        isHidden: this.isIsAustralianHidden(formValues),
        label: "Are you an Australian resident or Citizen for tax purposes?",
        component: RadioField,
        options: YesNoOptions,
      },
    ];

    const defaultStyles = definition.map((field, index) => ({
      data: field,
      key: field.name,
      style: {
        height: 0,
        opacity: 0,
      }
    }));

    const getStyles = definition.filter((field, index) => !field.isHidden)
      .map((field, index) => ({
          key: field.name,
          data: field,
          style: {
            height: spring(72),
            opacity: spring(1),
          }
        })
      );


    const isIncomplete = this.isIncomplete(formValues);

    const deadEndMessage = this.getDeadEndMessage(formValues);

    return (
      <div className={classes.container}>
        <form onSubmit={handleSubmit}>

          <TransitionMotion
            defaultStyles={defaultStyles}
            styles={getStyles}
            willLeave={this.willLeave}
            willEnter={this.willEnter}>
            {styles =>
              <div>
                {styles.map(({key, style, data}) => {
                    return (
                      <div
                        key={key}
                        style={{...style, display: 'flex', background: 'white'}}
                      >
                        <Field  {...data} />
                      </div>
                    )
                  }
                )}
              </div>
            }
          </TransitionMotion>

          <h3>
            {deadEndMessage}
          </h3>

          {isIncomplete
            ? null
            : <div>
              <h3>You are ready to apply.</h3>
              <Link
                to="/application"
                tabIndex="-1"
                style={{textDecoration: 'none', color: 'inherit'}}
              >
                <Button aria-label="Next" raised type="submit">
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
