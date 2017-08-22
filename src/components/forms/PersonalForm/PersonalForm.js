import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectField from '../../fields/SelectField/SelectField';
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
        onChange={event => {
          console.log('asdkjfhakjsdhf', event);
          onChange(event);
        }}
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
