import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { FormLabel } from 'material-ui/Form';
import BaseFieldInfo from './BaseFieldInfo';
import MediaQuery from 'react-responsive';
import { Motion, spring } from 'react-motion';
import injectSheet from 'react-jss';
import { styles } from './BaseField.styles';
import canUseDOM from 'can-use-dom';

class BaseField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: Math.POSITIVE_INFINITY,
      height: Math.POSITIVE_INFINITY,
    };
  }

  updateDimensions = () => {
    let w = window;
    let d = document;
    let documentElement = d.documentElement;
    let body = d.getElementsByTagName('body')[0];
    let width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
    let height = w.innerHeight || documentElement.clientHeight || body.clientHeight;

    this.setState({ width, height });
  };

  componentWillMount() {
    if (canUseDOM) {
      this.updateDimensions();
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  getMotionStyles(props) {
    const { width } = this.state;

    const { meta: { error } } = props;

    let maxHeight = error ? 140 : 72;
    if (width < 960) {
      maxHeight += 72;
    }

    const isDisplayed = this.isDisplayed(props);
    return {
      opacity: spring(isDisplayed ? 1 : 0),
      height: spring(isDisplayed ? maxHeight : 0),
    };
  }

  isDisplayed(props) {
    const { meta: { warning } } = props;
    return !warning;
  }

  render() {
    const { classes, info, infoContent, label, name, children } = this.props;

    const { meta: { initial, error } } = this.props;

    const baseFieldInfo = <BaseFieldInfo info={info} infoContent={infoContent} />;
    const baseValidation =
      error &&
      <span style={{ color: '#D50000' }}>
        {error}
      </span>;

    const isDisplayed = this.isDisplayed(this.props);
    const motionStyles = this.getMotionStyles(this.props);
    const defaultMotionStyles = {
      opacity: initial ? motionStyles.opacity.val : 0,
      height: initial ? motionStyles.height.val : 0,
    };

    // TODO why is this maxWidth set for responsive mobile?
    // TODO wrap queries into standard UI component
    return (
      <Motion style={motionStyles} defaultStyle={defaultMotionStyles}>
        {({ opacity, height }) =>
          <Grid
            container
            align="center"
            style={{ opacity, height, overflow: isDisplayed ? 'inherit' : 'hidden' }}
            className={classes.container}
          >
            <Grid item xs={12} md={5} style={{ maxWidth: '100%' }}>
              <FormLabel htmlFor={name}>
                {label}
              </FormLabel>
              <MediaQuery query="(max-width: 959px)">
                {baseFieldInfo}
              </MediaQuery>
            </Grid>

            <Grid item xs={12} md={4}>
              {children}
            </Grid>

            <MediaQuery query="(min-width: 960px)">
              <Grid item md={1}>
                {baseFieldInfo}
              </Grid>
            </MediaQuery>

            <Grid item xs={12}>
              {baseValidation}
            </Grid>
          </Grid>}
      </Motion>
    );
  }
}

BaseField.propTypes = {
  info: PropTypes.string,
  infoContent: PropTypes.any,
};

export default injectSheet(styles)(BaseField);
