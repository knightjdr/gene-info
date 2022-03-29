const getRequestedCellLines = (availableCellLines, requestedCells) => {
  const requestedCellLines = [];
  requestedCells.forEach((cell) => {
    const cellData = availableCellLines.find(availableCellLine => availableCellLine.name === cell);
    if (cellData) {
      requestedCellLines.push(cellData);
    } else {
      requestedCellLines.push({ name: cell, value: '-' });
    }
  });
  return requestedCellLines;
};

const isCellDataAvailable = essentiality => (
  essentiality?.cells?.length > 0
);

const createCellTable = (essentiality, settings) => {
  const { essentiality_tissues: requestedCellLines } = settings;

  if (!isCellDataAvailable(essentiality)) {
    return [
      {
        class: 'warning',
        tag: 'div',
        textContent: 'no cell data available',
      },
    ];
  }

  const noCells = essentiality.cells.length;
  const requestedCellData = getRequestedCellLines(essentiality.cells, requestedCellLines);

  const nodes = [];

  nodes.push({
    class: 'essentiality__stats',
    tag: 'div',
    children: [
      {
        tag: 'span',
        textContent: 'No. cell lines:',
      },
      {
        tag: 'span',
        textContent: noCells,
      },
      {
        tag: 'span',
        textContent: 'Median:',
      },
      {
        tag: 'span',
        textContent: essentiality.stats.median,
      },
      {
        tag: 'span',
        textContent: 'Mean:',
      },
      {
        tag: 'span',
        textContent: essentiality.stats.mean,
      },
      {
        tag: 'span',
        textContent: 'SD:',
      },
      {
        tag: 'span',
        textContent: essentiality.stats.sd,
      },
    ],
  });

  if (requestedCellLines.length <= 0) {
    nodes.push(
      {
        class: 'warning',
        tag: 'div',
        textContent: 'no cell lines selected',
      },
    );
  } else {
    nodes.push({
      class: 'essentiality__table',
      tag: 'table',
      children: [
        {
          tag: 'thead',
          children: [
            {
              tag: 'tr',
              children: [
                { tag: 'td', textContent: 'Cell' },
                { tag: 'td', textContent: 'CERES' },
              ],
            },
          ],
        },
        {
          tag: 'tbody',
          children: requestedCellData.map(datum => ({
            tag: 'tr',
            children: [
              {
                tag: 'td',
                textContent: datum.name,
              },
              {
                tag: 'td',
                textContent: datum.value,
              },
            ],
          })),
        },
      ],
    });
  }


  return nodes;
};

export default createCellTable;
