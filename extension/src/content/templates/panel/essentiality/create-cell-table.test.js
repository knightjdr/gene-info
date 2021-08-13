import createCellTable from './create-cell-table';

describe('Create essentiality cell table', () => {
  it('should return warning when there is no data', () => {
    const report = {};
    const settings = {
      essentiality_tissues: ['cellA', 'cellB', 'cellD'],
    };
    const expected = [
      {
        class: 'warning',
        tag: 'div',
        textContent: 'no cell data available',
      },
    ];
    expect(createCellTable(report, settings)).toEqual(expected);
  });

  it('should return warning when there is essentiality data but no cell data', () => {
    const report = {
      essentiality: {},
    };
    const settings = {
      essentiality_tissues: ['cellA', 'cellB', 'cellD'],
    };
    const expected = [
      {
        class: 'warning',
        tag: 'div',
        textContent: 'no cell data available',
      },
    ];
    expect(createCellTable(report, settings)).toEqual(expected);
  });

  it('should return warning when there is a cell object but no keys', () => {
    const report = {
      essentiality: {
        cells: {},
      },
    };
    const settings = {
      essentiality_tissues: ['cellA', 'cellB', 'cellD'],
    };
    const expected = [
      {
        class: 'warning',
        tag: 'div',
        textContent: 'no cell data available',
      },
    ];
    expect(createCellTable(report, settings)).toEqual(expected);
  });

  it('should display stats but also a warning when no cell lines selected', () => {
    const report = {
      essentiality: {
        cells: {
          cellA: 0.1,
          cellB: 0.05,
          cellC: 0.2,
          cellD: -0.1,
          cellE: 0.3,
        },
        stats: {
          mean: 0.11,
          median: 0.1,
          sd: 0.1356,
        },
      },
    };
    const settings = {
      essentiality_tissues: [],
    };
    const expected = [
      {
        class: 'essentiality__stats',
        tag: 'div',
        children: [
          {
            tag: 'span',
            textContent: 'No. cell lines:',
          },
          {
            tag: 'span',
            textContent: 5,
          },
          {
            tag: 'span',
            textContent: 'Median:',
          },
          {
            tag: 'span',
            textContent: 0.1,
          },
          {
            tag: 'span',
            textContent: 'Mean:',
          },
          {
            tag: 'span',
            textContent: 0.11,
          },
          {
            tag: 'span',
            textContent: 'SD:',
          },
          {
            tag: 'span',
            textContent: 0.1356,
          },
        ],
      },
      {
        class: 'warning',
        tag: 'div',
        textContent: 'no cell lines selected',
      },
    ];
    expect(createCellTable(report, settings)).toEqual(expected);
  });

  it('should return a table for requested cell lines', () => {
    const report = {
      essentiality: {
        cells: {
          cellA: 0.1,
          cellB: 0.05,
          cellC: 0.2,
          cellD: -0.1,
          cellE: 0.3,
        },
        stats: {
          mean: 0.11,
          median: 0.1,
          sd: 0.1356,
        },
      },
    };
    const settings = {
      essentiality_tissues: ['cellA', 'cellB', 'cellD'],
    };
    const expected = [
      {
        class: 'essentiality__stats',
        tag: 'div',
        children: [
          {
            tag: 'span',
            textContent: 'No. cell lines:',
          },
          {
            tag: 'span',
            textContent: 5,
          },
          {
            tag: 'span',
            textContent: 'Median:',
          },
          {
            tag: 'span',
            textContent: 0.1,
          },
          {
            tag: 'span',
            textContent: 'Mean:',
          },
          {
            tag: 'span',
            textContent: 0.11,
          },
          {
            tag: 'span',
            textContent: 'SD:',
          },
          {
            tag: 'span',
            textContent: 0.1356,
          },
        ],
      },
      {
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
            children: [
              {
                tag: 'tr',
                children: [
                  {
                    tag: 'td',
                    textContent: 'cellA',
                  },
                  {
                    tag: 'td',
                    textContent: 0.1,
                  },
                ],
              },
              {
                tag: 'tr',
                children: [
                  {
                    tag: 'td',
                    textContent: 'cellB',
                  },
                  {
                    tag: 'td',
                    textContent: 0.05,
                  },
                ],
              },
              {
                tag: 'tr',
                children: [
                  {
                    tag: 'td',
                    textContent: 'cellD',
                  },
                  {
                    tag: 'td',
                    textContent: -0.1,
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
    expect(createCellTable(report, settings)).toEqual(expected);
  });
});
