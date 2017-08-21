import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectApplication } from '../../../global/application/application.selectors';
import Button from '../../../components/ui/Button/Button';
import LoanForm from '../../../components/forms/LoanForm/LoanForm';
import { selectKilometresTraveledOptions, selectLoanTermOptions } from '../Loan/Loan.selectors';

export class Summary extends Component {
  render() {
    const { application } = this.props;

    const { kilometresTraveledOptions, loanTermOptions } = this.props;

    // TODO reuse 4 forms with presentation only fields
    // TODO make read only
    return (
      <div>
        <Helmet>
          <title>Summary</title>
        </Helmet>
        <div className="Summary">
          <h1>Summary</h1>
          <pre style={{ whiteSpace: 'pre-wrap' }}>
            {JSON.stringify(application, null, 2)}
          </pre>

          <LoanForm
            onSubmit={() => {}}
            onChange={() => {}}
            kilometresTraveledOptions={kilometresTraveledOptions}
            loanTermOptions={loanTermOptions}
          />
          <Button raised>Complete</Button>
        </div>
      </div>
    );
  }
}

Summary.defaultProps = {
  kilometresTraveledOptions: [],
  loanTermOptions: [],
};

Summary.propTypes = {
  // children: PropTypes.insta
};

const mapStateToProps = state => ({
  application: selectApplication(state),

  kilometresTraveledOptions: selectKilometresTraveledOptions(state),
  loanTermOptions: selectLoanTermOptions(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Summary));
