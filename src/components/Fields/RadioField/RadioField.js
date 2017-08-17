import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel } from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';
import BaseField from '../BaseField';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {},
});

// TODO create UI Select Input component
// TODO create UI Label component

class RadioField extends Component {
  render() {
    const { options, isHidden, input, label, name, meta: { touched, error }, children, ...custom } = this.props;
    return isHidden
      ? null
      : <BaseField {...this.props}>
          <RadioGroup
            row
            selectedValue={input.value}
            onChange={(event, value) => {
              console.log(event);
              input.onChange(value);
            }}
            {...input}
            {...custom}
          >
            {options.map(option =>
              <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />,
            )}
          </RadioGroup>
        </BaseField>;
  }
}

RadioField.propTypes = {
  options: PropTypes.array.isRequired,
};

export default withStyles(styles)(RadioField);
