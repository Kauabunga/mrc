import React from 'react';
import ReactDOM from 'react-dom';
import { ApplicationProgress } from './ApplicationProgress';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ApplicationProgress classes={{}} />, div);
});
