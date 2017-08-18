import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Financial.css';
import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class Financial extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Financial</title>
        </Helmet>
        <div className="Financial">
          <h5>I am financial</h5>
        </div>
      </div>
    );
  }
}

Financial.defaultProps = {};

Financial.propTypes = {
  // children: PropTypes.insta
};

const mapStateToProps = state => ({
  route: state.router,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Financial));
