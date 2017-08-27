import React from 'react';
import ReactDOM from 'react-dom';
import AutocompleteField from './AutocompleteField';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AutocompleteField />, div);
});
