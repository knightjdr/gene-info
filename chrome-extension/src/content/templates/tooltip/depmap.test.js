import depmapElement from './depmap';

describe('Depmap link', () => {
  it('should show link', () => {
    const report = {
      gene: 'GENEA',
      depmap: {
        cells: {
          HEPG2: 0.1935,
          JURKAT: 0.0642,
          2313287: -0.0141,
        },
      },
    };
    const settings = {
      depmap: true,
      species: 'Homo sapiens',
    };
    const expected = [{
      database: 'DepMap',
      href: 'https://depmap.org/portal/gene/GENEA?tab=overview',
    }];
    expect(depmapElement(report, settings)).toEqual(expected);
  });

  it('should not show link when setting is off', () => {
    const report = {
      gene: 'GENEA',
      depmap: {
        cells: {
          HEPG2: 0.1935,
          JURKAT: 0.0642,
          2313287: -0.0141,
        },
      },
    };
    const settings = {
      depmap: false,
      species: 'Homo sapiens',
    };
    const expected = [];
    expect(depmapElement(report, settings)).toEqual(expected);
  });

  it('should not show link for non human species', () => {
    const report = {
      gene: 'GeneA',
      depmap: {
        cells: {
          HEPG2: 0.1935,
          JURKAT: 0.0642,
          2313287: -0.0141,
        },
      },
    };
    const settings = {
      depmap: true,
      species: 'Mus musculus',
    };
    const expected = [];
    expect(depmapElement(report, settings)).toEqual(expected);
  });

  it('should not show link when there is no data', () => {
    const report = {
      gene: 'GENEA',
      depmap: {
        cells: {},
      },
    };
    const settings = {
      depmap: true,
      species: 'Homo sapiens',
    };
    const expected = [];
    expect(depmapElement(report, settings)).toEqual(expected);
  });
});
