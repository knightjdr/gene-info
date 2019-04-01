export const allSpeciesLinks = (term) => {
  let html = '';
  html += `
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
  return html;
};

const linkElement = (term, settings) => {
  let html = '<ul>';
  html += allSpeciesLinks(term);
  if (settings.species === 'Arabidopsis thaliana') {
    html += `
      <li>
        <a
          href="https://www.arabidopsis.org/servlets/Search?type=general&search_action=detail&method=1&show_obsolete=F&name=${term}&sub_type=gene&SEARCH_EXACT=4&SEARCH_CONTAINS=1"
          rel="noopener noreferrer"
          target="_blank"
        >
          TAIR
        </a>
      </li>
    `;
  }
  if (settings.species === 'Caenorhabditis elegans') {
    html += `
      <li>
        <a
          href="https://wormbase.org/search/gene/${term}"
          rel="noopener noreferrer"
          target="_blank"
        >
          WormBase
        </a>
      </li>
    `;
  }
  if (settings.species === 'Danio rerio') {
    html += `
      <li>
        <a
          href="https://zfin.org/search?q=${term}"
          rel="noopener noreferrer"
          target="_blank"
        >
          ZFIN
        </a>
      </li>
    `;
  }
  if (settings.species === 'Dictyostelium discoideum') {
    html += `
      <li>
        <a
          href="http://dictybase.org/db/cgi-bin/search/search.pl?query=${term}*&submit=Search+All"
          rel="noopener noreferrer"
          target="_blank"
        >
          dictyBase
        </a>
      </li>
    `;
  }
  if (settings.species === 'Homo sapiens') {
    html += `
      <li>
        <a
          href="https://www.nextprot.org/proteins/search?query=${term}"
          rel="noopener noreferrer"
          target="_blank"
        >
          neXtProt
        </a>
      </li>
    `;
  }
  if (settings.species === 'Mus musculus') {
    html += `
      <li>
        <a
          href="http://www.informatics.jax.org/searchtool/Search.do?query=${term}*"
          rel="noopener noreferrer"
          target="_blank"
        >
          MGI
        </a>
      </li>
    `;
  }
  if (settings.species === 'Saccharomyces cerevisiae') {
    html += `
      <li>
        <a
          href="https://www.yeastgenome.org/search?q=${term}"
          rel="noopener noreferrer"
          target="_blank"
        >
          SGD
        </a>
      </li>
    `;
  }
  if (settings.species === 'Xenopus laevis') {
    html += `
      <li>
        <a
          href="http://www.xenbase.org/gene/searchGene.do?method=search&searchIn=3&searchValue=${term}&searchType=0"
          rel="noopener noreferrer"
          target="_blank"
        >
          Xenbase
        </a>
      </li>
    `;
  }
  html += '</ul>';
  return html;
};

export default linkElement;
