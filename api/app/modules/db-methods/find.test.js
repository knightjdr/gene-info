process.env.NODE_ENV = test;
const database = require('../../connections/database');
const find = require('./find');
const { ObjectID } = require('mongodb');

// mock config
jest.mock('../../../config', () => (
  {
    database: {
      name: 'sandbox',
      prefix: 'test_',
      pw: 'sandboxpw',
      user: 'sandbox',
    },
  }
));
// mock logger
jest.mock('../../../logger');

// expected return values
const response = {
  all: [
    { _id: ObjectID('5aa6ac91c63eb43ab21a072c'), name: 'test', field: 'a' },
    { _id: ObjectID('5aa6ac98c63eb43ab21a072d'), name: 'test2', field: 'b' },
  ],
  limit: [
    { _id: ObjectID('5aa6ac91c63eb43ab21a072c'), name: 'test', field: 'a' },
  ],
  one: [
    { _id: ObjectID('5aa6ac91c63eb43ab21a072c'), name: 'test', field: 'a' },
  ],
  sorted: [
    { _id: ObjectID('5aa6ac98c63eb43ab21a072d'), name: 'test2', field: 'b' },
    { _id: ObjectID('5aa6ac91c63eb43ab21a072c'), name: 'test', field: 'a' },
  ],
  subset: [
    { field: 'a' },
    { field: 'b' },
  ],
};

beforeAll(() => (
  database.init()
));
afterAll(() => (
  database.close()
));

describe('find', () => {
  it('should find all records in the database', () => (
    find('get').then((getCollection) => {
      expect(getCollection).toEqual(response.all);
    })
  ));

  it('should find one record in the database', () => (
    find('get', { name: 'test' }).then((getCollection) => {
      expect(getCollection).toEqual(response.one);
    })
  ));

  it('should find subset returned documents from database', () => (
    find('get', {}, { _id: 0, field: 1 }).then((getCollection) => {
      expect(getCollection).toEqual(response.subset);
    })
  ));

  it('should find sort returned documents from database', () => (
    find('get', {}, {}, { _id: -1 }).then((getCollection) => {
      expect(getCollection).toEqual(response.sorted);
    })
  ));

  it('should find limit returned documents from database', () => (
    find('get', {}, {}, {}, 1).then((getCollection) => {
      expect(getCollection).toEqual(response.limit);
    })
  ));
});
