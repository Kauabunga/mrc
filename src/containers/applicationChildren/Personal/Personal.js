import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { initialize } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PersonalForm from '../../../components/forms/PersonalForm/PersonalForm';
import { selectTitleOptions } from './Personal.selectors';
import { selectPersonalData } from '../../../global/application/application.selectors';
import { FORM_NAME } from '../../../components/forms/PersonalForm/PersonalForm.constants';
import { updatePersonalData } from '../../../global/application/application.actions';

export class Personal extends Component {
  componentWillReceiveProps(nextProps) {
    this.props.actions.initialize(FORM_NAME, nextProps.initialValues);
  }

  handleSubmit() {}

  handleChange(values) {
    this.props.actions.updatePersonalData(values);
  }

  render() {
    const { titleOptions } = this.props;
    return (
      <div>
        <Helmet>
          <title>Personal</title>
        </Helmet>

        <PersonalForm
          onChange={this.handleChange.bind(this)}
          onSubmit={this.handleSubmit.bind(this)}
          titleOptions={titleOptions}
        />
      </div>
    );
  }
}

Personal.defaultProps = {};

Personal.propTypes = {
  // children: PropTypes.insta
};

const mapStateToProps = state => ({
  initialValues: selectPersonalData(state),

  titleOptions: selectTitleOptions(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ updatePersonalData, initialize }, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Personal));
