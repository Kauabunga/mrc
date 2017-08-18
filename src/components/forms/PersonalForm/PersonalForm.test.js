import React from 'react';
import ReactDOM from 'react-dom';
import PersonalForm from './PersonalForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PersonalForm />, div);
});
