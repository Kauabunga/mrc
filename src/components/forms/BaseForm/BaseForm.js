import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import Button from '../../ui/Button/Button';
import { classes } from './BaseForm.styles';
import { TransitionMotion, spring } from 'react-motion';
import CaptchaField from '../../fields/CaptchaField/CaptchaField';
import { connect } from 'react-redux';

export class BaseForm extends Component {

  state = {
    firstRender: true,
  };

  willEnter() {
    return {
      height: 0,
      opacity: 0,
    };
  }

  willLeave() {
    return {
      height: spring(0),
      opacity: spring(0),
    };
  }

  componentWillReceiveProps(){
    // TODO debounce or wait for initialise from persist
    if(this.state.firstRender){
      setTimeout(() => this.setState({firstRender: false}));
    }
  }

  updateDimensions() {
    let w = window;
    let d = document;
    let documentElement = d.documentElement;
    let body = d.getElementsByTagName('body')[0];
    let width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
    let height = w.innerHeight || documentElement.clientHeight || body.clientHeight;

    this.setState({ width, height });
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  render() {

    const { onSubmit, definition, deadEndMessage, isIncomplete } = this.props;

    const { width } = this.state;

    // TODO pull 960 into global break point
    const maxFieldHeight = width < 960 ? 132 : 72;

    const defaultStyles = definition.map((field, index) => ({
      data: field,
      key: field.name,
      style: {
        height: 0,
        opacity: 0,
      },
    }));

    const getStyles = definition.filter((field, index) => !field.isHidden).map((field, index) => ({
      key: field.name,
      data: field,
      style: {
        // height: spring(maxFieldHeight),
        height: this.state.firstRender ? maxFieldHeight : spring(maxFieldHeight),
        opacity: spring(1),
      },
    }));

    return (
      <div className={classes.container}>
        <form onSubmit={onSubmit}>
          <TransitionMotion
            defaultStyles={defaultStyles}
            styles={getStyles}
            willLeave={this.willLeave}
            willEnter={this.willEnter}
          >
            {styles =>
              <div>
                {styles.map(({ key, style, data }) => {
                  return (
                    <div key={key} style={{ ...style, display: 'flex', background: 'white' }}>
                      <Field {...data} />
                    </div>
                  );
                })}
              </div>}
          </TransitionMotion>

          <Field complete={!isIncomplete} name="__captcha__" component={CaptchaField} />

          <h3>
            {deadEndMessage}
          </h3>

          {isIncomplete
            ? null
            : <div>
                <h3>You are ready to apply.</h3>
                <Link
                  to="/application"
                  tabIndex="-1"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Button aria-label="Next" raised type="submit">
                    Next
                  </Button>
                </Link>
              </div>}
        </form>
      </div>
    );
  }
}

BaseForm.defaultProps = {
  definition: [],
};

BaseForm.propTypes = {
  definition: PropTypes.array.isRequired,
};

export function createForm(formName, selector) {
  return connect(state => ({
    initialValues: selector(state),
  }))(
    reduxForm({
      form: formName,
    })(BaseForm),
  );
}
