import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoanForm from '../../../components/forms/LoanForm/LoanForm';
import { selectKilometresTraveledOptions } from './Loan.selectors';
import { updateLoanData } from '../../../global/application/application.actions';
import { initialize } from 'redux-form';
import { FORM_NAME } from '../../../components/forms/LoanForm/LoanForm.constants';
import { selectLoanData } from '../../../global/application/application.selectors';

export class Loan extends Component {
  componentWillReceiveProps(nextProps) {
    this.props.actions.initialize(FORM_NAME, nextProps.initialValues);
  }

  handleChange(values) {
    this.props.actions.updateLoanData(values);
  }

  render() {
    const { kilometresTraveledOptions } = this.props;
    return (
      <div>
        <Helmet>
          <title>Loan</title>
        </Helmet>
        <div className="Loan">
          <LoanForm
            onChange={this.handleChange.bind(this)}
            kilometresTraveledOptions={kilometresTraveledOptions}
          />
        </div>
      </div>
    );
  }
}

Loan.defaultProps = {
  kilometresTraveledOptions: [],
};

Loan.propTypes = {
  kilometresTraveledOptions: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  initialValues: selectLoanData(state),
  kilometresTraveledOptions: selectKilometresTraveledOptions(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ updateLoanData, initialize }, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Loan));
