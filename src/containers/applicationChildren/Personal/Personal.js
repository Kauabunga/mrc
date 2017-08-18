import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Personal.css';
import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class Personal extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Personal</title>
        </Helmet>
        <div className="Personal">
          <h5>I am personal</h5>
        </div>
      </div>
    );
  }
}

Personal.defaultProps = {};

Personal.propTypes = {
  // children: PropTypes.insta
};

const mapStateToProps = state => ({
  route: state.router,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Personal));
