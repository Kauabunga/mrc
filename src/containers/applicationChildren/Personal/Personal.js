import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import PersonalForm from '../../../components/forms/PersonalForm/PersonalForm';
import { selectTitleOptions } from './Personal.selectors';
import { updatePersonalData } from '../../../global/application/application.actions';

export class Personal extends Component {
  handleSubmit(event) {
    event.preventDefault();
  }

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

Personal.propTypes = {};

const mapStateToProps = state => ({
  titleOptions: selectTitleOptions(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ updatePersonalData }, dispatch),
});

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Personal);
