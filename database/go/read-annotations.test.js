const path = require('path');

const readAnnotations = require('./read-annotations');

const testFile = path.resolve(__dirname, '../files/example/annotations.txt');

describe('Read annotations', () => {
  describe('read return an array of GO terms for each gene', () => {
    it('should return object with map from ID to name and parents', async (done) => {
      const expected = {
        HNRNPUL1: ['GO:0005654', 'GO:0005654', 'GO:0005654', 'GO:0006396', 'GO:0009615', 'GO:0019899'],
        CHCHD7: ['GO:0003674', 'GO:0005575', 'GO:0005758', 'GO:0008150'],
        MSTO1: ['GO:0003674', 'GO:0005737', 'GO:0005741', 'GO:0007005', 'GO:0048311'],
        PHF23: ['GO:0005515', 'GO:0005654', 'GO:0005737', 'GO:0006914', 'GO:0031398', 'GO:0046872', 'GO:1901097', 'GO:1902902'],
        PDCD10: ['GO:0000139', 'GO:0001525', 'GO:0005515', 'GO:0005515', 'GO:0005515', 'GO:0005515', 'GO:0005515', 'GO:0005515', 'GO:0005515'],
      };
      const results = await readAnnotations(testFile);
      expect(results).toEqual(expected);
      done();
    });
  });
});
