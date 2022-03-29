import createCoDependencyTable from './create-co-dependency-table';

describe('Create essentiality co-dependency table', () => {
  it('should return nothing when no co-dependencies requested', () => {
    const report = {
      coDependencies: [
        ['geneA', 0.45],
        ['geneB', 0.4],
        ['geneD', 0.35],
        ['geneC', 0.3],
        ['geneE', 0.25],
      ],
    };
    const settings = {
      essentiality_codependencies: 0,
    };
    const expected = [];
    expect(createCoDependencyTable(report, settings)).toEqual(expected);
  });

  it('should return warning when there is no essentiality data', () => {
    const report = {};
    const settings = {
      essentiality_codependencies: 3,
    };
    const expected = [
      {
        class: 'essentiality__codependencies',
        tag: 'h2',
        textContent: 'Co-dependencies',
      },
      {
        class: 'warning',
        tag: 'div',
        textContent: 'no co-dependency data available',
      },
    ];
    expect(createCoDependencyTable(report, settings)).toEqual(expected);
  });

  it('should return warning when there is no co-dependency data', () => {
    const report = {};
    const settings = {
      essentiality_codependencies: 3,
    };
    const expected = [
      {
        class: 'essentiality__codependencies',
        tag: 'h2',
        textContent: 'Co-dependencies',
      },
      {
        class: 'warning',
        tag: 'div',
        textContent: 'no co-dependency data available',
      },
    ];
    expect(createCoDependencyTable(report, settings)).toEqual(expected);
  });

  it('should return warning when there is an empty co-dependency array', () => {
    const report = {
      coDependencies: [],
    };
    const settings = {
      essentiality_codependencies: 3,
    };
    const expected = [
      {
        class: 'essentiality__codependencies',
        tag: 'h2',
        textContent: 'Co-dependencies',
      },
      {
        class: 'warning',
        tag: 'div',
        textContent: 'no co-dependency data available',
      },
    ];
    expect(createCoDependencyTable(report, settings)).toEqual(expected);
  });

  it('should return a table of dependencies', () => {
    const report = {
      coDependencies: [
        ['geneA', 0.45],
        ['geneB', 0.4],
        ['geneD', 0.35],
        ['geneC', 0.3],
        ['geneE', 0.25],
      ],
    };
    const settings = {
      essentiality_codependencies: 3,
    };
    const expected = [
      {
        class: 'essentiality__codependencies',
        tag: 'h2',
        textContent: 'Co-dependencies',
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
                  { tag: 'td', textContent: 'Gene' },
                  { tag: 'td', textContent: 'Pearson' },
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
                    textContent: 'geneA',
                  },
                  {
                    tag: 'td',
                    textContent: 0.45,
                  },
                ],
              },
              {
                tag: 'tr',
                children: [
                  {
                    tag: 'td',
                    textContent: 'geneB',
                  },
                  {
                    tag: 'td',
                    textContent: 0.4,
                  },
                ],
              },
              {
                tag: 'tr',
                children: [
                  {
                    tag: 'td',
                    textContent: 'geneD',
                  },
                  {
                    tag: 'td',
                    textContent: 0.35,
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
    expect(createCoDependencyTable(report, settings)).toEqual(expected);
  });
});
