import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../ui/Button/Button';
import BaseField from '../BaseField/BaseField';

class SubmitField extends Component {
  isDisplayed(props) {
    const { meta: { warning } } = props;
    return !warning;
  }

  render() {
    // If visible set as true
    // If not visible set as false

    const { input } = this.props;

    const isDisplayed = this.isDisplayed(this.props);
    if (isDisplayed) {
      input.onChange(true);
    } else {
      input.onChange(false);
    }

    return (
      <BaseField {...this.props}>
        <h3>You are ready to apply.</h3>
        <Link to="/application" tabIndex="-1" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button aria-label="Next" raised type="submit">
            Next
          </Button>
        </Link>
      </BaseField>
    );
  }
}

export default SubmitField;
