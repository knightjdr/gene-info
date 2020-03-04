const sortResults = require('./sort-results');

describe('Sort results', () => {
  it('should put a result with a gene name exactly matching query term first', () => {
    const term = 'gene1';
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

    expect(sortResults(term, matches)).toEqual(expected);
  });

  it('should ignore case when sorting', () => {
    const term = 'GENE1';
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

    expect(sortResults(term, matches)).toEqual(expected);
  });

  it('should return input order when nothing matches query term', () => {
    const term = 'gene1';
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

    expect(sortResults(term, matches)).toEqual(expected);
  });
});
