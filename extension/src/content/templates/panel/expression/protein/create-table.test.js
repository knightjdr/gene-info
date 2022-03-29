import createTable from './create-table';

describe('Create protein expression table', () => {
  it('should create table', () => {
    const results = {
      cells: [
        { name: 'cellX', intensity: 1, level: 'low' },
        { name: 'cellY', intensity: 2, level: 'medium' },
        { name: 'cellZ', intensity: 1, level: 'medium' },
      ],
      tissues: [
        { name: 'tissueX', intensity: 1, level: 'low' },
        { name: 'tissueY', intensity: 2, level: 'medium' },
        { name: 'tissueZ', intensity: 4, level: 'high' },
      ],
    };
    const tissues = ['cellX', 'cellY', 'tissueA', 'tissueZ'];
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
            {
              tag: 'tr',
              children: [
                { tag: 'td', textContent: 'tissueA' },
                { tag: 'td', textContent: '-' },
                { tag: 'td', textContent: 'none' },
              ],
            },
            {
              tag: 'tr',
              children: [
                { tag: 'td', textContent: 'tissueZ' },
                { tag: 'td', textContent: 4 },
                { tag: 'td', textContent: 'high' },
              ],
            },
          ],
        },
      ],
    };
    expect(result[1]).toEqual(expected);
  });
});
