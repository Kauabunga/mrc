import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ApplicationProgress from '../../components/app/ApplicationProgress/ApplicationProgress';
import injectSheet from 'react-jss';
import { styles } from './Application.styles';

export class Application extends Component {
  render() {
    const { classes, children } = this.props;
    return (
      <div>
        <Helmet>
          <title>Application</title>
        </Helmet>

        <ApplicationProgress />

        <div className={classes.container}>
          {children}
        </div>
      </div>
    );
  }
}

Application.defaultProps = {};

Application.propTypes = {
  // children: PropTypes.insta
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Application)),
);
