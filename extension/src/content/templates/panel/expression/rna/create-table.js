import filLTableRow from './fill-table-row';

const createBody = (report, tissues) => (
  tissues.map(tissue => (
    filLTableRow(tissue, report['rna-expression'])
  ))
);

const createTable = (report, tissues) => ([
  {
    class: 'details-description',
    tag: 'p',
    children: [
      { tag: 'span', textContent: 'RNA expression values are reported as transcripts per million (TPM). See ' },
      {
        href: 'https://www.proteinatlas.org/about/assays+annotation',
        rel: 'noopener noreferrer',
        tag: 'a',
        target: '_blank',
        textContent: 'HPA RNA-seq data',
      },
      { tag: 'span', textContent: ' for more.' },
    ],
  },
  {
    class: 'expression__table',
    tag: 'table',
    children: [
      {
        tag: 'thead',
        children: [
          {
            tag: 'tr',
            children: [
              { tag: 'th', textContent: 'Tissue' },
              { tag: 'th', textContent: 'TPM' },
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
