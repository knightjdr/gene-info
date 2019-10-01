import expressionElement from './element';

describe('Protein expression element', () => {
  it('should return empty string when not selected', () => {
    const availableSpecies = ['Homo sapiens'];
    const report = {};
    const settings = {
      protein_expression: false,
    };
    const result = expressionElement(report, settings, availableSpecies);

    expect(result).toBe('');
  });

  it('should return empty string when selected species does have expression data', () => {
    const availableSpecies = ['Homo sapiens'];
    const report = {};
    const settings = {
      protein_expression: false,
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
          'protein-expression': {},
          proteomicsdb: 1234,
        };
        const settings = {
          protein_expression: true,
          protein_expression_tissues: [],
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
        expect(html.includes('no protein expression data')).toBeFalsy();
      });
    });

    describe('data available', () => {
      let html;

      beforeAll(() => {
        const availableSpecies = ['Homo sapiens'];
        const report = {
          'protein-expression': {
            cells: {
              cellX: { intensity: 1, level: 'low' },
              cellY: { intensity: 2, level: 'medium' },
            },
          },
          proteomicsdb: 1234,
        };
        const settings = {
          protein_expression: true,
          protein_expression_tissues: [],
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
        expect(html.includes('no protein expression data')).toBeFalsy();
      });
    });
  });

  describe('data available', () => {
    let html;

    beforeAll(() => {
      const availableSpecies = ['Homo sapiens'];
      const report = {
        'protein-expression': {
          cells: {
            cellX: { intensity: 1, level: 'low' },
            cellY: { intensity: 2, level: 'medium' },
          },
        },
        proteomicsdb: 1234,
      };
      const settings = {
        protein_expression: true,
        protein_expression_tissues: ['cellX', 'cellY'],
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
      expect(html.includes('no protein expression data')).toBeFalsy();
    });
  });

  describe('data not available', () => {
    let html;

    beforeAll(() => {
      const availableSpecies = ['Homo sapiens'];
      const report = {
        'protein-expression': {},
        proteomicsdb: 1234,
      };
      const settings = {
        protein_expression: true,
        protein_expression_tissues: ['cellX', 'cellY'],
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
      expect(html.includes('no protein expression data')).toBeTruthy();
    });
  });
});
