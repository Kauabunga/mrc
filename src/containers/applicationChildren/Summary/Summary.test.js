import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Summary } from './Summary';

it('renders without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Summary />);
});
