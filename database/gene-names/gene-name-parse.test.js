const mockFS = require('mock-fs');

const { defineField, geneNameParse } = require('./gene-name-parse');

const json = `
{
  "1": {
    "official": "a",
    "synonyms": []
  },
  "2": {
    "official": "b",
    "synonyms": ["g2"]
  }
}`;

const mockedFileSystem = {
  'Homo sapiens.json': json,
};
mockFS(mockedFileSystem);

afterAll(() => {
  mockFS.restore();
});

describe('Define field for matching gene names to uniprot', () => {
  it('should return hgnc for Homo sapiens', () => {
    expect(defineField('Homo sapiens')).toBe('hgnc');
  });

  it('should return undefined otherwise', () => {
    expect(defineField('other')).toBeUndefined();
  });
});

describe('Read parsed gene names', () => {
  describe('file exists', () => {
    it('should parse gene results', async (done) => {
      const geneNames = await geneNameParse('Homo sapiens.json', 'Homo sapiens');
      const expected = {
        field: 'hgnc',
        geneNames: {
          1: {
            official: 'a',
            synonyms: [],
          },
          2: {
            official: 'b',
            synonyms: ['g2'],
          },
        },
      };
      expect(geneNames).toEqual(expected);
      done();
    });
  });

  describe('file does not exist', () => {
    it('should return emtpy object for gene results', async (done) => {
      const geneNames = await geneNameParse('missing.json', 'other');
      const expected = {
        field: undefined,
        geneNames: {},
      };
      expect(geneNames).toEqual(expected);
      done();
    });
  });
});
