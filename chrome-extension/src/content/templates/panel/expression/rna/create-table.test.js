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
    const result = minifyHTML(createTable(results, tissues));

    const expected = minifyHTML(`
      <p class="details-description">
        RNA expression values are reported as transcripts
        per million (TPM). See
        <a
          href="https://www.proteinatlas.org/about/assays+annotation"
          rel="noopener noreferrer"
          target="_blank"
        >
          HPA RNA-seq data
        </a>
        for more.
      </p>
      <table class="expression__table">
        <thead>
          <tr>
            <th>Tissue</th>
            <th>TPM</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>cellX</td><td>5</td><td>low</td></tr>
          <tr><td>cellY</td><td>25</td><td>medium</td></tr>
        </tbody>
      </table>
    `);
    expect(result).toBe(expected);
  });
});
