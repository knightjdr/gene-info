const defineGeneNames = require('./define');

describe('Define gene names', () => {
  describe('alternative official data available', () => {
    let definedNames;

    beforeAll(() => {
      const entry = {
        gene: 'MAPK11',
        hgnc: 1,
        synonyms: ['SAPK2', 'SAPKgamma'],
      };
      const official = {
        field: 'hgnc',
        geneNames: {
          1: {
            symbol: 'p38Beta',
            synonyms: ['PRKM11'],
          },
        },
      };
      definedNames = defineGeneNames(entry, official);
    });

    it('should return gene symbol matching alternative', () => {
      expect(definedNames.symbol).toBe('p38Beta');
    });

    it('should include greek letters, for synonyms and official name', () => {
      const expected = ['MAPK11', 'p38β', 'PRKM11', 'SAPK2', 'SAPKgamma', 'SAPKγ'];
      expect(definedNames.synonyms).toEqual(expected);
    });
  });

  describe('alternative official data missing', () => {
    let definedNames;

    beforeAll(() => {
      const entry = {
        gene: 'MAPK11',
        hgnc: 1,
        synonyms: ['SAPK2', 'SAPKgamma'],
      };
      definedNames = defineGeneNames(entry);
    });

    it('should return gene symbol matching uniprot', () => {
      expect(definedNames.symbol).toBe('MAPK11');
    });

    it('should return uniprot synonyms', () => {
      const expected = ['SAPK2', 'SAPKgamma', 'SAPKγ'];
      expect(definedNames.synonyms).toEqual(expected);
    });
  });

  describe('alternative official field missing', () => {
    let definedNames;

    beforeAll(() => {
      const entry = {
        gene: 'MAPK11',
        hgnc: 1,
        synonyms: ['SAPK2', 'SAPKgamma'],
      };
      const official = {
        geneNames: {
          1: {
            symbol: 'p38Beta',
            synonyms: ['PRKM11'],
          },
        },
      };
      definedNames = defineGeneNames(entry, official);
    });

    it('should return gene symbol matching uniprot', () => {
      expect(definedNames.symbol).toBe('MAPK11');
    });

    it('should return uniprot synonyms', () => {
      const expected = ['SAPK2', 'SAPKgamma', 'SAPKγ'];
      expect(definedNames.synonyms).toEqual(expected);
    });
  });

  describe('alternative official entry missing for uniprot ID', () => {
    let definedNames;

    beforeAll(() => {
      const entry = {
        gene: 'MAPK11',
        hgnc: 1,
        synonyms: ['SAPK2', 'SAPKgamma'],
      };
      const official = {
        field: 'hgnc',
        geneNames: {},
      };
      definedNames = defineGeneNames(entry, official);
    });

    it('should return gene symbol matching uniprot', () => {
      expect(definedNames.symbol).toBe('MAPK11');
    });

    it('should return uniprot synonyms', () => {
      const expected = ['SAPK2', 'SAPKgamma', 'SAPKγ'];
      expect(definedNames.synonyms).toEqual(expected);
    });
  });

  describe('uniprot ID missing for mapping to alternative official data', () => {
    let definedNames;

    beforeAll(() => {
      const entry = {
        gene: 'MAPK11',
        synonyms: ['SAPK2', 'SAPKgamma'],
      };
      const official = {
        geneNames: {
          field: 'hgnc',
          1: {
            symbol: 'p38Beta',
            synonyms: ['PRKM11'],
          },
        },
      };
      definedNames = defineGeneNames(entry, official);
    });

    it('should return gene symbol matching uniprot', () => {
      expect(definedNames.symbol).toBe('MAPK11');
    });

    it('should return uniprot synonyms', () => {
      const expected = ['SAPK2', 'SAPKgamma', 'SAPKγ'];
      expect(definedNames.synonyms).toEqual(expected);
    });
  });
});
