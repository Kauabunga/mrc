import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Loan } from './Loan';

it('renders without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Loan />);
});
