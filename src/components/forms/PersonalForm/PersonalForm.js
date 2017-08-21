import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import SelectField from '../../fields/SelectField/SelectField';
import { connect } from 'react-redux';
import { FORM_NAME } from './PersonalForm.constants';
import { selectPersonalData } from '../../../global/application/application.selectors';
import { createForm } from '../BaseForm/BaseForm';

const BaseForm = createForm(FORM_NAME, selectPersonalData);

export class PersonalForm extends Component {
  render() {
    const { onChange, onSubmit, readOnly } = this.props;
    const { titleOptions } = this.props;

    const definition = [
      {
        name: 'title',
        label: 'Title',
        component: SelectField,
        options: titleOptions,
      },
    ];

    return (
      <BaseForm
        onSubmit={onSubmit}
        readOnly={readOnly}
        onChange={onChange}
        definition={definition}
      />
    );
  }
}

PersonalForm.defaultProps = {
  titleOptions: [],
};

PersonalForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,

  titleOptions: PropTypes.array.isRequired,
};

export default PersonalForm;
