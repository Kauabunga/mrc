import React, { Component } from 'react';
import Grid from 'material-ui/Grid';

// TODO create UI Select Input component
// TODO create UI Label component

class SelectField extends Component {
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
          <select
            {...input}
            onChange={(event) => input.onChange(event.target.value)}
            children={children}
            {...custom}
          />
        </Grid>
      </Grid>
    );
  }
}

export default SelectField;
