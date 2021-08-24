import filLTableRow from './fill-table-row';

const createBody = (report, tissues) => (
  tissues.map(tissue => (
    filLTableRow(tissue, report['protein-expression'])
  ))
);

const createTable = (report, tissues) => ([
  {
    class: 'details-description',
    tag: 'p',
    children: [
      { tag: 'span', textContent: 'Protein expression values are reported as the log' },
      { tag: 'sub', textContent: 10 },
      { tag: 'span', textContent: ' normalized MS1 iBAQ intensity.' },
    ],
  },
  {
    class: 'expression__table expression__table-protein',
    tag: 'table',
    children: [
      {
        tag: 'thead',
        children: [
          {
            tag: 'tr',
            children: [
              { tag: 'th', textContent: 'Tissue' },
              { tag: 'th', textContent: 'Intensity' },
              { tag: 'th', textContent: 'Level' },
            ],
          },
        ],
      },
      {
        tag: 'tbody',
        children: createBody(report, tissues),
      },
    ],
  },
]);

export default createTable;
