import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import KickOffIntroduction from '../../components/app/KickOffIntroduction/KickOffIntroduction';
import PreliminaryInformationForm from '../../components/forms/PreliminaryInformationForm/PreliminaryInformationForm';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectEmploymentStatuses, selectProfessions, selectPartyTypes, selectProducts } from './KickOff.selectors';
import { updateKickOffData } from '../../global/application/application.actions';

class KickOff extends Component {
  handleSubmit(values) {
    console.log('KickOff handleSubmit', values);
  }

  handleChange(values) {
    this.props.actions.updateKickOffData(values);
  }

  render() {
    const { employmentStatuses, professions, products, partyTypes } = this.props;
    return (
      <div>
        <Helmet>
          <title>Kick off</title>
        </Helmet>

        <KickOffIntroduction />

        <PreliminaryInformationForm
          onChange={this.handleChange.bind(this)}
          professions={professions}
          products={products}
          partyTypes={partyTypes}
          employmentStatuses={employmentStatuses}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

KickOff.defaultProps = {
  employmentStatuses: [],
  professions: [],
  partyTypes: [],
  products: [],
};

KickOff.propTypes = {
  employmentStatuses: PropTypes.array.isRequired,
  professions: PropTypes.array.isRequired,
  partyTypes: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  employmentStatuses: selectEmploymentStatuses(state),
  professions: selectProfessions(state),
  partyTypes: selectPartyTypes(state),
  products: selectProducts(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ updateKickOffData }, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(KickOff));
