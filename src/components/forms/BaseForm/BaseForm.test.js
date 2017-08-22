import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { BaseForm } from './BaseForm';

it('renders without crashing', () => {
  const renderer = new ShallowRenderer();

  const handleSubmit = () => {};
  const definition = [];

  renderer.render(<BaseForm classes={{}} onSubmit={handleSubmit} definition={definition} />);
});
