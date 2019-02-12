const mockFS = require('mock-fs');

const readJSON = require('./read-json');

const mockedFileSystem = {
  'file.json': `{
    "key-a": "value-a",
    "key-b": "value-b",
    "key-c": [1, 2, 3]
  }`,
};
mockFS(mockedFileSystem);

afterAll(() => {
  mockFS.restore();
});

describe('Read json', () => {
  it('should read a json file to javascript object', () => {
    const expected = {
      'key-a': 'value-a',
      'key-b': 'value-b',
      'key-c': [1, 2, 3],
    };
    return expect(readJSON('file.json')).resolves.toEqual(expected);
  });

  it('should throw error when file is missing', () => {
    const expected = new Error("ENOENT, no such file or directory 'missing.json'");
    return expect(readJSON('missing.json')).rejects.toEqual(expected);
  });
});
