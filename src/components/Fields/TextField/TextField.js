import React, { Component } from 'react';
// TODO create UI Text Input component
import { default as MaterialTextField } from 'material-ui/TextField';
import Grid from 'material-ui/Grid';

class TextField extends Component {
  render() {
    const { input, label, name, meta: { touched, error }, children, ...custom } = this.props;

    return (
      <Grid container>
        <Grid item xs={12} sm={4}>
          <label htmlFor={name}>
            {label}
          </label>
        </Grid>
        <Grid item xs={12} sm={4}>
          <MaterialTextField
            hintText={label}
            floatingLabelText={label}
            errorText={touched && error}
            {...input}
            {...custom}
          />
        </Grid>
      </Grid>
    );
  }
}

export default TextField;
