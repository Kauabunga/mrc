import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Application } from './Application';


it('renders without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Application />);
});
