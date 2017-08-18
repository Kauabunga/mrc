import React from 'react';
import ReactDOM from 'react-dom';
import LoanForm from './LoanForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoanForm />, div);
});
