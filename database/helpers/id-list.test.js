const fs = require('fs');
const mockFS = require('mock-fs');

const idList = require('./id-list');

const mockedFileSystem = {};
mockFS(mockedFileSystem);

afterAll(() => {
  mockFS.restore();
});

describe('Write json', () => {
  it('should convert an array to an object and write to file', async (done) => {
    const arr = ['abc', 'DEF', 'gh', 123];
    await idList('file.json', arr);
    const file = fs.readFileSync('file.json', 'UTF8');
    const expected = '{"abc":1,"DEF":1}';
    expect(file).toEqual(expected);
    done();
  });
});
