const createQuery = require('./create-query');
const find = require('../db-methods/find');
const findOne = require('../db-methods/find-one');
const report = require('./report');
const tracking = require('../tracking/tracking');
const validate = require('./validate');

jest.mock('./create-query');
createQuery.mockReturnValue({});
jest.mock('../db-methods/find');
jest.mock('../db-methods/find-one');
jest.mock('../tracking/tracking');
jest.mock('./validate');

const req = {
  params: {
    field: 'auto',
    species: 'Homo-sapiens',
    term: 'test',
  },
};
const res = {
  end: jest.fn(),
  send: jest.fn(),
  status: jest.fn(),
};

const sleep = ms => (
  new Promise(resolve => setTimeout(resolve, ms))
);

describe('Report', () => {
  describe('validation error', () => {
    beforeAll(async (done) => {
      validate.validate.mockReturnValue({
        err: true,
        message: 'Validation error',
      });
      res.end.mockClear();
      res.status.mockClear();
      report(req, res);
      await sleep(200);
      done();
    });

    it('should set status message', () => {
      expect(res.statusMessage).toBe('Validation error');
    });

    it('should set status', () => {
      expect(res.status).toHaveBeenCalledWith(400);
    });

    it('should end response', () => {
      expect(res.end).toHaveBeenCalled();
    });
  });

  describe('successful find', () => {
    describe('find gene', () => {
      beforeAll(async (done) => {
        const results = [
          { gene: 'test', name: 'test gene' },
          { gene: 'test2', name: 'test gene2' },
        ];
        find.mockResolvedValue(results);
        validate.validate.mockReturnValue({
          field: 'gene',
          species: 'Homo sapiens',
          term: 'test',
        });
        createQuery.mockClear();
        find.mockClear();
        res.send.mockClear();
        report(req, res);
        await sleep(200);
        done();
      });

      it('should create query', () => {
        expect(createQuery).toHaveBeenCalledWith('gene', 'test');
      });

      it('should call find method', () => {
        expect(find).toHaveBeenCalledWith('Homo sapiens', {}, {}, { gene: 1 });
      });

      it('should send response', () => {
        const expected = [
          { gene: 'test', name: 'test gene' },
          { gene: 'test2', name: 'test gene2' },
        ];
        expect(res.send).toHaveBeenCalledWith(expected);
      });

      it('should call tracking method', () => {
        expect(tracking).toHaveBeenCalledWith('Homo sapiens', 'gene', 'test');
      });
    });

    describe('find something other than gene', () => {
      beforeAll(async (done) => {
        const results = [
          { gene: 'test', name: 'test gene' },
        ];
        findOne.mockResolvedValue(results);
        validate.validate.mockReturnValue({
          field: 'uniprot',
          species: 'Homo sapiens',
          term: 'test',
        });
        createQuery.mockClear();
        findOne.mockClear();
        res.send.mockClear();
        report(req, res);
        await sleep(200);
        done();
      });

      it('should create query', () => {
        expect(createQuery).toHaveBeenCalledWith('uniprot', 'test');
      });

      it('should call find method', () => {
        expect(findOne).toHaveBeenCalledWith('Homo sapiens', {}, {}, { gene: 1 });
      });

      it('should call tracking method', () => {
        expect(tracking).toHaveBeenCalledWith('Homo sapiens', 'uniprot', 'test');
      });

      it('should send response', () => {
        const expected = [
          { gene: 'test', name: 'test gene' },
        ];
        expect(res.send).toHaveBeenCalledWith(expected);
      });
    });

    describe('find nothing', () => {
      describe('missing return value', () => {
        beforeAll(async (done) => {
          find.mockResolvedValue();
          validate.validate.mockReturnValue({
            field: 'gene',
            species: 'Homo sapiens',
            term: 'test',
          });
          createQuery.mockClear();
          find.mockClear();
          res.send.mockClear();
          report(req, res);
          await sleep(200);
          done();
        });

        it('should send response', () => {
          const expected = [];
          expect(res.send).toHaveBeenCalledWith(expected);
        });
      });

      describe('empty array', () => {
        beforeAll(async (done) => {
          find.mockResolvedValue([]);
          validate.validate.mockReturnValue({
            field: 'gene',
            species: 'Homo sapiens',
            term: 'test',
          });
          createQuery.mockClear();
          find.mockClear();
          res.send.mockClear();
          report(req, res);
          await sleep(200);
          done();
        });

        it('should send response', () => {
          const expected = [];
          expect(res.send).toHaveBeenCalledWith(expected);
        });
      });
    });
  });

  describe('find error', () => {
    beforeAll(async (done) => {
      find.mockRejectedValue();
      validate.validate.mockReturnValue({
        field: 'gene',
        species: 'Homo-sapiens',
        term: 'test',
      });
      res.end.mockClear();
      res.status.mockClear();
      report(req, res);
      await sleep(200);
      done();
    });

    it('should set status', () => {
      expect(res.status).toHaveBeenCalledWith(500);
    });

    it('should end response', () => {
      expect(res.end).toHaveBeenCalled();
    });
  });
});
