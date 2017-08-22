import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { selectHasHydrated } from '../../../global/persist/persist.selectors';
import SummaryField from '../../fields/SummaryField/SummaryField';
import injectSheet from 'react-jss';
import { styles } from './BaseForm.styles';

export class BaseForm extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.hasHydrated;
  }

  render() {
    const { classes, onSubmit, hasHydrated, readOnly, definition } = this.props;

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

    const fields = hasHydrated
      ? readOnlyFields.map((definition, index) => <Field key={index} {...definition} />)
      : [];

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
    hasHydrated: selectHasHydrated(state),
  }))(
    reduxForm({
      form: formName,
    })(injectSheet(styles)(BaseForm)),
  );
}
