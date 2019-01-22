const md5 = require('md5');

const deepCopy = require('./deep-copy');

const testValues = {
  arr: [1, 'a', null],
  obj: { a: 1, b: 'x' },
  arrObj: [
    { a: 1, b: 'x' },
    { a: 1, b: [1, 'a', null] },
  ],
};
const md5Expected = {
  arr: md5(testValues.arr),
  obj: md5(testValues.obj),
  arrObj: md5(testValues.arrObj),
};

test('deep copy', () => {
  expect(deepCopy(null)).toBeNull();
  expect(deepCopy('')).toBeNull();
  expect(md5(deepCopy(testValues.arr))).toBe(md5Expected.arr);
  expect(md5(deepCopy(testValues.obj))).toBe(md5Expected.obj);
  expect(md5(deepCopy(testValues.arrObj))).toBe(md5Expected.arrObj);
});
