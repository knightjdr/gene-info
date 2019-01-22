const arrSort = require('./arr-sort');

describe('Sort array', () => {
  it('should sort alphabetically', () => {
    const expected = ['a', 'b', 'B', 'c', 'ca'];
    expect(arrSort.alphabetical(['b', 'a', 'B', 'c', 'ca'])).toEqual(expected);
  });
});
