process.env.NODE_ENV = test;
const database = require('../../connections/database');
const findOne = require('./find');
const insert = require('./insert');

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

beforeAll(() => (
  database.init()
));
afterAll(() => (
  database.close()
));

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
