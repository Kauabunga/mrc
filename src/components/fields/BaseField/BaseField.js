import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { FormLabel } from 'material-ui/Form';
import { classes } from './BaseField.styles';

class BaseField extends Component {
  render() {
    const {isHidden, label, name, children} = this.props;

    // TODO why is this maxWidth set for responsive mobile?

    return isHidden
      ? null
      : <Grid container align="center" className={classes.container}>
        <Grid item md={1}>
        </Grid>
        <Grid item xs={12} sm={12} md={5} style={{maxWidth: '100%'}}>
          <FormLabel htmlFor={name}>
            {label}
          </FormLabel>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          {children}
        </Grid>
      </Grid>;
  }
}

BaseField.propTypes = {
  isHidden: PropTypes.bool,
};

export default BaseField;
