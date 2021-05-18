const { convertMapToObj, convertObjToMap } = require('./convert-object-to-map');

describe('Convert Map to Object', () => {
  it('should convert a Map to an Object', () => {
    const map = new Map([
      ['abc', 123],
      ['def', 456],
      ['geh', 789],
    ]);

    const expected = {
      abc: 123,
      def: 456,
      geh: 789,
    };
    expect(convertMapToObj(map)).toEqual(expected);
  });
});

describe('Convert Object to Map', () => {
  it('should convert a Map to an Object', () => {
    const obj = {
      abc: 123,
      def: 456,
      geh: 789,
    };

    const expected = new Map([
      ['abc', 123],
      ['def', 456],
      ['geh', 789],
    ]);
    expect(convertObjToMap(obj)).toEqual(expected);
  });
});
