import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { PreliminaryInformationForm } from './BaseForm';

it('renders without crashing', () => {
  const renderer = new ShallowRenderer();

  const handleChange = () => {};
  const formValues = {};

  const employmentStatuses = [];
  const professions = [];
  const partyTypes = [];
  const products = [];

  renderer.render(
    <PreliminaryInformationForm
      onChange={handleChange}
      formValues={formValues}
      employmentStatuses={employmentStatuses}
      professions={professions}
      partyTypes={partyTypes}
      products={products}
    />,
  );
});
