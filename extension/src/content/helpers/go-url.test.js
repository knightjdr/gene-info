import goURL from './go-url';

const base = 'http://amigo.geneontology.org/amigo/gene_product/';

describe('Gene Ontology URL', () => {
  describe('Arabidopsis thaliana', () => {
    let settings;

    beforeAll(() => {
      settings = {
        species: 'Arabidopsis thaliana',
      };
    });

    it('should return link when TAIR ID present', () => {
      const report = {
        tair: '1234',
      };
      const expected = `${base}TAIR:1234`;
      expect(goURL(report, settings)).toBe(expected);
    });

    it('should return no link when TAIR ID not present', () => {
      const report = {};
      const expected = '';
      expect(goURL(report, settings)).toBe(expected);
    });
  });

  describe('Caenorhabditis elegans', () => {
    let settings;

    beforeAll(() => {
      settings = {
        species: 'Caenorhabditis elegans',
      };
    });

    it('should return link when WormBase ID present', () => {
      const report = {
        wormbase: '1234',
      };
      const expected = `${base}WB:1234`;
      expect(goURL(report, settings)).toBe(expected);
    });

    it('should return no link when WormBase ID not present', () => {
      const report = {};
      const expected = '';
      expect(goURL(report, settings)).toBe(expected);
    });
  });

  describe('Danio rerio', () => {
    let settings;

    beforeAll(() => {
      settings = {
        species: 'Danio rerio',
      };
    });

    it('should return link when ZFIN ID present', () => {
      const report = {
        zfin: '1234',
      };
      const expected = `${base}ZFIN:1234`;
      expect(goURL(report, settings)).toBe(expected);
    });

    it('should return no link when ZFIN ID not present', () => {
      const report = {};
      const expected = '';
      expect(goURL(report, settings)).toBe(expected);
    });
  });

  describe('Dictyostelium discoideum', () => {
    let settings;

    beforeAll(() => {
      settings = {
        species: 'Dictyostelium discoideum',
      };
    });

    it('should return link when DictyBase ID present', () => {
      const report = {
        dictybase: '1234',
      };
      const expected = `${base}dictyBase:1234`;
      expect(goURL(report, settings)).toBe(expected);
    });

    it('should return no link when DictyBase ID not present', () => {
      const report = {};
      const expected = '';
      expect(goURL(report, settings)).toBe(expected);
    });
  });

  describe('Drosophila melanogaster', () => {
    let settings;

    beforeAll(() => {
      settings = {
        species: 'Drosophila melanogaster',
      };
    });

    it('should return link when FlyBase ID present', () => {
      const report = {
        flybase: '1234',
      };
      const expected = `${base}FB:1234`;
      expect(goURL(report, settings)).toBe(expected);
    });

    it('should return no link when FlyBase ID not present', () => {
      const report = {};
      const expected = '';
      expect(goURL(report, settings)).toBe(expected);
    });
  });

  describe('Mus musculus', () => {
    let settings;

    beforeAll(() => {
      settings = {
        species: 'Mus musculus',
      };
    });

    it('should return link when MGI ID present', () => {
      const report = {
        mgi: '1234',
      };
      const expected = `${base}MGI:1234`;
      expect(goURL(report, settings)).toBe(expected);
    });

    it('should return no link when MGI ID not present', () => {
      const report = {};
      const expected = '';
      expect(goURL(report, settings)).toBe(expected);
    });
  });

  describe('Saccharomyces cerevisiae', () => {
    let settings;

    beforeAll(() => {
      settings = {
        species: 'Saccharomyces cerevisiae',
      };
    });

    it('should return link when SGD ID present', () => {
      const report = {
        sgd: '1234',
      };
      const expected = `${base}SGD:1234`;
      expect(goURL(report, settings)).toBe(expected);
    });

    it('should return no link when SGD ID not present', () => {
      const report = {};
      const expected = '';
      expect(goURL(report, settings)).toBe(expected);
    });
  });

  describe('Schizosaccharomyces pombe', () => {
    let settings;

    beforeAll(() => {
      settings = {
        species: 'Schizosaccharomyces pombe',
      };
    });

    it('should return link when PomBase ID present', () => {
      const report = {
        pombase: '1234',
      };
      const expected = `${base}PomBase:1234`;
      expect(goURL(report, settings)).toBe(expected);
    });

    it('should return no link when PomBase ID not present', () => {
      const report = {};
      const expected = '';
      expect(goURL(report, settings)).toBe(expected);
    });
  });

  describe('Other species', () => {
    let settings;

    beforeAll(() => {
      settings = {
        species: 'Homo sapiens',
      };
    });

    it('should return link when UniProt ID present', () => {
      const report = {
        uniprot: ['1234'],
      };
      const expected = `${base}UniProtKB:1234`;
      expect(goURL(report, settings)).toBe(expected);
    });

    it('should return no link when UniProt field not present', () => {
      const report = {};
      const expected = '';
      expect(goURL(report, settings)).toBe(expected);
    });

    it('should return no link when UniProt field is empty', () => {
      const report = {
        uniprot: [],
      };
      const expected = '';
      expect(goURL(report, settings)).toBe(expected);
    });
  });
});
