import React from 'react';
import ReactDOM from 'react-dom';
import Loan from './Loan';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Loan />, div);
});
