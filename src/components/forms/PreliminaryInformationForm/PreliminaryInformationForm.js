import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FORM_NAME } from './PreliminaryInformationForm.constants';
import { selectKickOffData } from '../../../global/application/application.selectors';
import { createForm } from '../BaseForm/BaseForm';
import { getDefinition } from './PreliminaryInformationForm.definition';

const BaseForm = createForm(FORM_NAME, selectKickOffData);

export class PreliminaryInformationForm extends Component {
  render() {
    const { onChange, onSubmit } = this.props;

    const definition = getDefinition(this.props);

    return <BaseForm onSubmit={onSubmit} onChange={onChange} definition={definition} />;
  }
}

PreliminaryInformationForm.defaultProps = {
  employmentStatuses: [],
  professions: [],
  partyTypes: [],
  products: [],
};

// TODO pull common form interface into shared proptypes
PreliminaryInformationForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,

  employmentStatuses: PropTypes.array.isRequired,
  professions: PropTypes.array.isRequired,
  partyTypes: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired,
};

export default PreliminaryInformationForm;
