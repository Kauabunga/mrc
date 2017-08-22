import React from 'react';
import ReactDOM from 'react-dom';
import Toolbar from './Toolbar';
import { StaticRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <StaticRouter>
      <Toolbar />
    </StaticRouter>,
    div,
  );
});
