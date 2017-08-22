import React from 'react';
import ReactDOM from 'react-dom';
import SubmitField from './SubmitField';
import { StaticRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const input = {
    onChange: () => {},
  };
  ReactDOM.render(
    <StaticRouter>
      <SubmitField input={input} meta={{}} />
    </StaticRouter>,
    div,
  );
});
