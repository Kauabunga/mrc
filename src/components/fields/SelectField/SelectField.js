import React, { Component } from 'react';
import BaseField from '../BaseField/BaseField';
import Select from 'react-select';

// Be sure to include styles at some point, probably during your bootstrapping
// Imported in index.html
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
          searchable={false}
          value={input && input.value}
          onChange={option => input.onChange((option && option.value) || null)}
          onBlur={(event, newValue, previousValue) => input.onBlur(newValue)}
          onFocus={(event, newValue, previousValue) => input.onFocus(event)}
          options={options}
        />
      </BaseField>
    );
  }
}

export default SelectField;
