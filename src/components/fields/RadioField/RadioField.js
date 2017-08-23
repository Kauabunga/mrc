import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel } from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';
import BaseField from '../BaseField/BaseField';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {},
});

// TODO create UI Radio Input component

class RadioField extends Component {
  isDisplayed(props) {
    const { meta: { warning } } = props;
    return !warning;
  }

  render() {
    const { options, input } = this.props;
    const isDisplayed = this.isDisplayed(this.props);

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
              control={<Radio tabIndex={isDisplayed ? '0' : '-1'} />}
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
