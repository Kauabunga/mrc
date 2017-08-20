import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel } from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';
import BaseField from '../BaseField/BaseField';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {},
});

// TODO create UI Select Input component
// TODO create UI Label component

class RadioField extends Component {
  render() {
    const { options, input } = this.props;
    return (
      <BaseField {...this.props}>
        <RadioGroup
          row
          selectedValue={input && input.value}
          onChange={(event, value) => input.onChange(value)}
          {...input}
        >
          {options.map(option =>
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio />}
              label={option.label}
            />,
          )}
        </RadioGroup>
      </BaseField>
    );
  }
}

RadioField.propTypes = {
  options: PropTypes.array.isRequired,
};

export default withStyles(styles)(RadioField);
