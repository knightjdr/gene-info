const sort = require('./sort');

describe('Sort', () => {
  it('should sort as booleans', () => {
    expect(sort.bool('a', 'b')).toBe(0);
    expect(sort.bool('1', '1')).toBe(0);
    expect(sort.bool('a', '1')).toBe(0);
    expect(sort.bool(true, false)).toBe(1);
    expect(sort.bool(true, null)).toBe(1);
    expect(sort.bool(false, true)).toBe(-1);
    expect(sort.bool(null, true)).toBe(-1);
  });

  it('should sort as characters', () => {
    expect(sort.character('a', 'b')).toBe(-1);
    expect(sort.character('b', 'a')).toBe(1);
    expect(sort.character('a', 'a')).toBe(0);
    expect(sort.character('a', null)).toBe(-1);
    expect(sort.character(null, 'a')).toBe(1);
    expect(sort.character(null, null)).toBe(0);
    expect(sort.character(1, 'a')).toBe(-1);
    expect(sort.character('a', 1)).toBe(1);
    expect(sort.character(1, 2)).toBe(-1);
    expect(sort.character(2, 12)).toBe(1);
  });

  it('should sort as numbers', () => {
    expect(sort.numeric(1, 2)).toBe(-1);
    expect(sort.numeric(2, 1)).toBe(1);
    expect(sort.numeric(1, 1)).toBe(0);
    expect(sort.numeric(1, null)).toBe(-1);
    expect(sort.numeric(null, 1)).toBe(1);
    expect(sort.numeric(null, null)).toBe(0);
    expect(sort.numeric(1, 'a')).toBe(-1);
    expect(sort.numeric('a', 1)).toBe(1);
    expect(sort.numeric('a', 'b')).toBe(0);
  });
});
