import essentialityElement from './essentiality';

describe('Essentiality link', () => {
  it('should show link', () => {
    const report = {
      gene: 'GENEA',
      essentiality: {
        cells: {
          HEPG2: 0.1935,
          JURKAT: 0.0642,
          2313287: -0.0141,
        },
        sourceSymbol: 'GENEa',
      },
    };
    const settings = {
      essentiality: true,
      species: 'Homo sapiens',
    };
    const expected = [{
      database: 'DepMap',
      href: 'https://depmap.org/portal/gene/GENEa?tab=overview',
    }];
    expect(essentialityElement(report, settings)).toEqual(expected);
  });

  it('should use report symbol in link when source symbol is missing', () => {
    const report = {
      gene: 'GENEA',
      essentiality: {
        cells: {
          HEPG2: 0.1935,
          JURKAT: 0.0642,
          2313287: -0.0141,
        },
      },
    };
    const settings = {
      essentiality: true,
      species: 'Homo sapiens',
    };
    const expected = [{
      database: 'DepMap',
      href: 'https://depmap.org/portal/gene/GENEA?tab=overview',
    }];
    expect(essentialityElement(report, settings)).toEqual(expected);
  });

  it('should not show link when setting is off', () => {
    const report = {
      gene: 'GENEA',
      essentiality: {
        cells: {
          HEPG2: 0.1935,
          JURKAT: 0.0642,
          2313287: -0.0141,
        },
        sourceSymbol: 'GENEa',
      },
    };
    const settings = {
      essentiality: false,
      species: 'Homo sapiens',
    };
    const expected = [];
    expect(essentialityElement(report, settings)).toEqual(expected);
  });

  it('should not show link for non human species', () => {
    const report = {
      gene: 'GeneA',
      essentiality: {
        cells: {
          HEPG2: 0.1935,
          JURKAT: 0.0642,
          2313287: -0.0141,
        },
      },
    };
    const settings = {
      essentiality: true,
      species: 'Mus musculus',
    };
    const expected = [];
    expect(essentialityElement(report, settings)).toEqual(expected);
  });

  it('should not show link when there is no data', () => {
    const report = {
      gene: 'GENEA',
      essentiality: {
        cells: {},
        sourceSymbol: 'GENEa',
      },
    };
    const settings = {
      essentiality: true,
      species: 'Homo sapiens',
    };
    const expected = [];
    expect(essentialityElement(report, settings)).toEqual(expected);
  });
});
