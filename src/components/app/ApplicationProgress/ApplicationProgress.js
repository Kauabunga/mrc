import React, { Component } from 'react';
import Tabs, { Tab } from 'material-ui/Tabs';
import { routerActions } from 'react-router-redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import canUseDOM from 'can-use-dom';

export class ApplicationProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: Math.POSITIVE_INFINITY,
      height: Math.POSITIVE_INFINITY,
    };
  }

  applicationRoutes = [
    '/application/loan',
    '/application/personal',
    '/application/financial',
    '/application/summary',
  ];

  handleChange(event, value) {
    this.props.actions.push(this.applicationRoutes[value]);
  }

  getTabValue(route) {
    return this.applicationRoutes.indexOf(route) || 0;
  }

  getTabLabels(width) {
    return width > 440 ? ['Loan', 'Personal', 'Financial', 'Summary'] : ['1', '2', '3', '4'];
  }

  updateDimensions = () => {
    let w = window;
    let d = window.document;
    let documentElement = d.documentElement;
    let body = d.getElementsByTagName('body')[0];
    let width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
    let height = w.innerHeight || documentElement.clientHeight || body.clientHeight;

    this.setState({ width, height });
  };

  componentWillMount() {
    if (canUseDOM) {
      this.updateDimensions();
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    const tabValue = this.getTabValue(this.props.pathname);
    const labels = this.getTabLabels(this.state.width);
    return (
      <div style={{ minHeight: 48 }}>
        <Tabs
          value={tabValue}
          onChange={this.handleChange.bind(this)}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {labels.map((label, index) => <Tab key={index} label={label} />)}
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pathname: state.router.location && state.router.location.pathname,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      ...routerActions,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationProgress);
