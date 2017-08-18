import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import './Loan.css';
import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoanForm from '../../../components/forms/LoanForm/LoanForm';
import { selectKilometresTraveled } from './Loan.selectors';

export class Loan extends Component {
  render() {
    const {kilometresTraveled} = this.props;
    return (
      <div>
        <Helmet>
          <title>Loan</title>
        </Helmet>
        <div className="Loan">
          <LoanForm kilometresTraveled={kilometresTraveled}/>
        </div>
      </div>
    );
  }
}

Loan.defaultProps = {
  kilometresTraveled: [],
};

Loan.propTypes = {
  kilometresTraveled: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  kilometresTraveled: selectKilometresTraveled(state),
  route: state.router,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Loan));
