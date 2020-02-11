/* eslint global-require: "off" */
const fs = require('fs');

// expected messages
const messages = {
  output: {
    combined: /\d+-\d+-\d+, \d+:\d+:\d+ [apm.]+ - error: test\n\d+-\d+-\d+, \d+:\d+:\d+ [apm.]+ - info: test/,
    error: /\d+-\d+-\d+, \d+:\d+:\d+ [apm.]+ - error: test/,
  },
};

// need a short delay after logging before checking tests
const promiseDelay = () => (
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  })
);

afterAll(() => {
  fs.unlinkSync('api/logs/test-combined.log');
  fs.unlinkSync('api/logs/test-error.log');
});

describe('Logging', () => {
  describe('in production', () => {
    let Logger;

    beforeAll(() => {
      jest.mock('./config', () => (
        {
          logPrefix: 'test-',
        }
      ));
      process.env.NODE_ENV = 'production';
      Logger = require('./logger');
      Logger.error('test');
      Logger.info('test');
    });

    it('should log all messages to combined.log', async () => {
      // need a delay with this test because logger doesn't write immediately
      await promiseDelay();
      const file = fs.readFileSync('api/logs/test-combined.log', 'utf8');
      expect(file).toMatch(messages.output.combined);
    });

    it('should log error messages to error.log', async () => {
      // need a delay with this test because logger doesn't write immediately
      await promiseDelay();
      const file = fs.readFileSync('api/logs/test-error.log', 'utf8');
      expect(file).toMatch(messages.output.error);
    });
  });
});
