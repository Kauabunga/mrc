import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';
import { classes } from './BaseField.styles';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import Tooltip from '../../ui/Tooltip/Tooltip';

class BaseField extends Component {
  render() {
    const {
      options,
      tooltip,
      isHidden,
      input,
      label,
      name,
      meta: { touched, error },
      children,
      ...custom
    } = this.props;

    // TODO why is this maxWidth set for responsive mobile?

    return isHidden
      ? null
      : <Grid container align="center" className={classes.container}>
          <Grid item xs={12} sm={12} md={5} style={{ maxWidth: '100%' }}>
            <FormLabel htmlFor={name}>
              {label}
            </FormLabel>
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            {children}
          </Grid>
        </Grid>;
  }
}

BaseField.propTypes = {
  isHidden: PropTypes.bool,
};

export default BaseField;
