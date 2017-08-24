import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoanForm from '../../../components/forms/LoanForm/LoanForm';
import { selectKilometresTraveledOptions, selectLoanTermOptions } from './Loan.selectors';
import { updateLoanData } from '../../../global/application/application.actions';

export class Loan extends Component {
  handleSubmit() {}

  handleChange(values) {
    this.props.actions.updateLoanData(values);
  }

  render() {
    const { kilometresTraveledOptions, loanTermOptions } = this.props;
    return (
      <div>
        <Helmet>
          <title>Loan</title>
        </Helmet>
        <div className="Loan">
          <LoanForm
            onChange={this.handleChange.bind(this)}
            onSubmit={this.handleSubmit.bind(this)}
            readOnly={false}
            loanTermOptions={loanTermOptions}
            kilometresTraveledOptions={kilometresTraveledOptions}
          />
        </div>
      </div>
    );
  }
}

Loan.defaultProps = {
  kilometresTraveledOptions: [],
  loanTermOptions: [],
};

Loan.propTypes = {
  kilometresTraveledOptions: PropTypes.array.isRequired,
  loanTermOptions: PropTypes.array.isRequired,

  readOnly: PropTypes.bool,
};

const mapStateToProps = state => ({
  kilometresTraveledOptions: selectKilometresTraveledOptions(state),
  loanTermOptions: selectLoanTermOptions(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ updateLoanData }, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Loan));
