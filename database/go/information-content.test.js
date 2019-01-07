const { informationContent, termGeneList } = require('./information-content');

describe('Information content', () => {
  describe('gene term lists', () => {
    it('should return a list of genes for each GO term', () => {
      const genes = {
        a: ['GO:0016607'],
        b: ['GO:0016604'],
        c: ['GO:0044451', 'GO:0088888'],
        d: ['GO:0005634'],
        e: ['GO:0044428'],
      };
      const parents = {
        'GO:0016607': ['GO:0016604', 'GO:0044451', 'GO:0044428', 'GO:0005654', 'GO:0005634', 'GO:0031981'],
        'GO:0016604': ['GO:0044451', 'GO:0044428', 'GO:0005654', 'GO:0005634', 'GO:0031981'],
        'GO:0044451': ['GO:0044428', 'GO:0005654', 'GO:0005634', 'GO:0031981'],
        'GO:0005654': ['GO:0044428', 'GO:0031981', 'GO:0005634'],
        'GO:0031981': ['GO:0044428', 'GO:0005634'],
        'GO:0044428': ['GO:0005634'],
        'GO:0005634': [],
        'GO:0088888': ['GO:0099999'],
        'GO:0099999': [],
      };
      const expected = {
        'GO:0016607': ['a'],
        'GO:0016604': ['a', 'b'],
        'GO:0044451': ['a', 'b', 'c'],
        'GO:0005654': ['a', 'b', 'c'],
        'GO:0031981': ['a', 'b', 'c'],
        'GO:0044428': ['a', 'b', 'c', 'e'],
        'GO:0005634': ['a', 'b', 'c', 'd', 'e'],
        'GO:0088888': ['c'],
        'GO:0099999': ['c'],
      };
      expect(termGeneList(genes, parents)).toEqual(expected);
    });
  });

  describe('calculate IC', () => {
    it('should calculate IC for each term', () => {
      const genes = {
        a: ['GO:0016607'],
        b: ['GO:0016604'],
        c: ['GO:0044451', 'GO:0088888'],
        d: ['GO:0005634'],
        e: ['GO:0044428'],
      };
      const parents = {
        'GO:0016607': ['GO:0016604', 'GO:0044451', 'GO:0044428', 'GO:0005654', 'GO:0005634', 'GO:0031981'],
        'GO:0016604': ['GO:0044451', 'GO:0044428', 'GO:0005654', 'GO:0005634', 'GO:0031981'],
        'GO:0044451': ['GO:0044428', 'GO:0005654', 'GO:0005634', 'GO:0031981'],
        'GO:0005654': ['GO:0044428', 'GO:0031981', 'GO:0005634'],
        'GO:0031981': ['GO:0044428', 'GO:0005634'],
        'GO:0044428': ['GO:0005634'],
        'GO:0005634': [],
        'GO:0088888': ['GO:0099999'],
        'GO:0099999': [],
      };
      const expected = {
        'GO:0016607': 0.954,
        'GO:0016604': 0.653,
        'GO:0044451': 0.477,
        'GO:0005654': 0.477,
        'GO:0031981': 0.477,
        'GO:0044428': 0.352,
        'GO:0005634': 0.255,
        'GO:0088888': 0.954,
        'GO:0099999': 0.954,
      };
      expect(informationContent(genes, parents)).toEqual(expected);
    });
  });
});
