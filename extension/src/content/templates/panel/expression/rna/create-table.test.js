import createTable from './create-table';

describe('Create RNA expression table', () => {
  it('should create table', () => {
    const results = {
      cells: [
        { name: 'cellX', value: 5 },
        { name: 'cellY', value: 25 },
      ],
      tissues: [
        { name: 'tissueX', value: 5 },
        { name: 'tissueY', value: 25 },
      ],
    };
    const tissues = ['cellX', 'cellY', 'tissueA', 'tissueY'];
    const result = createTable(results, tissues);

    const expected = {
      class: 'expression__table',
      tag: 'table',
      children: [
        {
          tag: 'thead',
          children: [{
            tag: 'tr',
            children: [
              { tag: 'th', textContent: 'Tissue' },
              { tag: 'th', textContent: 'TPM' },
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
                { tag: 'td', textContent: 5 },
                { tag: 'td', textContent: 'low' },
              ],
            },
            {
              tag: 'tr',
              children: [
                { tag: 'td', textContent: 'cellY' },
                { tag: 'td', textContent: 25 },
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
                { tag: 'td', textContent: 'tissueY' },
                { tag: 'td', textContent: 25 },
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
