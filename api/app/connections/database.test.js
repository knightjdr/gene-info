/* eslint global-require: "off" */
const database = require('./database');
const init = require('./init');
const Logger = require('../../logger');

const err = new Error('err');
// mock init
jest.mock('./init');

// mock logger
jest.mock('../../logger');
Logger.error = jest.fn();
Logger.info = jest.fn();

afterEach(() => {
  database.client = null;
  database.connection = null;
  Logger.error.mockClear();
  Logger.info.mockClear();
});

describe('database connection', () => {
  describe('with successful connection', () => {
    beforeAll(() => {
      init.mockResolvedValue({ client: 'client', db: 'database' });
    });

    it('should resolve', () => {
      database.init()
        .then(() => {
          expect(database.connection).toBe('database');
        });
    });
  });

  describe('with unsuccesful connection', () => {
    beforeAll(() => {
      init.mockRejectedValue(err);
    });

    it('reject unsuccessful connection', () => {
      database.init()
        .catch(() => {
          expect(database.connection).toBeNull();
        });
    });
  });

  describe('on closing', () => {
    describe('when connection exists', () => {
      beforeAll(() => {
        // create mock resolved value for mongoDB connection with close method
        const client = {
          close: () => (new Promise((resolve) => { resolve(); })),
        };
        init.mockResolvedValue({ client, db: 'database' });
        return database.init();
      });

      it('should close successfully', () => {
        database.close().then(() => {
          expect(database.client).toBeNull();
          expect(database.connection).toBeNull();
          expect(Logger.info).toBeCalled();
        });
      });
    });

    describe('fail when connection exists', () => {
      // create mock rejected value for mongoDB connection with close method
      const client = {
        close: () => (new Promise((resolve, reject) => { reject(); })),
      };

      beforeAll(() => {
        init.mockResolvedValue({ client, db: 'database' });
        return database.init();
      });

      it('should occur gracefully', () => {
        database.close().catch(() => {
          expect(database.client).toEqual(client);
          expect(database.connection).toBe('database');
          expect(Logger.error).toBeCalled();
        });
      });
    });

    describe('when connection does not exist', () => {
      it('should close successfully', () => {
        database.close().then(() => {
          expect(database.client).toBeNull();
          expect(database.connection).toBeNull();
          expect(Logger.info).not.toBeCalled();
          expect(Logger.error).not.toBeCalled();
        });
      });
    });
  });
});
