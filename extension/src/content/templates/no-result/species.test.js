import createSpeciesNode from './species';

jest.mock('../../../config', () => ({
  species: ['species 1', 'species 2', 'species 3'],
}));

describe('Species select node', () => {
  it('should create select', () => {
    const selected = 'species 2';

    const expected = {
      children: [
        {
          tag: 'option',
          textContent: 'species 1',
          value: 'species 1',
        },
        {
          selected: true,
          tag: 'option',
          textContent: 'species 2',
          value: 'species 2',
        },
        {
          tag: 'option',
          textContent: 'species 3',
          value: 'species 3',
        },
      ],
      class: 'slim-select-style',
      id: 'species_select',
      tag: 'select',
    };
    expect(createSpeciesNode(selected)).toEqual(expected);
  });
});
