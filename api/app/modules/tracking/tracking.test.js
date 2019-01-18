const insert = require('../db-methods/insert');
const tracking = require('./tracking');

jest.mock('../db-methods/insert');

describe('Tracking', () => {
  describe('successful insert', () => {
    let result;

    beforeAll(async (done) => {
      insert.mockResolvedValue();
      tracking('Homo sapiens', 'gene', true)
        .then((val) => {
          result = val;
          done();
        });
    });

    it('should resolve with undefined', () => {
      expect(result).toBeUndefined();
    });

    it('should insert into tracking db', async () => {
      const expected = {
        field: 'gene',
        known: true,
        species: 'Homo sapiens',
      };
      expect(insert).toHaveBeenCalledWith('tracking', expected);
    });
  });

  describe('unsuccessful insert', () => {
    let result;

    beforeAll(async (done) => {
      insert.mockRejectedValue(new Error('test error'));
      tracking('Homo sapiens', 'gene', true)
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
