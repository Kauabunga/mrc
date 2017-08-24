import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import SummaryField from '../../fields/SummaryField/SummaryField';
import injectSheet from 'react-jss';
import { styles } from './BaseForm.styles';
import { compose } from 'redux';

export class BaseForm extends Component {
  render() {
    const { classes, onSubmit, readOnly, definition } = this.props;

    // When fields are read only set them all to use the SummaryField field
    const readOnlyFields = definition.map(
      definition =>
        readOnly
          ? Object.assign({}, definition, {
              component: SummaryField,
              originalComponent: definition.component,
            })
          : definition,
    );

    // TODO decorate warning functions by returning standard const warning IS_HIDDEN string
    const decoratedFields = readOnlyFields.map((definition, index) =>
      Object.assign({}, definition, { canHide: !!definition.warn && definition.warn.length > 0 }),
    );

    const fields = decoratedFields.map((definition, index) =>
      <Field key={definition.name} index={index} {...definition} />,
    );

    return (
      <div className={classes.baseFormContainer}>
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
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export function createForm(formName, selector) {
  return compose(
    connect(state => ({
      initialValues: selector(state),
    })),
    reduxForm({ form: formName }),
    injectSheet(styles),
  )(BaseForm);
}
