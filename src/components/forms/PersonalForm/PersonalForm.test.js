import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { PersonalForm } from './PersonalForm';

it('renders without crashing', () => {
  const renderer = new ShallowRenderer();
  const handleChange = () => {};
  const handleSubmit = () => {};
  renderer.render(<PersonalForm onChange={handleChange} onSubmit={handleSubmit} />);
});
