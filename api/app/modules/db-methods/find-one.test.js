const mongodb = require('mongo-mock');

const database = require('../../connections/database');
const findOne = require('./find-one');

jest.mock('../../../config', () => (
  {
    database: {
      prefix: 'test_',
    },
  }
));
jest.mock('../../connections/database', () => ({
  connection: null,
}));
jest.mock('../../../logger');

beforeAll((done) => {
  mongodb.max_delay = 0;
  const { MongoClient } = mongodb;
  const url = 'mongodb://localhost:27017/test';
  // Use connect method to connect to the Server
  MongoClient.connect(url, {}, (err, db) => {
    database.connection = db;
    // Insert some documents
    const docs = [
      { _id: 1, name: 'test' },
      { _id: 2, name: 'p38β' },
    ];
    db.collection('test_documents').insertMany(docs, () => {
      done();
    });
  });
});

describe('Query for a single entry', () => {
  describe('when successful', () => {
    it('should find one record in the database', () => (
      findOne('documents', { name: 'test' }).then((getCollection) => {
        const expected = [{ _id: 1, name: 'test' }];
        expect(getCollection).toEqual(expected);
      })
    ));

    it('should find record with greek letter', () => (
      findOne('documents', { name: 'p38β' }).then((getCollection) => {
        const expected = [{ _id: 2, name: 'p38β' }];
        expect(getCollection).toEqual(expected);
      })
    ));

    it('should subset returned documents from database', () => (
      findOne('documents', { name: 'test' }, { _id: 0, name: 1 }).then((getCollection) => {
        const expected = [{ name: 'test' }];
        expect(getCollection).toEqual(expected);
      })
    ));

    it('should not find a record in the database', () => (
      findOne('documents', { name: 'test-missing' }).then((getCollection) => {
        const expected = [];
        expect(getCollection).toEqual(expected);
      })
    ));
  });
});

describe('Query throwing an error', () => {
  beforeAll(() => {
    // Make database undefined to cause an error to throw.
    database.connection = undefined;
  });

  it('should throw an error', () => (
    expect(findOne('documents', { name: 'test' })).rejects.not.toBeNull()
  ));
});
