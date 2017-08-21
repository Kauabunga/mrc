import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { classes } from './BaseForm.styles';
import CaptchaField from '../../fields/CaptchaField/CaptchaField';
import { connect } from 'react-redux';

export class BaseForm extends Component {
  render() {
    const { onSubmit, definition, deadEndMessage, isIncomplete } = this.props;

    const fields = definition.map((definition, index) => <Field key={index} {...definition} />);

    return (
      <div className={classes.container}>
        <form onSubmit={onSubmit}>
          {fields}

          <Field complete={!isIncomplete} name="__captcha__" component={CaptchaField} />

          <h3>
            {deadEndMessage}
          </h3>
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
    // TODO no longer need this?
    initialValues: selector(state),
  }))(
    reduxForm({
      form: formName,
    })(BaseForm),
  );
}
