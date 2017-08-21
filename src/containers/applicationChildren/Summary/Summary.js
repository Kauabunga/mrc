import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectApplication } from '../../../global/application/application.selectors';
import Button from '../../../components/ui/Button/Button';
import LoanForm from '../../../components/forms/LoanForm/LoanForm';
import { selectKilometresTraveledOptions, selectLoanTermOptions } from '../Loan/Loan.selectors';
import { initialize } from 'redux-form';
import { FORM_NAME as LOAN_FORM_NAME } from '../../../components/forms/LoanForm/LoanForm.constants';
import { FORM_NAME as PERSONAL_FORM_NAME } from '../../../components/forms/PersonalForm/PersonalForm.constants';
import PersonalForm from '../../../components/forms/PersonalForm/PersonalForm';
import { selectTitleOptions } from '../Personal/Personal.selectors';

export class Summary extends Component {
  componentWillReceiveProps(nextProps) {
    this.props.actions.initialize(LOAN_FORM_NAME, nextProps.application.loan);
    this.props.actions.initialize(PERSONAL_FORM_NAME, nextProps.application.personal);
  }

  render() {
    const { application } = this.props;

    const { kilometresTraveledOptions, loanTermOptions } = this.props;
    const { titleOptions } = this.props;

    return (
      <div>
        <Helmet>
          <title>Summary</title>
        </Helmet>
        <div className="Summary">
          <h1>Summary</h1>

          <h3>Loan</h3>
          <LoanForm
            onSubmit={() => {}}
            onChange={() => {}}
            readOnly={true}
            kilometresTraveledOptions={kilometresTraveledOptions}
            loanTermOptions={loanTermOptions}
          />

          <h3>Personal</h3>
          <PersonalForm
            onSubmit={() => {}}
            onChange={() => {}}
            readOnly={true}
            titleOptions={titleOptions}
          />

          <Button raised>Complete</Button>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <pre style={{ whiteSpace: 'pre-wrap' }}>
            {JSON.stringify(application, null, 2)}
          </pre>
        </div>
      </div>
    );
  }
}

Summary.defaultProps = {
  // Loan
  kilometresTraveledOptions: [],
  loanTermOptions: [],

  // Personal
  titleOptions: [],
};

Summary.propTypes = {
  // children: PropTypes.insta
};

const mapStateToProps = state => ({
  application: selectApplication(state),

  // Loan
  kilometresTraveledOptions: selectKilometresTraveledOptions(state),
  loanTermOptions: selectLoanTermOptions(state),

  // Personal
  titleOptions: selectTitleOptions(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ initialize }, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Summary));
