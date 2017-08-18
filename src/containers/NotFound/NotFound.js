import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './NotFound.css';
import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class NotFound extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Not Found</title>
        </Helmet>

        <h5>Not found</h5>

      </div>
    );
  }
}

NotFound.defaultProps = {};

NotFound.propTypes = {
  // children: PropTypes.insta
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NotFound));
