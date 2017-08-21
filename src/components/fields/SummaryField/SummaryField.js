import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BaseField from '../BaseField/BaseField';
import SelectField from '../SelectField/SelectField';
import RadioField from '../RadioField/RadioField';

class SummaryField extends Component {
  getValue(props) {
    const { input, originalComponent, options } = props;
    switch (originalComponent) {
      case RadioField:
      case SelectField:
        let option = options.find(option => option.value === input.value);
        return option && option.label;
      default:
        return input.value;
    }
  }

  render() {
    const value = this.getValue(this.props);

    return !value
      ? null
      : <BaseField {...this.props}>
          <h4>
            {value}
          </h4>
        </BaseField>;
  }
}

SummaryField.propTypes = {
  // complete: PropTypes.bool,
};

export default SummaryField;
