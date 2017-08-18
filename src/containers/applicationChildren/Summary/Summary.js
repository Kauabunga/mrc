import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectApplication } from '../../../global/application/application.selectors';
import Button from '../../../components/ui/Button/Button';

export class Summary extends Component {
  render() {
    const { application } = this.props;
    return (
      <div>
        <Helmet>
          <title>Summary</title>
        </Helmet>
        <div className="Summary">
          <h1>Summary</h1>
          <pre>
            {JSON.stringify(application, null, 2)}
          </pre>
          <Button raised>Complete</Button>
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
  application: selectApplication(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Summary));
