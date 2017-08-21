import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { classes } from './BaseForm.styles';
import { connect } from 'react-redux';

export class BaseForm extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { onSubmit, definition } = this.props;

    const fields = definition.map((definition, index) => <Field key={index} {...definition} />);

    return (
      <div className={classes.container}>
        <form onSubmit={onSubmit}>
          {fields}
          {/*<Field complete={!isIncomplete} name="__captcha__" component={CaptchaField} />*/}
        </form>
      </div>
    );
  }
}

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
