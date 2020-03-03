import createLinkList, { getGeneralLinks } from './link';

describe('General links', () => {
  it('should return expected links', () => {
    const term = 'test';

    const expected = [
      {
        children: [
          {
            href: `https://ensembl.org/Multi/Search/Results?q=${term}`,
            rel: 'noopener noreferrer',
            tag: 'a',
            target: '_blank',
            textContent: 'Ensembl',
          },
        ],
        tag: 'li',
      },
      {
        children: [
          {
            href: `http://www.google.com/search?q=${term}`,
            rel: 'noopener noreferrer',
            tag: 'a',
            target: '_blank',
            textContent: 'Google',
          },
        ],
        tag: 'li',
      },
      {
        children: [
          {
            href: `https://www.ncbi.nlm.nih.gov/search/all/?term=${term}`,
            rel: 'noopener noreferrer',
            tag: 'a',
            target: '_blank',
            textContent: 'NCBI',
          },
        ],
        tag: 'li',
      },
      {
        children: [
          {
            href: `https://www.uniprot.org/uniprot/?query=${term}&sort=score`,
            rel: 'noopener noreferrer',
            tag: 'a',
            target: '_blank',
            textContent: 'UniProt',
          },
        ],
        tag: 'li',
      },
    ];
    expect(getGeneralLinks(term)).toEqual(expected);
  });
});

describe('All available links', () => {
  it('should add species specific links when ID present', () => {
    const term = 'test';
    const species = [
      {
        name: 'Arabidopsis thaliana',
        db: 'TAIR',
        url: `https://www.arabidopsis.org/servlets/Search?type=general&search_action=detail&method=1&show_obsolete=F&name=${term}&sub_type=gene&SEARCH_EXACT=4&SEARCH_CONTAINS=1`,
      },
      {
        name: 'Caenorhabditis elegans',
        db: 'WormBase',
        url: `https://wormbase.org/search/gene/${term}`,
      },
      {
        name: 'Danio rerio',
        db: 'ZFIN',
        url: `https://zfin.org/search?q=${term}`,
      },
      {
        name: 'Dictyostelium discoideum',
        db: 'dictyBase',
        url: `http://dictybase.org/db/cgi-bin/search/search.pl?query=${term}*&submit=Search+All`,
      },
      {
        name: 'Escherichia coli (K12)',
        db: 'EcoCyc',
        url: `https://ecocyc.org/ECOLI/search-query?type=GENE&gname=${term}`,
      },
      {
        name: 'Homo sapiens',
        db: 'neXtProt',
        url: `https://www.nextprot.org/proteins/search?query=${term}`,
      },
      {
        name: 'Mus musculus',
        db: 'MGI',
        url: `http://www.informatics.jax.org/searchtool/Search.do?query=${term}*`,
      },
      {
        name: 'Saccharomyces cerevisiae',
        db: 'SGD',
        url: `https://www.yeastgenome.org/search?q=${term}`,
      },
      {
        name: 'Xenopus laevis',
        db: 'Xenbase',
        url: `http://www.xenbase.org/gene/searchGene.do?method=search&searchIn=3&searchValue=${term}&searchType=0`,
      },
    ];
    species.forEach((specie) => {
      const settings = {
        links: true,
        species: specie.name,
      };
      const list = createLinkList(term, settings);

      const expected = {
        children: [
          {
            href: specie.url,
            rel: 'noopener noreferrer',
            tag: 'a',
            target: '_blank',
            textContent: specie.db,
          },
        ],
        tag: 'li',
      };
      expect(list.tag).toBe('ul');
      expect(list.children[4]).toEqual(expected);
    });
  });
});
