import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Loan.css';
import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Loan extends Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Loan</title>
        </Helmet>
        <div className="Loan">
          <h5>I am loan</h5>
          <Link to="/">home</Link>
        </div>
      </div>
    );
  }
}

Loan.defaultProps = {};

Loan.propTypes = {
  // children: PropTypes.insta
};

const mapStateToProps = state => ({
  route: state.router
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Loan));
