const init = require('./init');
const { MongoClient } = require('mongodb');

const err = new Error('err');

// mock config
jest.mock('../../config', () => (
  {
    database: {
      name: 'test',
      pw: 'password',
      user: 'user',
    },
  }
));

// mock MongoClient
const mockClient = {
  db: dbInstance => (
    dbInstance
  ),
};
jest.mock('mongodb');
MongoClient.connect
  .mockImplementationOnce(() => Promise.resolve(mockClient))
  .mockImplementationOnce(() => Promise.reject(err));

describe('database initialization', () => {
  it('should give success', () => (
    init().then((data) => {
      expect(data).toEqual({
        client: mockClient,
        db: 'test',
      });
    })
  ));

  test('should give error', () => (
    init().catch((data) => {
      expect(data).toEqual(new Error('err'));
    })
  ));
});
