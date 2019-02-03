const arrayUnique = require('./array-unique');

describe('Array unique', () => {
  it('should remove any duplicates items from array', () => {
    const inputs = [
      ['a', 'b', 'A', 'a', 'c', 'c'],
      [1, 5, 23, 1, 1],
      ['a', 'b'],
      ['a'],
      [],
    ];
    const expected = [
      ['a', 'b', 'A', 'c'],
      [1, 5, 23],
      ['a', 'b'],
      ['a'],
      [],
    ];
    inputs.forEach((input, index) => {
      expect(arrayUnique(input)).toEqual(expected[index]);
    });
  });
});
