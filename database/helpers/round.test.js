const round = require('./round');

describe('Round', () => {
  it('should round to specified decimal', () => {
    expect(round(2.56341, 1)).toBe(2.6);
    expect(round(2.56341, 2)).toBe(2.56);
    expect(round(2.56341, 3)).toBe(2.563);
  });

  it('should round to two decimal places when their is no precision arg', () => {
    expect(round(2.56341)).toBe(2.56);
  });
});
