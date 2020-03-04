const detectField = require('./detect-field');
const { validate } = require('./validate');

jest.mock('../../../../database/config', () => ({
  speciesID: { 9060: 'Homo sapiens' },
}));
jest.mock('./detect-field');
detectField.mockReturnValue('gene');

describe('Validate query params', () => {
  it('should return error with invalid species', () => {
    const expected = {
      err: true,
      message: 'Invalid species',
    };
    expect(validate('Unknown', 'auto', 'test')).toEqual(expected);
  });

  it('should return error with invalid field', () => {
    const expected = {
      err: true,
      message: 'Invalid query field',
    };
    expect(validate('Homo sapiens', 'test', 'test')).toEqual(expected);
  });

  describe('term errors', () => {
    it('should return error with missing term', () => {
      const expected = {
        err: true,
        message: 'Query term must be a string or number',
      };
      expect(validate('Homo sapiens', 'auto', '')).toEqual(expected);
    });

    it('should return error term not string or number', () => {
      const expected = {
        err: true,
        message: 'Query term must be a string or number',
      };
      expect(validate('Homo sapiens', 'auto', [])).toEqual(expected);
    });
  });

  describe('field validation', () => {
    it('should autodetect field', () => {
      const expected = {
        field: 'gene',
      };
      expect(validate('Homo sapiens', 'auto', 'test').field).toBe(expected.field);
    });

    it('should validate accepted field', () => {
      const expected = {
        field: 'uniprot',
      };
      expect(validate('Homo sapiens', 'uniprot', 'test').field).toBe(expected.field);
    });
  });

  describe('term validation', () => {
    it('should convert geneid to number', () => {
      const expected = {
        term: 1234,
      };
      expect(validate('Homo sapiens', 'geneid', '1234').term).toBe(expected.term);
    });

    it('should convert nextprot to uniprot', () => {
      const expected = {
        field: 'uniprot',
        species: 'Homo sapiens',
        term: 'Q9BUL8',
      };
      expect(validate('Homo sapiens', 'nextprot', 'NX_Q9BUL8')).toEqual(expected);
    });

    it('should string trailing decimal from refseq', () => {
      const expected = {
        term: 'NP_009148',
      };
      expect(validate('Homo sapiens', 'refseq', 'NP_009148.2').term).toBe(expected.term);
    });

    it('should keep non geneid fields as strings', () => {
      const expected = {
        term: 'test',
      };
      expect(validate('Homo sapiens', 'uniprot', 'test').term).toBe(expected.term);
    });
  });

  it('should return valid query', () => {
    const expected = {
      field: 'uniprot',
      species: 'Homo sapiens',
      term: 'test',
    };
    expect(validate('Homo sapiens', 'uniprot', ' test ')).toEqual(expected);
  });
});
