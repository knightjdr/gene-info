import expressionElement from './element';

describe('RNA expression element', () => {
  it('should return empty string when not selected', () => {
    const availableSpecies = ['Homo sapiens'];
    const report = {};
    const settings = {
      rna_expression: false,
    };
    const result = expressionElement(report, settings, availableSpecies);

    expect(result).toBe('');
  });

  it('should return empty string when selected species does have expression data', () => {
    const availableSpecies = ['Homo sapiens'];
    const report = {};
    const settings = {
      rna_expression: false,
      species: 'Mus musculus',
    };
    const result = expressionElement(report, settings, availableSpecies);

    expect(result).toBe('');
  });

  describe('no tissues selected', () => {
    describe('data not available', () => {
      let html;

      beforeAll(() => {
        const availableSpecies = ['Homo sapiens'];
        const report = {
          'ensembl-gene': [1234],
          'rna-expression': {},
        };
        const settings = {
          rna_expression: true,
          rna_expression_tissues: [],
          species: 'Homo sapiens',
        };
        html = expressionElement(report, settings, availableSpecies);
      });

      it('should display tissue warning', () => {
        expect(html.includes('no tissues selected')).toBeTruthy();
      });

      it('should not display table', () => {
        expect(html.includes('<table class="expression__table">')).toBeFalsy();
      });

      it('should not display data warning', () => {
        expect(html.includes('no RNA expression data')).toBeFalsy();
      });
    });

    describe('data available', () => {
      let html;

      beforeAll(() => {
        const availableSpecies = ['Homo sapiens'];
        const report = {
          'ensembl-gene': [1234],
          'rna-expression': {
            cells: {
              cellX: 1,
              cellY: 2,
            },
          },
        };
        const settings = {
          rna_expression: true,
          rna_expression_tissues: [],
          species: 'Homo sapiens',
        };
        html = expressionElement(report, settings, availableSpecies);
      });

      it('should display tissue warning', () => {
        expect(html.includes('no tissues selected')).toBeTruthy();
      });

      it('should not display table', () => {
        expect(html.includes('<table class="expression__table">')).toBeFalsy();
      });

      it('should not display data warning', () => {
        expect(html.includes('no RNA expression data')).toBeFalsy();
      });
    });
  });

  describe('data available', () => {
    let html;

    beforeAll(() => {
      const availableSpecies = ['Homo sapiens'];
      const report = {
        'ensembl-gene': [1234],
        'rna-expression': {
          cells: {
            cellX: 1,
            cellY: 2,
          },
        },
      };
      const settings = {
        rna_expression: true,
        rna_expression_tissues: ['cellX', 'cellY'],
        species: 'Homo sapiens',
      };
      html = expressionElement(report, settings, availableSpecies);
    });

    it('should not display tissue warning', () => {
      expect(html.includes('no tissues selected')).toBeFalsy();
    });

    it('should display table', () => {
      expect(html.includes('<table class="expression__table">')).toBeTruthy();
    });

    it('should not display data warning', () => {
      expect(html.includes('no RNA expression data')).toBeFalsy();
    });
  });

  describe('data not available', () => {
    let html;

    beforeAll(() => {
      const availableSpecies = ['Homo sapiens'];
      const report = {
        'ensembl-gene': [1234],
        'rna-expression': {},
      };
      const settings = {
        rna_expression: true,
        rna_expression_tissues: ['cellX', 'cellY'],
        species: 'Homo sapiens',
      };
      html = expressionElement(report, settings, availableSpecies);
    });

    it('should not display tissue warning', () => {
      expect(html.includes('no tissues selected')).toBeFalsy();
    });

    it('should not display table', () => {
      expect(html.includes('<table class="expression__table">')).toBeFalsy();
    });

    it('should display data warning', () => {
      expect(html.includes('no RNA expression data')).toBeTruthy();
    });
  });
});
