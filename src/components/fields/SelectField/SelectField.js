import React, { Component } from 'react';
import BaseField from '../BaseField/BaseField';
import Select from 'react-select';

// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select.css';

// TODO create UI Select Input component
// TODO create UI Label component

class SelectField extends Component {
  render() {
    const { options, isHidden, input, label, name, meta: { touched, error }, children, ...custom } = this.props;
    return isHidden
      ? null
      : <BaseField {...this.props}>
          <Select
            clearable={false}
            value={input.value}
            onChange={option => {
              console.log('on change', option);
              input.onChange((option && option.value) || null);
            }}
            options={options}
          />

          {/*<select {...input}*/}
          {/*onChange={event => input.onChange(event.target.value)}*/}
          {/*children={children}*/}
          {/*{...custom}>*/}
          {/*<option key={'null'} value={null}/>*/}
          {/*{options.map(option =>*/}
          {/*<option key={option.value} value={option.value}>*/}
          {/*{option.label}*/}
          {/*</option>,*/}
          {/*)}*/}
          {/*</select>*/}
        </BaseField>;
  }
}

export default SelectField;
