import React, { Component } from 'react';
import BaseField from '../BaseField';

// TODO create UI Select Input component
// TODO create UI Label component

class SelectField extends Component {
  render() {
    const {options, isHidden, input, label, name, meta: {touched, error}, children, ...custom} = this.props;
    return isHidden ? null : (
      <BaseField {...this.props}>
        <select
          {...input}
          onChange={(event) => input.onChange(event.target.value)}
          children={children}
          {...custom}
        >
          {
            options.map(option => (
              <option key={option.value}
                      value={option.value}>
                {option.label}
              </option>
            ))
              .concat((<option key={'null'} value={null}/>))
          }
        </select>
      </BaseField>
    );
  }
}

export default SelectField;
