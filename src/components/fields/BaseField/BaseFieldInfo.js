import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/Info';
import ToolTip from 'react-portal-tooltip';
import injectSheet from 'react-jss';
import { styles } from './BaseField.styles';

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
    const { classes, position, info, infoContent } = this.props;

    const tooltipStyles = {
      style: {
        width: 320,
        maxWidth: 'calc(100% - 70px)',
        padding: 20,
        'margin-right': 20,
      },
      arrowStyle: {},
    };

    // TODO why is this maxWidth set for responsive mobile?
    return (
      <div className={classes.infoContainer}>
        {!info && !infoContent
          ? null
          : <div>
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
                style={tooltipStyles}
                position={position}
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
            </div>}
      </div>
    );
  }
}

BaseField.defaultProps = {
  position: 'right',
};

BaseField.propTypes = {
  info: PropTypes.string,
  infoContent: PropTypes.any,
  position: PropTypes.string,
};

export default injectSheet(styles)(BaseField);
