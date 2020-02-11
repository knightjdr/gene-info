import link, { allSpeciesLinks } from './link';
import minifyHTML from '../../../test-utils/minify-html';

const genericLinks = term => `
<li>
  <a
    href="https://ensembl.org/Multi/Search/Results?q=${term}"
    rel="noopener noreferrer"
    target="_blank"
  >
    Ensembl
  </a>
</li>
<li>
  <a
    href="http://www.google.com/search?q=${term}"
    rel="noopener noreferrer"
    target="_blank"
  >
    Google
  </a>
</li>
<li>
  <a
    href="https://www.ncbi.nlm.nih.gov/search/all/?term=${term}"
    rel="noopener noreferrer"
    target="_blank"
  >
    NCBI
  </a>
</li>
<li>
  <a
    href="https://www.uniprot.org/uniprot/?query=${term}&sort=score"
    rel="noopener noreferrer"
    target="_blank"
  >
    UniProt
  </a>
</li>
`;

describe('Links for all species', () => {
  it('should return expected links', () => {
    const term = 'test';
    const expected = minifyHTML(genericLinks(term));
    const templateString = minifyHTML(allSpeciesLinks(term));
    expect(templateString).toEqual(expected);
  });
});

describe('Panel links', () => {
  it('should add species specific links when IDs present', () => {
    const term = 'test';
    const generic = genericLinks(term);
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
      const expected = minifyHTML(`
        <ul>
          ${generic}
          <li>
            <a
              href="${specie.url}"
              rel="noopener noreferrer"
              target="_blank"
            >
              ${specie.db}
            </a>
          </li>
        </ul>
      `);
      const templateString = minifyHTML(link(term, settings));
      expect(templateString).toEqual(expected);
    });
  });
});
