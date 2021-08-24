const path = require('path');

const {
  filterCompartments,
  handleCompartmentLines,
  removeParents,
  uniqueParents,
} = require('./localization-parse');

jest.mock('../config', () => ({
  compartmentsLimit: 5,
  compartmentsThreshold: 5,
}));

const testFile = path.resolve(__dirname, '../files/example/compartments.txt');

const compartmentTerms = {
  STT3A: {
    accession: 'ENSP00000376472',
    terms: ['GO:0005575', 'GO:0005622', 'GO:0005623', 'GO:0005737', 'GO:0005783', 'GO:0005789', 'GO:0008250'],
  },
  TRAF3: {
    accession: 'ENSP00000376500',
    terms: ['GO:0005575', 'GO:0005622', 'GO:0005623', 'GO:0005737', 'GO:0005739'],
  },
  VWA5A: {
    accession: 'ENSP00000376504',
    terms: ['GO:0005575', 'GO:0005623'],
  },
  PDCD10: {
    accession: 'ENSP00000376506',
    terms: ['GO:0000139', 'GO:0005575', 'GO:0005622', 'GO:0005623', 'GO:0005737', 'GO:0005794', 'GO:0005829', 'GO:0005886', 'GO:0012505'],
  },
};

describe('Localization parsing', () => {
  describe('reading compartments file', () => {
    it('should create object with gene, accession and terms', async () => {
      const results = await handleCompartmentLines(testFile);
      expect(results).toEqual(compartmentTerms);
    });
  });

  describe('Filter compartment terms to remove parents', () => {
    it('should filter compartment terms to top 5 based on IC, and sort alphabetically', async () => {
      const obo = {
        map: {
          'GO:0000139': 'a',
          'GO:0005575': 'b',
          'GO:0005622': 'c',
          'GO:0005623': 'd',
          'GO:0005737': 'e',
          'GO:0005739': 'f',
          'GO:0005783': 'g',
          'GO:0005789': 'h',
          'GO:0005794': 'i',
          'GO:0005829': 'j',
          'GO:0005886': 'k',
          'GO:0008250': 'l',
          'GO:0012505': 'm',
          'GO:0043226': 'n',
          'GO:0043227': 'o',
          'GO:0044464': 'p',
        },
        parents: {
          'GO:0000139': ['GO:0005575', 'GO:0005737'],
          'GO:0005575': ['GO:0005789', 'GO:0005829', 'GO:0043227'],
          'GO:0005622': ['GO:0005794', 'GO:0044464'],
          'GO:0005623': ['GO:0005739', 'GO:0008250'],
          'GO:0005737': [],
          'GO:0005739': [],
          'GO:0005783': [],
          'GO:0005789': [],
          'GO:0005794': [],
          'GO:0005829': [],
          'GO:0005886': [],
          'GO:0008250': [],
          'GO:0012505': [],
          'GO:0043226': [],
          'GO:0043227': [],
          'GO:0044464': [],
        },
      };
      const expected = {
        STT3A: {
          accession: 'ENSP00000376472',
          terms: ['b', 'c', 'd', 'e', 'g'],
        },
        TRAF3: {
          accession: 'ENSP00000376500',
          terms: ['b', 'c', 'd', 'e'],
        },
        VWA5A: {
          accession: 'ENSP00000376504',
          terms: ['b', 'd'],
        },
        PDCD10: {
          accession: 'ENSP00000376506',
          terms: ['a', 'c', 'd', 'k', 'm'],
        },
      };
      const results = await filterCompartments(compartmentTerms, obo);
      expect(results).toEqual(expected);
    });
  });

  describe('find unique parents', () => {
    it('should find unique parents for an array of terms', () => {
      const terms = ['GO:0005575', 'GO:0005622', 'GO:0005623', 'GO:0005737', 'GO:0005783', 'GO:0005789', 'GO:0008250'];
      const parents = {
        'GO:0005575': ['GO:0005622', 'GO:0005783'],
        'GO:0005622': ['GO:0008250'],
        'GO:0005623': ['GO:0005783', 'GO:0005789'],
        'GO:0005737': ['GO:0005783', 'GO:0008250'],
        'GO:0005783': ['GO:0008250'],
        'GO:0005789': ['GO:0008250'],
        'GO:0008250': [],
      };
      const expected = ['GO:0005622', 'GO:0005783', 'GO:0008250', 'GO:0005789'];
      expect(uniqueParents(terms, parents)).toEqual(expected);
    });
  });

  describe('find deepest terms', () => {
    it('should find deepest terms, i.e. terms that are not a parent of another', () => {
      const terms = ['GO:0005575', 'GO:0005622', 'GO:0005623', 'GO:0005737', 'GO:0005783', 'GO:0005789', 'GO:0008250'];
      const parents = ['GO:0005622', 'GO:0005783', 'GO:0008250', 'GO:0005789'];
      const expected = ['GO:0005575', 'GO:0005623', 'GO:0005737'];
      expect(removeParents(terms, parents)).toEqual(expected);
    });
  });
});
