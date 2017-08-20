import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Personal } from './Personal';

it('renders without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Personal />);
});
