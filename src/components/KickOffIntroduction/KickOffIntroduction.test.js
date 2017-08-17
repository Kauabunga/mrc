import React from 'react';
import ReactDOM from 'react-dom';
import KickOffIntroduction from './KickOffIntroduction';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<KickOffIntroduction />, div);
});
