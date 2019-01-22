const arrSortByTwoKey = require('./arr-sort-by-two-keys');

const testArray = [
  { a: 'd', b: 3, c: true },
  { a: 'd', b: 2, c: true },
  { a: 'a', b: 2, c: false },
  { a: 'a', b: 2, c: false },
  { a: 'e', b: 4, c: false },
];

describe('sort array of object by two keys', () => {
  describe('with invalid input', () => {
    it('should return undefined when array not supplied', () => {
      expect(arrSortByTwoKey()).toBeUndefined();
    });

    it('should return input when not an array', () => {
      expect(arrSortByTwoKey(1)).toBe(1);
    });

    it('should return input when not an array of objects', () => {
      expect(arrSortByTwoKey(['a'])).toEqual(['a']);
    });

    it('should return input when first key not supplied', () => {
      expect(arrSortByTwoKey(testArray)).toEqual(testArray);
    });

    it('should return input when second key not supplied', () => {
      expect(arrSortByTwoKey(testArray, 'a')).toEqual(testArray);
    });
  });

  describe('ascending sort', () => {
    it('should sort character and numeric values', () => {
      const expected = [
        { a: 'a', b: 2, c: false },
        { a: 'a', b: 2, c: false },
        { a: 'd', b: 2, c: true },
        { a: 'd', b: 3, c: true },
        { a: 'e', b: 4, c: false },
      ];
      expect(arrSortByTwoKey(testArray, 'a', 'b', 'asc', 'character', 'numeric')).toEqual(expected);
    });

    it('should sort character and boolean values', () => {
      const expected = [
        { a: 'a', b: 2, c: false },
        { a: 'a', b: 2, c: false },
        { a: 'e', b: 4, c: false },
        { a: 'd', b: 2, c: true },
        { a: 'd', b: 3, c: true },
      ];
      expect(arrSortByTwoKey(testArray, 'c', 'b', 'asc', 'bool', 'numeric')).toEqual(expected);
    });
  });

  describe('descending sort', () => {
    it('should sort character and numeric values', () => {
      const expected = [
        { a: 'e', b: 4, c: false },
        { a: 'd', b: 3, c: true },
        { a: 'd', b: 2, c: true },
        { a: 'a', b: 2, c: false },
        { a: 'a', b: 2, c: false },
      ];
      expect(arrSortByTwoKey(testArray, 'a', 'b', 'des', 'character', 'numeric')).toEqual(expected);
    });

    it('should sort character and boolean values', () => {
      const expected = [
        { a: 'd', b: 3, c: true },
        { a: 'd', b: 2, c: true },
        { a: 'e', b: 4, c: false },
        { a: 'a', b: 2, c: false },
        { a: 'a', b: 2, c: false },
      ];
      expect(arrSortByTwoKey(testArray, 'c', 'b', 'des', 'bool', 'numeric')).toEqual(expected);
    });
  });
});
