import React, { Component } from 'react';
import { default as MaterialTextField } from 'material-ui/TextField';
import BaseField from '../BaseField/BaseField';

// TODO create UI Text Input component
class TextField extends Component {
  render() {
    const { input, size, canHide, index, label, name, meta, children, ...custom } = this.props;
    const styles = size ? { width: size } : {};

    return (
      <BaseField {...this.props}>
        <MaterialTextField
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          style={styles}
          fullWidth={true}
          {...input}
          {...custom}
        />
      </BaseField>
    );
  }
}

export default TextField;
