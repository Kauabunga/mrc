import React from 'react';
import ReactDOM from 'react-dom';
import BaseField from './BaseField';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BaseField classes={{ meta: {} }} />, div);
});
