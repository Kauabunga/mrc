import React, { Component } from 'react';
import BaseField from '../BaseField/BaseField';
import Select from 'react-select';
import canUseDOM from 'can-use-dom';

// Be sure to include styles at some point, probably during your bootstrapping
// Imported in index.html
// import 'react-select/dist/react-select.css';

// TODO create UI Select Input component
// TODO create UI Label component

class SelectField extends Component {
  render() {
    const { options, input } = this.props;

    const ssrProps = {
      arrowRenderer: canUseDOM ? undefined : () => null,
      placeholder: canUseDOM ? 'Select...' : null,
    };

    return (
      <BaseField {...this.props}>
        <Select
          clearable={false}
          searchable={false}
          {...ssrProps}
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
