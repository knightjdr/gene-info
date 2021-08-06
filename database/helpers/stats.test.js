const round = require('./round');
const { mean, median, stddev } = require('./stats');

const arr = [
  40.73,
  80.2,
  59.54,
  54.91,
  93.57,
  35.69,
  99.44,
  98.14,
  89.3,
  21.7,
  54.26,
  64.02,
  18.05,
  0.18,
  14.79,
  60.44,
  47.63,
  52.33,
  75.62,
  65.03,
];

describe('Stats', () => {
  describe('mean', () => {
    it('should return 0 for an empty array', () => {
      const expected = 0;
      expect(mean([])).toEqual(expected);
    });

    it('should return mean for an array', () => {
      const expected = 56.2785;
      const actual = round(mean(arr), 4);
      expect(actual).toEqual(expected);
    });
  });

  describe('median', () => {
    it('should return 0 for an empty array', () => {
      const expected = 0;
      expect(median([])).toEqual(expected);
    });

    it('should return median for an array', () => {
      const expected = 57.225;
      const actual = round(median(arr), 4);
      expect(actual).toEqual(expected);
    });
  });

  describe('stddev', () => {
    it('should return 0 for an empty array', () => {
      const expected = 0;
      expect(stddev([])).toEqual(expected);
    });

    it('should return std for an array', () => {
      const expected = 27.834;
      const actual = round(stddev(arr), 4);
      expect(actual).toEqual(expected);
    });
  });
});
