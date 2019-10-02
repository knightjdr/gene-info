import expression from './expression';

jest.mock('../../../../config', () => ({
  tissues: {
    protein: {
      'Homo sapiens': { cells: {}, tissues: {} },
    },
    rna: {
      'Homo sapiens': { cells: {}, tissues: {} },
    },
  },
}));
jest.mock('./protein/element', () => () => '<div class="protein-expression" />');
jest.mock('./rna/element', () => () => '<div class="rna-expression" />');

describe('Expression element', () => {
  it('should return empty string when expression data is not requested', () => {
    const report = {};
    const setting = {
      protein_expression: false,
      rna_expression: false,
      species: 'Homo sapiens',
    };
    expect(expression(report, setting)).toBe('');
  });

  it('should return empty string when protein expression data is requested but species invalid', () => {
    const report = {};
    const setting = {
      protein_expression: true,
      rna_expression: false,
      species: 'Mus musculus',
    };
    expect(expression(report, setting)).toBe('');
  });

  it('should return empty string when rna expression data is requested but species invalid', () => {
    const report = {};
    const setting = {
      protein_expression: false,
      rna_expression: true,
      species: 'Mus musculus',
    };
    expect(expression(report, setting)).toBe('');
  });

  it('should return empty string when species has no available data', () => {
    const report = {};
    const setting = {
      protein_expression: true,
      rna_expression: true,
      species: 'Mus musculus',
    };
    expect(expression(report, setting)).toBe('');
  });

  it('should return element when protein expression data is requested and species valid', () => {
    const report = {};
    const setting = {
      protein_expression: true,
      rna_expression: false,
      species: 'Homo sapiens',
    };
    expect(expression(report, setting)).not.toBe('');
  });

  it('should return element when rna expression data is requested and species valid', () => {
    const report = {};
    const setting = {
      protein_expression: false,
      rna_expression: true,
      species: 'Homo sapiens',
    };
    expect(expression(report, setting)).not.toBe('');
  });

  it('should return element when expression data is requested and species valid', () => {
    const report = {};
    const setting = {
      protein_expression: true,
      rna_expression: true,
      species: 'Homo sapiens',
    };
    expect(expression(report, setting)).not.toBe('');
  });
});
