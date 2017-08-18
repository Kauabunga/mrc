import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/Info';
import ToolTip from 'react-portal-tooltip'
import { classes } from './BaseField.styles';

let iconCount = 0;

class BaseField extends Component {

  state = {
    isTooltipActive: false
  };

  showTooltip() {
    this.setState({isTooltipActive: true})
  };

  hideTooltip() {
    this.setState({isTooltipActive: false})
  };

  iconUuid = `info-icon-${iconCount++}`;

  baseFieldInfoGroup = 'baseFieldInfoGroup';

  render() {
    const {info} = this.props;

    // TODO why is this maxWidth set for responsive mobile?
    console.log('rendering');

    return !info ? null : (
      <div className={classes.infoContainer}>
        <IconButton
          id={this.iconUuid}
          group={this.baseFieldInfoGroup}
          aria-label="Info"
          onFocus={this.showTooltip.bind(this)}
          onBlur={this.hideTooltip.bind(this)}
          onMouseEnter={this.showTooltip.bind(this)}
          onMouseLeave={this.hideTooltip.bind(this)}
        >
          <InfoIcon/>
        </IconButton>
        <ToolTip
          active={this.state.isTooltipActive}
          position="right"
          arrow="center"
          parent={`#${this.iconUuid}`}
        >
          <div>
            <p>{info}</p>
          </div>
        </ToolTip>
      </div>
    )
  }
}

BaseField.propTypes = {
  isHidden: PropTypes.bool,
};

export default BaseField;
