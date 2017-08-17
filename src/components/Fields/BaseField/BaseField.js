import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';


class BaseField extends Component {
  render() {
    const {options, isHidden, input, label, name, meta: {touched, error}, children, ...custom} = this.props;
    return isHidden ? null : (
      <Grid container>
        <Grid item xs={12} sm={4}>
          <FormLabel htmlFor={name}>{label}</FormLabel>
        </Grid>
        <Grid item xs={12} sm={4}>
          {children}
        </Grid>
      </Grid>
    );
  }
}

BaseField.propTypes = {
  isHidden: PropTypes.bool,
};


export default BaseField;
