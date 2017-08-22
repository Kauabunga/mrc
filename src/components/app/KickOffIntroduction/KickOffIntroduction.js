import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { styles } from './KickOffIntroduction.styles';

class KickOffIntroduction extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.introductionRoot}>
        <p>
          On average it takes 15 minutes of less to complete the Application. You can expect a
          response on your application within one business day.
        </p>
        <p>Only allowing Finance Applications on Mercedes-Benz Vehicles.</p>
      </div>
    );
  }
}

export default injectSheet(styles)(KickOffIntroduction);
