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
        intensity: '-',
        level: 'none',
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
        children: createBody(data, selectedTissues),
      },
    ],
  },
]);

export default createTable;
