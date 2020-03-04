import createTable from './create-table';

describe('Create protein expression table', () => {
  it('should create table', () => {
    const results = {
      'protein-expression': {
        cells: {
          cellX: { intensity: 1, level: 'low' },
          cellY: { intensity: 2, level: 'medium' },
        },
      },
    };
    const tissues = ['cellX', 'cellY'];
    const result = createTable(results, tissues);

    const expected = {
      class: 'expression__table expression__table-protein',
      tag: 'table',
      children: [
        {
          tag: 'thead',
          children: [{
            tag: 'tr',
            children: [
              { tag: 'th', textContent: 'Tissue' },
              { tag: 'th', textContent: 'Intensity' },
              { tag: 'th', textContent: 'Level' },
            ],
          }],
        },
        {
          tag: 'tbody',
          children: [
            {
              tag: 'tr',
              children: [
                { tag: 'td', textContent: 'cellX' },
                { tag: 'td', textContent: 1 },
                { tag: 'td', textContent: 'low' },
              ],
            },
            {
              tag: 'tr',
              children: [
                { tag: 'td', textContent: 'cellY' },
                { tag: 'td', textContent: 2 },
                { tag: 'td', textContent: 'medium' },
              ],
            },
          ],
        },
      ],
    };
    expect(result[1]).toEqual(expected);
  });
});
