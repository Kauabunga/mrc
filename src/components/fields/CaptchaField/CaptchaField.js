import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';

class CaptchaField extends Component {

  captchaRef = null;

  componentWillReceiveProps(nextProps) {
    const {input, complete} = nextProps;
    if (!input.value && complete && this.captchaRef) {
      console.log('Executing captcha', nextProps);
      this.captchaRef.execute();
    }
  }

  handleChange(value) {
    const {input} = this.props;
    console.log('Captcha response', value);
    return input.onChange(value);
  }

  render() {
    return (
      <ReCAPTCHA
        ref={(captchaRef) => this.captchaRef = captchaRef}
        size="invisible"
        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
        onChange={this.handleChange.bind(this)}
      />
    );
  }
}

CaptchaField.propTypes = {
  complete: PropTypes.bool.isRequired,
};

export default CaptchaField;
