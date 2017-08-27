import SelectField from '../../fields/SelectField/SelectField';
import AutocompleteField from '../../fields/AutocompleteField/AutocompleteField';

/*
 * DEFINITION
 */

export function getDefinition(options) {
  const { titleOptions } = options;

  return [
    {
      name: 'title',
      label: 'Title',
      component: SelectField,
      options: titleOptions,
    },
    {
      name: 'address',
      label: 'Address',
      component: AutocompleteField,
    },
  ];
}
