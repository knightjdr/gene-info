const fs = require('fs');
const mockFS = require('mock-fs');

const writeJSON = require('./write-json');

const mockedFileSystem = {};
mockFS(mockedFileSystem);

afterAll(() => {
  mockFS.restore();
});

describe('Write json', () => {
  it('should read a json file to javascript object', async () => {
    const obj = {
      'key-a': 'value-a',
      'key-b': 'value-b',
      'key-c': [1, 2, 3],
    };
    await writeJSON('file.json', obj);
    const file = fs.readFileSync('file.json', 'UTF8');
    const expected = '{"key-a":"value-a","key-b":"value-b","key-c":[1,2,3]}';
    expect(file).toEqual(expected);
  });

  it('should throw error when write folder is missing', () => {
    const expected = new Error("ENOENT, no such file or directory 'missing/file.json'");
    return expect(writeJSON('missing/file.json', {})).rejects.toEqual(expected);
  });
});
