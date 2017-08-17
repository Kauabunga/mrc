import React from 'react';
import ReactDOM from 'react-dom';
import KickOff from './KickOff';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<KickOff />, div);
});
