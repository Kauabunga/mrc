import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Summary.css';
import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class Summary extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Summary</title>
        </Helmet>
        <div className="Summary">
          <h5>I am summary</h5>
        </div>
      </div>
    );
  }
}

Summary.defaultProps = {};

Summary.propTypes = {
  // children: PropTypes.insta
};

const mapStateToProps = state => ({
  route: state.router,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Summary));
