const createQuery = require('./create-query');

describe('Create query', () => {
  it('should return a query object for gene field', () => {
    const searchString = '^test$';
    const re = new RegExp(searchString, 'i');
    const expected = {
      $or: [
        { gene: { $regex: re } },
        { synonyms: re },
      ],
    };
    expect(createQuery('gene', 'test')).toEqual(expected);
  });

  it('should return a query object for non gene field', () => {
    const expected = {
      uniprot: 'test',
    };
    expect(createQuery('uniprot', 'test')).toEqual(expected);
  });
});
