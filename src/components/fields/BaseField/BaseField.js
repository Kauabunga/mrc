import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';
import './BaseField.css';

class BaseField extends Component {
  render() {
    const { options, isHidden, input, label, name, meta: { touched, error }, children, ...custom } = this.props;
    return isHidden
      ? null
      : <Grid container align="center" className="base-container">
          <Grid item sm={12} md={5}>
            <FormLabel htmlFor={name}>
              {label}
            </FormLabel>
          </Grid>
          <Grid item sm={12} md={5}>
            {children}
          </Grid>
        </Grid>;
  }
}

BaseField.propTypes = {
  isHidden: PropTypes.bool,
};

export default BaseField;
