const mockFS = require('mock-fs');

const { parseTissue } = require('./parse-data');

const data = `Gene\tGene\tname\tTissue\tTPM\tpTPM
ENSG00000000001\tGENE1\tcellX\t31.5\t37.7
ENSG00000000001\tGENE1\tcellY\t26.4\t32.7
ENSG00000000002\tGENE2\tcellX\t9.2\t14.5
`;


const mockedFileSystem = {
  'Homo sapiens.tsv': data,
};
mockFS(mockedFileSystem);

afterAll(() => {
  mockFS.restore();
});

describe('Parse RNA expression file', () => {
  describe('file to parse exists', () => {
    let result;

    beforeAll(async () => {
      result = await parseTissue('Homo sapiens.tsv');
    });

    it('should parse expression data', () => {
      const expected = {
        ENSG00000000001: [
          { name: 'cellX', value: 31.5 },
          { name: 'cellY', value: 26.4 },
        ],
        ENSG00000000002: [
          { name: 'cellX', value: 9.2 },
        ],
      };
      expect(result.expression).toEqual(expected);
    });

    it('should parse tissue lines', () => {
      const expected = ['cellX', 'cellY'];
      expect(result.lines).toEqual(expected);
    });
  });

  describe('file to parse does not exist', () => {
    let result;

    beforeAll(async () => {
      result = await parseTissue('missing.tsv');
    });

    it('should parse expression data', () => {
      expect(result.expression).toEqual({});
    });

    it('should parse tissue lines', () => {
      const expected = [];
      expect(result.lines).toEqual(expected);
    });
  });
});
