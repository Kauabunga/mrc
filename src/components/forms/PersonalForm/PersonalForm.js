import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import SelectField from '../../fields/SelectField/SelectField';
import { connect } from 'react-redux';
import { FORM_NAME } from './PersonalForm.constants';
import { selectPersonalData } from '../../../global/application/application.selectors';

export class PersonalForm extends Component {
  isIncomplete(formValues) {
    // TODO implement
    return !!formValues;
  }

  render() {
    const { handleSubmit, titleOptions, formValues } = this.props;

    const definition = [
      {
        // TODO names and labels should be pulled from redux layer somewhere and reused in summary
        name: 'title',
        label: 'Title',
        component: SelectField,
        options: titleOptions,
      },
    ];

    const isIncomplete = this.isIncomplete(formValues);

    const fields = definition.map((field, index) => <Field key={index} {...field} />);

    return (
      <div>
        <form onSubmit={handleSubmit}>
          {fields}
          {isIncomplete ? null : <h3>Complete</h3>}
        </form>
      </div>
    );
  }
}

PersonalForm.defaultProps = {
  titleOptions: [],
};

PersonalForm.propTypes = {
  onChange: PropTypes.func.isRequired,

  titleOptions: PropTypes.array.isRequired,
};

const selector = formValueSelector(FORM_NAME);

export default connect(state => ({
  initialValues: selectPersonalData(state),
  // TODO can just select entire form state?
  formValues: {
    title: selector(state, 'title'),
  },
}))(
  reduxForm({
    form: FORM_NAME,
  })(PersonalForm),
);
