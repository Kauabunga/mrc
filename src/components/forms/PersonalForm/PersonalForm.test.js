import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { PersonalForm } from './PersonalForm';

it('renders without crashing', () => {
  const renderer = new ShallowRenderer();
  const handleOnChange = () => {};
  renderer.render(<PersonalForm onChange={handleOnChange} />);
  const result = renderer.getRenderOutput();
});
