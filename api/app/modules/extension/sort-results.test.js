const sortResults = require('./sort-results');

describe('Sort results', () => {
  describe('gene field', () => {
    it('should put a result with a gene name exactly matching query term first', () => {
      const query = {
        field: 'gene',
        term: 'gene1',
      };
      const matches = [
        { gene: 'gene11' },
        { gene: 'gene1' },
        { gene: 'gene111' },
      ];

      const expected = [
        { gene: 'gene1' },
        { gene: 'gene11' },
        { gene: 'gene111' },
      ];

      expect(sortResults(query, matches)).toEqual(expected);
    });

    it('should ignore case when sorting', () => {
      const query = {
        field: 'gene',
        term: 'GENE1',
      };
      const matches = [
        { gene: 'gene11' },
        { gene: 'gene1' },
        { gene: 'gene111' },
      ];

      const expected = [
        { gene: 'gene1' },
        { gene: 'gene11' },
        { gene: 'gene111' },
      ];

      expect(sortResults(query, matches)).toEqual(expected);
    });

    it('should return input order when nothing matches query term', () => {
      const query = {
        field: 'gene',
        term: 'gene1',
      };
      const matches = [
        { gene: 'gene11' },
        { gene: 'gene1a1' },
        { gene: 'gene111' },
      ];

      const expected = [
        { gene: 'gene11' },
        { gene: 'gene1a1' },
        { gene: 'gene111' },
      ];

      expect(sortResults(query, matches)).toEqual(expected);
    });
  });

  describe('other ID fields field', () => {
    it('should sort results', () => {
      const query = {
        field: 'uniprot',
        term: 'Q9BUL8',
      };
      const matches = [
        { gene: 'gene1', uniprot: 'Q9BUL8x' },
        { gene: 'gene2', uniprot: 'Q9BUL8' },
      ];

      const expected = [
        { gene: 'gene2', uniprot: 'Q9BUL8' },
        { gene: 'gene1', uniprot: 'Q9BUL8x' },
      ];

      expect(sortResults(query, matches)).toEqual(expected);
    });
  });
});
