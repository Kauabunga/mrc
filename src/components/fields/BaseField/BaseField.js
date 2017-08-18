import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { FormLabel } from 'material-ui/Form';
import { classes } from './BaseField.styles';
import BaseFieldInfo from './BaseFieldInfo';
import MediaQuery from 'react-responsive';


class BaseField extends Component {

  render() {
    const {isHidden, info, label, name, children} = this.props;

    // TODO why is this maxWidth set for responsive mobile?
    // TODO wrap queries into standard UI component
    return isHidden
      ? null
      : <Grid container align="center" className={classes.container}>
        <Grid item xs={12} sm={12} md={5} style={{maxWidth: '100%'}}>
          <FormLabel htmlFor={name}>
            {label}
          </FormLabel>
          <MediaQuery query='(max-width: 959px)'>
              <BaseFieldInfo info={info} />
          </MediaQuery>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          {children}
        </Grid>
        <MediaQuery query='(min-width: 960px)'>
          <Grid item md={1}>
            <BaseFieldInfo info={info} />
          </Grid>
        </MediaQuery>
      </Grid>;
  }
}

BaseField.propTypes = {
  isHidden: PropTypes.bool,
};

export default BaseField;
