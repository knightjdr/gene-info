import filLTableRow from './fill-table-row';

const createBody = (report, tissues) => (
  tissues.map(tissue => (
    filLTableRow(tissue, report['rna-expression'])
  )).join('')
);

const createTable = (report, tissues) => (`
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
      ${createBody(report, tissues)}
    </tbody>
  </table>
`);

export default createTable;
