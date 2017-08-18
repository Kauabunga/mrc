import React, { Component } from 'react';
// TODO create UI Text Input component
import { default as MaterialTextField } from 'material-ui/TextField';
import BaseField from '../BaseField';

class TextField extends Component {
  render() {
    const { isHidden, input, label, name, meta: { touched, error }, children, ...custom } = this.props;

    return isHidden
      ? null
      : <BaseField {...this.props}>
          <MaterialTextField
            hintText={label}
            floatingLabelText={label}
            errorText={touched && error}
            {...input}
            {...custom}
          />
        </BaseField>;
  }
}

export default TextField;
