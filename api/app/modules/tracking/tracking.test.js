const insert = require('../db-methods/insert');
const ipInfo = require('./ip-info');
const tracking = require('./tracking');

jest.mock('../db-methods/insert');
jest.mock('./ip-info');
ipInfo.mockReturnValue({ country: 'CA' });

describe('Tracking', () => {
  describe('successful insert', () => {
    let result;

    beforeAll(async (done) => {
      insert.mockResolvedValue();
      tracking('127.0.0.1', 'Homo sapiens', 'gene', 'PDCD10')
        .then((val) => {
          result = val;
          done();
        });
    });

    it('should resolve with undefined', () => {
      expect(result).toBeUndefined();
    });

    it('should ge ipInfo', async () => {
      expect(ipInfo).toHaveBeenCalledWith('127.0.0.1');
    });

    it('should insert into tracking db', async () => {
      const expected = {
        country: 'CA',
        field: 'gene',
        gene: 'PDCD10',
        species: 'Homo sapiens',
      };
      expect(insert).toHaveBeenCalledWith('tracking', expected);
    });
  });

  describe('unsuccessful insert', () => {
    let result;

    beforeAll(async (done) => {
      insert.mockRejectedValue(new Error('test error'));
      tracking('127.0.0.1', 'Homo sapiens', 'gene', 'PDCD10')
        .then((val) => {
          result = val;
          done();
        });
    });

    it('should resolve with an error', () => {
      expect(result).toEqual(new Error('test error'));
    });
  });
});
