import React from 'react';
import ReactDOM from 'react-dom';
import PreliminaryInformationForm from './PreliminaryInformationForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PreliminaryInformationForm />, div);
});
