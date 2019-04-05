const mongodb = require('mongo-mock');

const database = require('../../connections/database');
const findOne = require('./find');
const insert = require('./insert');

jest.mock('../../../config', () => (
  {
    database: {
      prefix: 'test_',
    },
  }
));
jest.mock('../../../logger');

beforeAll(async (done) => {
  mongodb.max_delay = 0;
  const { MongoClient } = mongodb;
  const url = 'mongodb://localhost:27017/test';
  // Use connect method to connect to the Server
  MongoClient.connect(url, {}, (err, db) => {
    database.connection = db;
    done();
  });
});

describe('find', () => {
  it('should insert a record in the database', () => {
    const date = new Date().toISOString();
    return insert('insert', { date })
      .then(() => findOne('insert', { date }, {}))
      .then((result) => {
        expect(result[0].date).toBe(date);
      });
  });
});

describe('Query throwing an error', () => {
  beforeAll(() => {
    // Make database undefined to cause an error to throw.
    database.connection = undefined;
  });

  it('should throw an error', () => (
    expect(insert('documents', { name: 'test' })).rejects.not.toBeNull()
  ));
});
