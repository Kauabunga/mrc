import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { LoanForm } from './LoanForm';

it('renders without crashing', () => {
  const renderer = new ShallowRenderer();
  const handleChange = () => {};
  renderer.render(<LoanForm onChange={handleChange} />);
});
