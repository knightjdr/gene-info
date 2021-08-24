const mongodb = require('mongo-mock');

const database = require('../../connections/database');
const find = require('./find');

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
      { _id: 1, name: 'test', field: 'a' },
      { _id: 2, name: 'test2', field: 'b' },
    ];
    db.collection('test_documents').insertMany(docs, () => {
      done();
    });
  });
});

describe('find', () => {
  it('should find all records in the database', () => (
    find('documents').then((getCollection) => {
      const expected = [
        { _id: 1, name: 'test', field: 'a' },
        { _id: 2, name: 'test2', field: 'b' },
      ];
      expect(getCollection).toEqual(expected);
    })
  ));

  it('should find one record in the database', () => (
    find('documents', { name: 'test' }).then((getCollection) => {
      const expected = [
        { _id: 1, name: 'test', field: 'a' },
      ];
      expect(getCollection).toEqual(expected);
    })
  ));

  it('should find subset returned documents from database', () => (
    find('documents', {}, { _id: 0, field: 1 }).then((getCollection) => {
      const expected = [
        { field: 'a' },
        { field: 'b' },
      ];
      expect(getCollection).toEqual(expected);
    })
  ));

  it('should find sort returned documents from database', () => (
    find('documents', {}, {}, { _id: -1 }).then((getCollection) => {
      const expected = [
        { _id: 2, name: 'test2', field: 'b' },
        { _id: 1, name: 'test', field: 'a' },
      ];
      expect(getCollection).toEqual(expected);
    })
  ));

  it('should find limit returned documents from database', () => (
    find('documents', {}, {}, {}, 1).then((getCollection) => {
      const expected = [
        { _id: 1, name: 'test', field: 'a' },
      ];
      expect(getCollection).toEqual(expected);
    })
  ));
});

describe('Query throwing an error', () => {
  beforeAll(() => {
    // Make database undefined to cause an error to throw.
    database.connection = undefined;
  });

  it('should throw an error', () => (
    expect(find('documents', { name: 'test' })).rejects.not.toBeNull()
  ));
});

