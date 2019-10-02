const mockFS = require('mock-fs');

const { parseTissue } = require('./parse-data');

const data = {
  d: {
    results: [
      {
        EXPRESSION_LEVEL: 'low',
        NORMALIZED_INTENSITY: 2.3333,
        TISSUE_NAME: 'cellX',
        UNIPROT_ACCESSION: 'P123456',
      },
      {
        EXPRESSION_LEVEL: 'medium',
        NORMALIZED_INTENSITY: 5.6666,
        TISSUE_NAME: 'cellY',
        UNIPROT_ACCESSION: 'P123456',
      },
      {
        EXPRESSION_LEVEL: 'high',
        NORMALIZED_INTENSITY: 8.3333,
        TISSUE_NAME: 'cellX',
        UNIPROT_ACCESSION: 'P789101',
      },
    ],
  },
};


const mockedFileSystem = {
  'Homo sapiens.json': JSON.stringify(data),
};
mockFS(mockedFileSystem);

afterAll(() => {
  mockFS.restore();
});

describe('Parse protein expression file', () => {
  describe('file to parse exists', () => {
    let result;

    beforeAll(async () => {
      result = await parseTissue('Homo sapiens.json');
    });

    it('should parse expression data', () => {
      const expected = {
        P123456: {
          cellX: { intensity: 2.333, level: 'low' },
          cellY: { intensity: 5.667, level: 'medium' },
        },
        P789101: {
          cellX: { intensity: 8.333, level: 'high' },
        },
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
      result = await parseTissue('missing.json');
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
