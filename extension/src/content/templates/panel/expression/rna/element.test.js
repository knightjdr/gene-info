import expressionElement from './element';

describe('RNA expression element', () => {
  it('should return empty string when data should not be shown', () => {
    const report = {};
    const settings = {};
    const showData = false;
    const result = expressionElement(report, settings, showData);

    expect(result).toEqual({});
  });

  describe('no tissues selected', () => {
    describe('data not available', () => {
      let nodes;

      beforeAll(() => {
        const report = {
          'ensembl-gene': [1234],
          'rna-expression': {},
        };
        const settings = {
          rna_expression_tissues: [],
          species: 'Homo sapiens',
        };
        const showData = true;
        nodes = expressionElement(report, settings, showData);
      });

      it('should display tissue warning', () => {
        expect(nodes.children.some(child => child.textContent === 'no tissues selected')).toBeTruthy();
      });

      it('should not display table', () => {
        expect(nodes.children.some(child => child.tag === 'table')).toBeFalsy();
      });

      it('should not display data warning', () => {
        expect(nodes.children.some(child => child.textContent === 'no RNA expression data')).toBeFalsy();
      });
    });

    describe('data available', () => {
      let nodes;

      beforeAll(() => {
        const report = {
          'ensembl-gene': [1234],
          'rna-expression': {
            cells: [
              { name: 'cellX', value: 1 },
              { name: 'cellY', value: 2 },
            ],
          },
        };
        const settings = {
          rna_expression_tissues: [],
          species: 'Homo sapiens',
        };
        const showData = true;
        nodes = expressionElement(report, settings, showData);
      });

      it('should display tissue warning', () => {
        expect(nodes.children.some(child => child.textContent === 'no tissues selected')).toBeTruthy();
      });

      it('should not display table', () => {
        expect(nodes.children.some(child => child.tag === 'table')).toBeFalsy();
      });

      it('should not display data warning', () => {
        expect(nodes.children.some(child => child.textContent === 'no RNA expression data')).toBeFalsy();
      });
    });
  });

  describe('tissues selected', () => {
    describe('data available', () => {
      let nodes;

      beforeAll(() => {
        const report = {
          'ensembl-gene': [1234],
          'rna-expression': {
            cells: [
              { name: 'cellX', value: 1 },
              { name: 'cellY', value: 2 },
            ],
          },
        };
        const settings = {
          rna_expression_tissues: ['cellX', 'cellY'],
          species: 'Homo sapiens',
        };
        const showData = true;
        nodes = expressionElement(report, settings, showData);
      });

      it('should not display tissue warning', () => {
        expect(nodes.children.some(child => child.textContent === 'no tissues selected')).toBeFalsy();
      });

      it('should display table', () => {
        expect(nodes.children.some(child => child.tag === 'table')).toBeTruthy();
      });

      it('should not display data warning', () => {
        expect(nodes.children.some(child => child.textContent === 'no RNA expression data')).toBeFalsy();
      });
    });

    describe('data not available', () => {
      let nodes;

      beforeAll(() => {
        const report = {
          'ensembl-gene': [1234],
          'rna-expression': {},
        };
        const settings = {
          rna_expression: true,
          rna_expression_tissues: ['cellX', 'cellY'],
          species: 'Homo sapiens',
        };
        const showData = true;
        nodes = expressionElement(report, settings, showData);
      });

      it('should not display tissue warning', () => {
        expect(nodes.children.some(child => child.textContent === 'no tissues selected')).toBeFalsy();
      });

      it('should not display table', () => {
        expect(nodes.children.some(child => child.tag === 'table')).toBeFalsy();
      });

      it('should display data warning', () => {
        expect(nodes.children.some(child => child.textContent === 'no RNA expression data')).toBeTruthy();
      });
    });
  });
});
