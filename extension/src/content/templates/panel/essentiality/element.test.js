import config from '../../../../config';
import essentialityElement from './element';

const originalTissues = config.tissues;

afterAll(() => {
  config.tissues = originalTissues;
});

describe('Essentiality element', () => {
  it('should return empty array when not selected', () => {
    config.tissues = {
      essentiality: {
        'Homo sapiens': { cells: ['cellA', 'cellB', 'cellC', 'cellD', 'cellE'], tissues: [] },
      },
    };
    const report = {};
    const settings = {
      essentiality: false,
      species: 'Homo sapiens',
    };

    const expected = [];
    expect(essentialityElement(report, settings)).toEqual(expected);
  });

  describe('data not available for species', () => {
    it('should return empty array when there is no essentiality data for the species', () => {
      config.tissues = {
        essentiality: {},
      };
      const report = {};
      const settings = {
        essentiality: true,
        species: 'Homo sapiens',
      };

      const expected = [];
      expect(essentialityElement(report, settings)).toEqual(expected);
    });

    it('should return empty array when there are no cells available for the species', () => {
      config.tissues = {
        essentiality: {
          'Homo sapiens': { cells: [], tissues: [] },
        },
      };
      const report = {};
      const settings = {
        essentiality: true,
        species: 'Homo sapiens',
      };

      const expected = [];
      expect(essentialityElement(report, settings)).toEqual(expected);
    });
  });

  describe('data not available for gene', () => {
    let element;

    beforeAll(() => {
      config.tissues = {
        essentiality: {
          'Homo sapiens': { cells: ['cellA', 'cellB', 'cellC', 'cellD', 'cellE'], tissues: [] },
        },
      };
      const report = {
        essentiality: {
          cells: {},
          coDependencies: [],
          sourceSymbol: 'geneA',
        },
      };
      const settings = {
        essentiality: true,
        species: 'Homo sapiens',
      };

      element = essentialityElement(report, settings);
    });

    it('should return a warning when cell data is not available', () => {
      expect(element[1].children.some(child => child.textContent === 'no cell data available')).toBeTruthy();
    });

    it('should return a warning when co dependency data is not available', () => {
      expect(element[1].children.some(child => child.textContent === 'no co-dependency data available')).toBeTruthy();
    });
  });

  describe('data available for gene but no cells or co-dependencies selected', () => {
    let element;

    beforeAll(() => {
      config.tissues = {
        essentiality: {
          'Homo sapiens': { cells: ['cellA', 'cellB', 'cellC', 'cellD', 'cellE'], tissues: [] },
        },
      };
      const report = {
        essentiality: {
          cells: {
            cellA: 0.1,
            cellB: 0.05,
            cellC: 0.2,
            cellD: -0.1,
            cellE: 0.3,
          },
          coDependencies: [
            ['geneB', 0.4],
            ['geneD', 0.35],
            ['geneC', 0.3],
            ['geneE', 0.25],
          ],
          sourceSymbol: 'geneA',
          stats: {
            mean: 0.11,
            median: 0.1,
            sd: 0.1356,
          },
        },
      };
      const settings = {
        essentiality: true,
        essentiality_codependencies: 0,
        essentiality_tissues: [],
        species: 'Homo sapiens',
      };

      element = essentialityElement(report, settings);
    });

    it('should return a warning when no cells are selected', () => {
      expect(element[1].children.some(child => child.textContent === 'no cell lines selected')).toBeTruthy();
    });

    it('should not return elements for co-dependency when 0 genes are selected', () => {
      expect(element[1].children.some(child => child.class === 'essentiality__codependencies')).toBeFalsy();
    });
  });

  describe('data available and prerequisites selected', () => {
    let element;

    beforeAll(() => {
      config.tissues = {
        essentiality: {
          'Homo sapiens': { cells: ['cellA', 'cellB', 'cellC', 'cellD', 'cellE'], tissues: [] },
        },
      };
      const report = {
        essentiality: {
          cells: {
            cellA: 0.1,
            cellB: 0.05,
            cellC: 0.2,
            cellD: -0.1,
            cellE: 0.3,
          },
          coDependencies: [
            ['geneB', 0.4],
            ['geneD', 0.35],
            ['geneC', 0.3],
            ['geneE', 0.25],
          ],
          sourceSymbol: 'geneA',
          stats: {
            mean: 0.11,
            median: 0.1,
            sd: 0.1356,
          },
        },
      };
      const settings = {
        essentiality: true,
        essentiality_codependencies: 2,
        essentiality_tissues: ['cellA', 'cellC'],
        species: 'Homo sapiens',
      };

      element = essentialityElement(report, settings);
    });

    it('should return two tables', () => {
      expect(element[1].children.reduce((accum, child) => {
        if (child.class === 'essentiality__table') {
          return accum + 1;
        }
        return accum;
      }, 0)).toBe(2);
    });
  });
});
