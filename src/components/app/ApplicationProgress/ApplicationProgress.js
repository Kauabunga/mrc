import React, { Component } from 'react';
import Tabs, { Tab } from 'material-ui/Tabs';
import { routerActions } from 'react-router-redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ApplicationProgress extends Component {
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
    return width > 500 ? ['Loan', 'Personal', 'Financial', 'Summary'] : ['1', '2', '3', '4'];
  }

  updateDimensions() {
    let w = window,
      d = document,
      documentElement = d.documentElement,
      body = d.getElementsByTagName('body')[0],
      width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
      height = w.innerHeight || documentElement.clientHeight || body.clientHeight;

    this.setState({ width: width, height: height });
    // if you are using ES2015 I'm pretty sure you can do this: this.setState({width, height});
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  render() {
    const tabValue = this.getTabValue(this.props.router.location.pathname);
    const labels = this.getTabLabels(this.state.width) || [];
    return (
      <Tabs
        value={tabValue}
        onChange={this.handleChange.bind(this)}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {labels.map((label, index) => <Tab key={index} label={label} />)}
      </Tabs>
    );
  }
}

const mapStateToProps = state => ({
  // TODO should select route path
  router: state.router,
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
