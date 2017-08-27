import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectField from '../../fields/SelectField/SelectField';
import { FORM_NAME } from './PersonalForm.constants';
import { selectPersonalData } from '../../../global/application/application.selectors';
import { createForm } from '../BaseForm/BaseForm';
import AutocompleteField from '../../fields/AutocompleteField/AutocompleteField';
import { getDefinition } from './PersonalForm.definition';

const BaseForm = createForm(FORM_NAME, selectPersonalData);

export class PersonalForm extends Component {
  render() {
    const { onChange, onSubmit, readOnly } = this.props;

    const definition = getDefinition(this.props);

    return (
      <BaseForm
        onSubmit={onSubmit}
        onChange={onChange}
        readOnly={readOnly}
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
