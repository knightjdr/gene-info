import config from '../../../config';

const createSelectNode = selected => ({
  children: config.species.map((specie) => {
    const option = {
      tag: 'option',
      textContent: specie,
      value: specie,
    };
    if (specie === selected) {
      option.selected = true;
    }
    return option;
  }),
  class: 'slim-select-style',
  id: 'species_select',
  tag: 'select',
});

export default createSelectNode;
