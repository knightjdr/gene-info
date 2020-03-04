import createTable from './create-table';
import minifyHTML from '../../../../../test-utils/minify-html';

describe('Create RNA expression table', () => {
  it('should create table', () => {
    const results = {
      'rna-expression': {
        cells: {
          cellX: 5,
          cellY: 25,
        },
      },
    };
    const tissues = ['cellX', 'cellY'];
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
          ],
        },
      ],
    };
    expect(result[1]).toEqual(expected);
  });
});
