import fillTableRow from './fill-table-row';

const filterTissues = (data, tissues) => {
  const availableCells = data.cells || [];
  const availableTissues = data.tissues || [];
  const mergedTissues = [...availableCells, ...availableTissues];
  const filtered = [];
  tissues.forEach((tissue) => {
    const tissueData = mergedTissues.find(item => item.name === tissue);
    if (tissueData) {
      filtered.push(tissueData);
    } else {
      filtered.push({
        name: tissue,
        value: '-',
      });
    }
  });
  return filtered;
};

const createBody = (data, selectedTissues) => {
  const tissues = filterTissues(data, selectedTissues);
  return tissues.map(tissue => (
    fillTableRow(tissue)
  ));
};

const createTable = (data, selectedTissues) => ([
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
        children: createBody(data, selectedTissues),
      },
    ],
  },
]);

export default createTable;
