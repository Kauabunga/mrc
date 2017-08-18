import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoanForm from '../../../components/forms/LoanForm/LoanForm';
import { selectKilometresTraveled } from './Loan.selectors';
import { updateLoanData } from '../../../global/application/application.actions';

export class Loan extends Component {
  handleChange(values) {
    this.props.actions.updateLoanData(values);
  }

  render() {
    const { kilometresTraveled } = this.props;
    return (
      <div>
        <Helmet>
          <title>Loan</title>
        </Helmet>
        <div className="Loan">
          <LoanForm onChange={this.handleChange.bind(this)} kilometresTraveled={kilometresTraveled} />
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
  actions: bindActionCreators({ updateLoanData }, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Loan));
