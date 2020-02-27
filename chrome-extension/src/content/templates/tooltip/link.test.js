import link, { allSpeciesLinks } from './link';

describe('Links for all species', () => {
  describe('all links IDs present', () => {
    it('should return expected links', () => {
      const report = {
        'ensembl-gene': ['ens1234'],
        geneid: 1234,
        uniprot: ['abcd'],
      };
      const expected = [
        {
          database: 'Ensembl',
          href: 'https://ensembl.org/Gene/Summary?g=ens1234',
        },
        {
          database: 'NCBI',
          href: 'https://www.ncbi.nlm.nih.gov/gene/?term=1234',
        },
        {
          database: 'UniProt',
          href: 'https://www.uniprot.org/uniprot/abcd',
        },
      ];
      expect(allSpeciesLinks(report)).toEqual(expected);
    });
  });

  describe('links IDs missing', () => {
    it('should return empty array when fields present but no IDs', () => {
      const report = {
        'ensembl-gene': [],
        geneid: '',
        uniprot: [],
      };
      const expected = [];
      expect(allSpeciesLinks(report)).toEqual(expected);
    });

    it('should return empty array when fields missing', () => {
      const report = {};
      const expected = [];
      expect(allSpeciesLinks(report)).toEqual(expected);
    });
  });
});

describe('Tooltip links', () => {
  describe('user setting has links enabled', () => {
    it('should add species specific links when IDs present', () => {
      const species = [
        {
          name: 'Arabidopsis thaliana',
          key: 'tair',
          db: 'TAIR',
          url: 'https://www.arabidopsis.org/servlets/TairObject?accession=',
        },
        {
          name: 'Caenorhabditis elegans',
          key: 'wormbase',
          db: 'WormBase',
          url: 'https://wormbase.org/species/c_elegans/gene/',
        },
        {
          name: 'Danio rerio',
          key: 'zfin',
          db: 'ZFIN',
          url: 'https://zfin.org/',
        },
        {
          name: 'Dictyostelium discoideum',
          key: 'dictybase',
          db: 'dictyBase',
          url: 'http://dictybase.org/gene/',
        },
        {
          name: 'Drosophila melanogaster',
          key: 'flybase',
          db: 'FlyBase',
          url: 'https://flybase.org/reports/',
        },
        {
          name: 'Escherichia coli (K12)',
          key: 'biocyc',
          db: 'EcoCyc',
          url: 'https://ecocyc.org/gene?orgid=ECOLI&id=',
        },
        {
          name: 'Homo sapiens',
          key: 'nextprot',
          db: 'neXtProt',
          url: 'https://www.nextprot.org/entry/NX_',
        },
        {
          name: 'Mus musculus',
          key: 'mgi',
          db: 'MGI',
          url: 'http://www.informatics.jax.org/marker/',
        },
        {
          name: 'Schizosaccharomyces pombe',
          key: 'pombase',
          db: 'PomBase',
          url: 'https://www.pombase.org/gene/',
        },
        {
          name: 'Saccharomyces cerevisiae',
          key: 'sgd',
          db: 'SGD',
          url: 'https://www.yeastgenome.org/locus/',
        },
        {
          name: 'Xenopus laevis',
          key: 'xenbase',
          db: 'Xenbase',
          url: 'http://www.xenbase.org/gene/showgene.do?method=display&geneId=',
        },
      ];
      species.forEach((specie) => {
        const report = {
          [specie.key]: '1234',
          uniprot: ['abcd'],
        };
        const settings = {
          links: true,
          species: specie.name,
        };
        const id = specie.name === 'Homo sapiens' ? report.uniprot : report[specie.key];
        const expected = [
          {
            database: 'UniProt',
            href: 'https://www.uniprot.org/uniprot/abcd',
          },
          {
            database: specie.db,
            href: `${specie.url}${id}`,
          },
        ];
        expect(link(report, settings)).toEqual(expected);
      });
    });

    it('should not add species specific links when IDs missing', () => {
      const species = [
        { name: 'Arabidopsis thaliana' },
        { name: 'Caenorhabditis elegans' },
        { name: 'Danio rerio' },
        { name: 'Dictyostelium discoideum' },
        { name: 'Drosophila melanogaster' },
        { name: 'Escherichia coli (K12)' },
        { name: 'Homo sapiens' },
        { name: 'Mus musculus' },
        { name: 'Schizosaccharomyces pombe' },
        { name: 'Saccharomyces cerevisiae' },
        { name: 'Xenopus laevis' },
      ];
      species.forEach((specie) => {
        const report = {
          geneid: 1234,
        };
        const settings = {
          links: true,
          species: specie.name,
        };
        const expected = [
          {
            database: 'NCBI',
            href: 'https://www.ncbi.nlm.nih.gov/gene/?term=1234',
          },
        ];
        expect(link(report, settings)).toEqual(expected);
      });
    });
  });

  describe('user setting has links disabled', () => {
    let settings;

    beforeAll(() => {
      settings = {
        links: false,
      };
    });

    it('should return an empty array', () => {
      const report = {};
      const expected = [];
      expect(link(report, settings)).toEqual(expected);
    });
  });
});
