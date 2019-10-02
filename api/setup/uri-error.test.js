const uriError = require('./uri-error');

const next = jest.fn();
const res = {
  send: jest.fn(),
};

describe('URI error middleware', () => {
  describe('valid uri', () => {
    beforeAll(() => {
      next.mockClear();
      res.send.mockClear();
      const req = {
        path: '/Homo-sapiens/gene/pdcd10',
      };
      uriError(req, res, next);
    });

    it('should call next', () => {
      expect(next).toHaveBeenCalled();
    });

    it('should not call res.send', () => {
      expect(res.send).not.toHaveBeenCalled();
    });
  });

  describe('invalid uri', () => {
    beforeAll(() => {
      next.mockClear();
      res.send.mockClear();
      const req = {
        path: '/Homo-sapiens/gene/%',
      };
      uriError(req, res, next);
    });

    it('should not call next', () => {
      expect(next).not.toHaveBeenCalled();
    });

    it('should call res.send', () => {
      expect(res.send).toHaveBeenCalledWith([]);
    });
  });
});
