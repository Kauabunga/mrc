import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './KickOff.css';
import { Helmet } from 'react-helmet';
import KickOffIntroduction from '../../components/KickOffIntroduction';
import PreliminaryInformationForm from '../../components/Forms/PreliminaryInformationForm';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAPIData } from './KickOff.actions';
import { selectEmploymentStatuses, selectProfessions, selectPartyTypes, selectProducts } from './KickOff.selectors';

class KickOff extends Component {
  handleSubmit(values) {
    // print the form values to the console
    console.log(values);
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
  actions: bindActionCreators({ getAPIData }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(KickOff);
