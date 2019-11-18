import filLTableRow from './fill-table-row';

const createBody = (report, tissues) => (
  tissues.map(tissue => (
    filLTableRow(tissue, report['protein-expression'])
  )).join('')
);

const createTable = (report, tissues) => (`
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
      ${createBody(report, tissues)}
    </tbody>
  </table>
`);

export default createTable;
