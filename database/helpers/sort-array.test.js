const sortArray = require('./sort-array');

describe('Sort array', () => {
  describe('Numerically by key', () => {
    let arr;

    beforeAll(() => {
      arr = [
        { ic: 1.475 },
        { ic: 0.077 },
        { ic: 0.189 },
        { ic: 0.119 },
        { ic: 0.289 },
        { ic: 1.157 },
        { ic: 0.646 },
        { ic: 0.6 },
        { ic: 0.703 },
        { ic: 0.368 },
        { ic: 0.879 },
        { ic: 0.218 },
        { ic: 0.255 },
      ];
    });

    it('should sort in descending order', () => {
      const expected = [
        { ic: 1.475 },
        { ic: 1.157 },
        { ic: 0.879 },
        { ic: 0.703 },
        { ic: 0.646 },
        { ic: 0.6 },
        { ic: 0.368 },
        { ic: 0.289 },
        { ic: 0.255 },
        { ic: 0.218 },
        { ic: 0.189 },
        { ic: 0.119 },
        { ic: 0.077 },
      ];
      expect(sortArray.numericalByKey(arr, 'ic', 'des')).toEqual(expected);
    });

    it('should sort in descending order', () => {
      const expected = [
        { ic: 0.077 },
        { ic: 0.119 },
        { ic: 0.189 },
        { ic: 0.218 },
        { ic: 0.255 },
        { ic: 0.289 },
        { ic: 0.368 },
        { ic: 0.6 },
        { ic: 0.646 },
        { ic: 0.703 },
        { ic: 0.879 },
        { ic: 1.157 },
        { ic: 1.475 },
      ];
      expect(sortArray.numericalByKey(arr, 'ic', 'asc')).toEqual(expected);
    });
  });
});
