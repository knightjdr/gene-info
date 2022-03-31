const formatLinkNode = (href, text) => ({
  children: [
    {
      href,
      rel: 'noopener noreferrer',
      tag: 'a',
      target: '_blank',
      textContent: text,
    },
  ],
  tag: 'li',
});


export const getGeneralLinks = term => ([
  formatLinkNode(
    `https://ensembl.org/Multi/Search/Results?q=${term}`,
    'Ensembl',
  ),
  formatLinkNode(
    `https://www.ncbi.nlm.nih.gov/search/all/?term=${term}`,
    'NCBI',
  ),
  formatLinkNode(
    `https://www.uniprot.org/uniprot/?query=${term}&sort=score`,
    'UniProt',
  ),
]);

const createLinkList = (term, settings) => {
  const links = [...getGeneralLinks(term)];
  if (settings.species === 'Arabidopsis thaliana') {
    links.push(
      formatLinkNode(
        `https://www.arabidopsis.org/servlets/Search?type=general&search_action=detail&method=1&show_obsolete=F&name=${term}&sub_type=gene&SEARCH_EXACT=4&SEARCH_CONTAINS=1`,
        'TAIR',
      ),
    );
  }
  if (settings.species === 'Caenorhabditis elegans') {
    links.push(
      formatLinkNode(
        `https://wormbase.org/search/gene/${term}`,
        'WormBase',
      ),
    );
  }
  if (settings.species === 'Danio rerio') {
    links.push(
      formatLinkNode(
        `https://zfin.org/search?q=${term}`,
        'ZFIN',
      ),
    );
  }
  if (settings.species === 'Dictyostelium discoideum') {
    links.push(
      formatLinkNode(
        `http://dictybase.org/db/cgi-bin/search/search.pl?query=${term}*&submit=Search+All`,
        'dictyBase',
      ),
    );
  }
  if (settings.species === 'Escherichia coli (K12)') {
    links.push(
      formatLinkNode(
        `https://ecocyc.org/ECOLI/search-query?type=GENE&gname=${term}`,
        'EcoCyc',
      ),
    );
  }
  if (settings.species === 'Homo sapiens') {
    links.push(
      formatLinkNode(
        `https://www.nextprot.org/proteins/search?query=${term}`,
        'neXtProt',
      ),
    );
  }
  if (settings.species === 'Mus musculus') {
    links.push(
      formatLinkNode(
        `http://www.informatics.jax.org/searchtool/Search.do?query=${term}*`,
        'MGI',
      ),
    );
  }
  if (settings.species === 'Saccharomyces cerevisiae') {
    links.push(
      formatLinkNode(
        `https://www.yeastgenome.org/search?q=${term}`,
        'SGD',
      ),
    );
  }
  if (settings.species === 'Xenopus laevis') {
    links.push(
      formatLinkNode(
        `http://www.xenbase.org/gene/searchGene.do?method=search&searchIn=3&searchValue=${term}&searchType=0`,
        'Xenbase',
      ),
    );
  }

  return {
    children: links,
    tag: 'ul',
  };
};

export default createLinkList;
