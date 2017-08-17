import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './KickOff.css';
import { Helmet } from 'react-helmet';
import KickOffIntroduction from '../../components/KickOffIntroduction';
import PreliminaryInformationForm from '../../components/Forms/PreliminaryInformationForm';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAPIData } from './KickOff.actions';
import { selectEmploymentStatuses } from './KickOff.selectors';

class KickOff extends Component {

  handleSubmit(values) {
    // print the form values to the console
    console.log(values);
  }

  render() {
    const {employmentStatuses} = this.props;
    return (
      <div>
        <Helmet>
          <title>Kick off</title>
        </Helmet>

        <KickOffIntroduction />

        <PreliminaryInformationForm employmentStatuses={employmentStatuses}
                                    onSubmit={this.handleSubmit}/>

      </div>
    );
  }
}

KickOff.defaultProps = {
  employmentStatuses: [],
};

KickOff.propTypes = {
  employmentStatuses: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  employmentStatuses: selectEmploymentStatuses(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({getAPIData}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(KickOff);
