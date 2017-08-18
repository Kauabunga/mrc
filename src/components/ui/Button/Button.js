import React, { Component } from 'react';
import { default as MaterialButton } from 'material-ui/Button';

class Button extends Component {
  render() {
    return (
      <MaterialButton {...this.props}>
        {this.props.children}
      </MaterialButton>
    );
  }
}

export default Button;
