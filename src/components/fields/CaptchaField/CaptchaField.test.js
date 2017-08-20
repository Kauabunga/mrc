import React from 'react';
import ReactDOM from 'react-dom';
import CaptchaField from './CaptchaField';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CaptchaField />, div);
});
