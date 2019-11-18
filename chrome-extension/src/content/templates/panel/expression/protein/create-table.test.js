import createTable from './create-table';
import minifyHTML from '../../../../../test-utils/minify-html';

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
    const result = minifyHTML(createTable(results, tissues));

    const expected = minifyHTML(`
      <p class="details-description">
        Protein expression values are reported as the log<sub>10</sub>
        normalized MS1 iBAQ intensity.
      </p>
      <table class="expression__table expression__table-protein">
        <thead>
          <tr>
            <th>Tissue</th>
            <th>Intensity</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>cellX</td><td>1</td><td>low</td></tr>
          <tr><td>cellY</td><td>2</td><td>medium</td></tr>
        </tbody>
      </table>
    `);
    expect(result).toBe(expected);
  });
});
