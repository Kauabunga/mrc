import React, { Component } from 'react';
import BaseField from '../BaseField/BaseField';
import Select from 'react-select';

// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select.css';

// TODO create UI Select Input component
// TODO create UI Label component

class SelectField extends Component {
  render() {
    const { options, input } = this.props;
    return (
      <BaseField {...this.props}>
        <Select
          clearable={false}
          value={input.value}
          onChange={option => input.onChange((option && option.value) || null)}
          options={options}
        />
      </BaseField>
    );
  }
}

export default SelectField;
