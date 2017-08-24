import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Root } from './Root';
import { StaticRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render(
    <StaticRouter>
      <Root classes={{}} />
    </StaticRouter>,
  );
});
