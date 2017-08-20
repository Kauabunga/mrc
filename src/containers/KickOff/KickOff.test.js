import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { KickOff } from './KickOff';

it('renders without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<KickOff />);
});
