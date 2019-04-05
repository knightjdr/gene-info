const regexpEscape = require('./regexp-escape');

describe('Escape strings for regex', () => {
  it('should escape special characters', () => {
    const characters = ['^', '$', '\\', '.', '*', '+', '?', '(', ')', '[', ']', '{', '}', '|'];
    characters.forEach((character) => {
      const str = `abcd${character}efgh`;
      const expected = `abcd\\${character}efgh`;
      expect(regexpEscape(str)).toBe(expected);
    });
  });

  it('should not escape certain special characters', () => {
    const characters = ['-', '/'];
    characters.forEach((character) => {
      const str = `abcd${character}efgh`;
      const expected = `abcd${character}efgh`;
      expect(regexpEscape(str)).toBe(expected);
    });
  });

  it('should match strings with special characters', () => {
    const strings = [
      'abcd-efgh',
      'abcd/efgh',
      'abcd^efgh',
      'abcd$efgh',
      'abcd\\efgh',
      'abcd.efgh',
      'abcd*efgh',
      'abcd+efgh',
      'abcd?efgh',
      'abcd(efgh',
      'abcd)efgh',
      'abcd[efgh',
      'abcd]efgh',
      'abcd{efgh',
      'abcd}efgh',
      'abcd|efgh',
    ];
    strings.forEach((str) => {
      const re = new RegExp(regexpEscape(str));
      expect(re.test(str)).toBeTruthy();
    });
  });
});
