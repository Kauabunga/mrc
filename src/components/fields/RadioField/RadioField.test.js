import React from 'react';
import ReactDOM from 'react-dom';
import RadioField from './RadioField';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RadioField />, div);
});
