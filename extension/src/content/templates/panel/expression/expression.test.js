import expression from './expression';

jest.mock('../../../../config', () => ({
  tissues: {
    protein: {
      'Danio rerio': { cells: [], tissues: [] },
      'Homo sapiens': { cells: ['HEK293'], tissues: ['brain'] },
    },
    rna: {
      'Danio rerio': { cells: [], tissues: [] },
      'Homo sapiens': { cells: ['HEK293'], tissues: ['brain'] },
    },
  },
}));
jest.mock('./protein/element', () => () => '<div class="protein-expression" />');
jest.mock('./rna/element', () => () => '<div class="rna-expression" />');

describe('Expression element', () => {
  it('should return empty array when expression data is not requested', () => {
    const report = {};
    const setting = {
      protein_expression: false,
      rna_expression: false,
      species: 'Homo sapiens',
    };
    expect(expression(report, setting)).toEqual([]);
  });

  it('should return empty array when protein expression data is requested but species invalid', () => {
    const report = {};
    const setting = {
      protein_expression: true,
      rna_expression: false,
      species: 'Mus musculus',
    };
    expect(expression(report, setting)).toEqual([]);
  });

  it('should return empty array when rna expression data is requested but species invalid', () => {
    const report = {};
    const setting = {
      protein_expression: false,
      rna_expression: true,
      species: 'Mus musculus',
    };
    expect(expression(report, setting)).toEqual([]);
  });

  it('should return empty array when species has no available data', () => {
    const report = {};
    const setting = {
      protein_expression: true,
      rna_expression: true,
      species: 'Danio rerio',
    };
    expect(expression(report, setting)).toEqual([]);
  });

  it('should return element when protein expression data is requested and species valid', () => {
    const report = {};
    const setting = {
      protein_expression: true,
      rna_expression: false,
      species: 'Homo sapiens',
    };
    expect(expression(report, setting)).not.toEqual({});
  });

  it('should return element when rna expression data is requested and species valid', () => {
    const report = {};
    const setting = {
      protein_expression: false,
      rna_expression: true,
      species: 'Homo sapiens',
    };
    expect(expression(report, setting)).not.toEqual({});
  });

  it('should return element when expression data is requested and species valid', () => {
    const report = {};
    const setting = {
      protein_expression: true,
      rna_expression: true,
      species: 'Homo sapiens',
    };
    expect(expression(report, setting)).not.toEqual({});
  });
});
