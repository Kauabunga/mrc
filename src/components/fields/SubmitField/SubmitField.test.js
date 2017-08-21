import React from 'react';
import ReactDOM from 'react-dom';
import SubmitField from './SubmitField';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SubmitField />, div);
});
