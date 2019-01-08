const uppercaseFirst = require('./uppercase-first');

describe('Uppercase first letter of string', () => {
  it('should make first letter uppercase', () => {
    expect(uppercaseFirst('word')).toBe('Word');
  });
});
