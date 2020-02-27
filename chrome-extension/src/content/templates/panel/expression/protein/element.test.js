import expressionElement from './element';

describe('Protein expression element', () => {
  it('should return empty string when not selected', () => {
    const report = {};
    const settings = {};
    const showData = false;
    const result = expressionElement(report, settings, showData);

    expect(result).toBe('');
  });

  describe('no tissues selected', () => {
    describe('data not available', () => {
      let html;

      beforeAll(() => {
        const report = {
          'protein-expression': {},
          proteomicsdb: 1234,
        };
        const settings = {
          protein_expression_tissues: [],
          species: 'Homo sapiens',
        };
        const showData = true;
        html = expressionElement(report, settings, showData);
      });

      it('should display tissue warning', () => {
        expect(html.includes('no tissues selected')).toBeTruthy();
      });

      it('should not display table', () => {
        expect(html.includes('<table class="expression__table expression__table-protein">')).toBeFalsy();
      });

      it('should not display data warning', () => {
        expect(html.includes('no protein expression data')).toBeFalsy();
      });
    });

    describe('data available', () => {
      let html;

      beforeAll(() => {
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
          protein_expression_tissues: [],
          species: 'Homo sapiens',
        };
        const showData = true;
        html = expressionElement(report, settings, showData);
      });

      it('should display tissue warning', () => {
        expect(html.includes('no tissues selected')).toBeTruthy();
      });

      it('should not display table', () => {
        expect(html.includes('<table class="expression__table expression__table-protein">')).toBeFalsy();
      });

      it('should not display data warning', () => {
        expect(html.includes('no protein expression data')).toBeFalsy();
      });
    });
  });

  describe('data available', () => {
    let html;

    beforeAll(() => {
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
        protein_expression_tissues: ['cellX', 'cellY'],
        species: 'Homo sapiens',
      };
      const showData = true;
      html = expressionElement(report, settings, showData);
    });

    it('should not display tissue warning', () => {
      expect(html.includes('no tissues selected')).toBeFalsy();
    });

    it('should display table', () => {
      expect(html.includes('<table class="expression__table expression__table-protein">')).toBeTruthy();
    });

    it('should not display data warning', () => {
      expect(html.includes('no protein expression data')).toBeFalsy();
    });
  });

  describe('data not available', () => {
    let html;

    beforeAll(() => {
      const report = {
        'protein-expression': {},
        proteomicsdb: 1234,
      };
      const settings = {
        protein_expression_tissues: ['cellX', 'cellY'],
        species: 'Homo sapiens',
      };
      const showData = true;
      html = expressionElement(report, settings, showData);
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
