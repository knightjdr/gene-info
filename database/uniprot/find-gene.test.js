/* eslint no-console: 0 */

const convertXML = require('../helpers/convert-xml');
const findGene = require('./find-gene');
const xmlEntry = require('../files/example/xml-entry');

let exampleEntry;
beforeAll(async () => {
  ({ entry: exampleEntry } = await convertXML(xmlEntry));
});

describe('Find gene names', () => {
  describe('entry with full information', () => {
    let names;

    beforeAll(() => {
      names = findGene(exampleEntry.gene);
    });

    it('should return gene name as primary', () => {
      const expected = 'PDCD10';
      expect(names.primary).toBe(expected);
    });

    it('should return locus', () => {
      const expected = 'locusTest';
      expect(names.locus).toBe(expected);
    });

    it('should return orf name(s)', () => {
      const expected = [
        'orfTest1',
        'orfTest2',
      ];
      expect(names.orf).toEqual(expected);
    });

    it('should return synonyms', () => {
      const expected = [
        'CCM3',
        'TFAR15',
      ];
      expect(names.synonyms).toEqual(expected);
    });
  });

  describe('entry with no information', () => {
    let names;

    beforeAll(() => {
      names = findGene([{ name: [] }]);
    });

    it('should return empty string for gene name', () => {
      const expected = '';
      expect(names.primary).toBe(expected);
    });

    it('should return empty string for locus', () => {
      const expected = '';
      expect(names.locus).toBe(expected);
    });

    it('should return empty array for orf name(s)', () => {
      const expected = [];
      expect(names.orf).toEqual(expected);
    });

    it('should return empty array for synonyms', () => {
      const expected = [];
      expect(names.synonyms).toEqual(expected);
    });
  });
});
