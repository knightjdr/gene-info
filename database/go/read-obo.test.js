const path = require('path');

const { allParents, findImmediateParents, readObo } = require('./read-obo');

const testFile = path.resolve(__dirname, '../files/example/obo.txt');

describe('Obo file', () => {
  describe('find all parents for GO terms', () => {
    it('should find all parents', () => {
      const immediateParents = {
        'GO:0016607': ['GO:0016604'],
        'GO:0016604': ['GO:0044451'],
        'GO:0044451': ['GO:0044428', 'GO:0005654'],
        'GO:0005654': ['GO:0044428', 'GO:0031981'],
        'GO:0031981': ['GO:0044428'],
        'GO:0044428': ['GO:0005634'],
        'GO:0005634': [],
      };
      const expected = {
        'GO:0016607': ['GO:0016604', 'GO:0044451', 'GO:0044428', 'GO:0005654', 'GO:0005634', 'GO:0031981'],
        'GO:0016604': ['GO:0044451', 'GO:0044428', 'GO:0005654', 'GO:0005634', 'GO:0031981'],
        'GO:0044451': ['GO:0044428', 'GO:0005654', 'GO:0005634', 'GO:0031981'],
        'GO:0005654': ['GO:0044428', 'GO:0031981', 'GO:0005634'],
        'GO:0031981': ['GO:0044428', 'GO:0005634'],
        'GO:0044428': ['GO:0005634'],
        'GO:0005634': [],
      };
      expect(allParents(immediateParents)).toEqual(expected);
    });
  });

  describe('find immediate parents for GO terms', () => {
    let results;

    beforeAll(async (done) => {
      results = await findImmediateParents(testFile);
      done();
    });

    it('should map ids to names', () => {
      const expected = {
        'GO:0016607': 'nuclear speck',
        'GO:0016604': 'nuclear body',
        'GO:0044451': 'nucleoplasm part',
        'GO:0005654': 'nucleoplasm',
        'GO:0031981': 'nuclear lumen',
        'GO:0044428': 'nuclear part',
        'GO:0005634': 'nucleus',
      };
      expect(results.map).toEqual(expected);
    });

    it('should find immediate parents', () => {
      const expected = {
        'GO:0016607': ['GO:0016604'],
        'GO:0016604': ['GO:0044451'],
        'GO:0044451': ['GO:0044428', 'GO:0005654'],
        'GO:0005654': ['GO:0044428', 'GO:0031981'],
        'GO:0031981': ['GO:0044428'],
        'GO:0044428': ['GO:0005634'],
        'GO:0005634': [],
      };
      expect(results.parents).toEqual(expected);
    });
  });

  describe('read obo file', () => {
    it('should return object with map from ID to name and parents', async (done) => {
      const expected = {
        map: {
          'GO:0016607': 'nuclear speck',
          'GO:0016604': 'nuclear body',
          'GO:0044451': 'nucleoplasm part',
          'GO:0005654': 'nucleoplasm',
          'GO:0031981': 'nuclear lumen',
          'GO:0044428': 'nuclear part',
          'GO:0005634': 'nucleus',
        },
        parents: {
          'GO:0016607': ['GO:0016604', 'GO:0044451', 'GO:0044428', 'GO:0005654', 'GO:0005634', 'GO:0031981'],
          'GO:0016604': ['GO:0044451', 'GO:0044428', 'GO:0005654', 'GO:0005634', 'GO:0031981'],
          'GO:0044451': ['GO:0044428', 'GO:0005654', 'GO:0005634', 'GO:0031981'],
          'GO:0005654': ['GO:0044428', 'GO:0031981', 'GO:0005634'],
          'GO:0031981': ['GO:0044428', 'GO:0005634'],
          'GO:0044428': ['GO:0005634'],
          'GO:0005634': [],
        },
      };
      const results = await readObo(testFile);
      expect(results).toEqual(expected);
      done();
    });
  });
});
