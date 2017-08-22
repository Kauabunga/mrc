import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { App } from './App';
import { StaticRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render(
    <StaticRouter>
      <App classes={{}} />
    </StaticRouter>,
  );
});
