const convertGreek = require('./convert-greek');

describe('Convert greek words to letters', () => {
  it('should convert greek words, regardless of case', () => {
    const arr = [
      'aaAlpha',
      'aaalpha',
      'aaalphaalphaaa',
      'aax',
      'Beta',
      'BetaBeta',
      'xBetabetaxx',
      'xbetagammax',
    ];
    const expected = [
      'aaα',
      'aaα',
      'aaααaa',
      'β',
      'ββ',
      'xββxx',
      'xβγx',
    ];
    expect(convertGreek(arr)).toEqual(expected);
  });
});
