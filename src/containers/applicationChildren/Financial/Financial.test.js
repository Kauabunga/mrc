import React from 'react';
import ReactDOM from 'react-dom';
import { Loan } from './Financial';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Loan />, div);
});
