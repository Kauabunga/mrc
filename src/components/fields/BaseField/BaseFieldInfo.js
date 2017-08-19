import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/Info';
import ToolTip from 'react-portal-tooltip';
import { classes } from './BaseField.styles';

let iconCount = 0;

class BaseField extends Component {
  state = {
    isTooltipActive: false,
  };

  showTooltip() {
    this.setState({ isTooltipActive: true });
  }

  hideTooltip() {
    this.setState({ isTooltipActive: false });
  }

  iconUuid = `info-icon-${iconCount++}`;

  baseFieldInfoGroup = 'baseFieldInfoGroup';

  render() {
    const { info, infoContent } = this.props;

    // TODO why is this maxWidth set for responsive mobile?
    return !info && !infoContent
      ? null
      : <div className={classes.infoContainer}>
          <IconButton
            id={this.iconUuid}
            aria-label="Info"
            tabIndex="-1"
            onFocus={this.showTooltip.bind(this)}
            onBlur={this.hideTooltip.bind(this)}
            onMouseMove={this.showTooltip.bind(this)}
            onMouseEnter={this.showTooltip.bind(this)}
            onMouseLeave={this.hideTooltip.bind(this)}
          >
            <InfoIcon />
          </IconButton>
          <ToolTip
            style={{ style: { padding: 20, 'margin-right': 20 }, arrowStyle: {} }}
            group={this.baseFieldInfoGroup}
            active={this.state.isTooltipActive}
            parent={`#${this.iconUuid}`}
          >
            <div>
              {(infoContent && infoContent()) ||
                <p>
                  {info}
                </p>}
            </div>
          </ToolTip>
        </div>;
  }
}

BaseField.propTypes = {
  info: PropTypes.string,
  infoContent: PropTypes.any,
};

export default BaseField;
