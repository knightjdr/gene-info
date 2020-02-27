export const allSpeciesLinks = (report) => {
  let html = '';
  if (report['ensembl-gene'] && report['ensembl-gene'].length > 0) {
    const accession = report['ensembl-gene'][0];
    html += `
      <div>
        <h1>Ensembl</h1>
        <a
          href="https://ensembl.org/Gene/Summary?g=${accession}"
          rel="noopener noreferrer"
          target="_blank"
        >
          ${accession}
        </a>
      </div>
    `;
  }
  if (report.geneid) {
    html += `
      <div>
        <h1>NCBI</h1>
        <a
          href="https://www.ncbi.nlm.nih.gov/gene/?term=${report.geneid}"
          rel="noopener noreferrer"
          target="_blank"
        >
          ${report.geneid}
        </a>
      </div>
    `;
  }
  if (report.uniprot && report.uniprot.length > 0) {
    const accession = report.uniprot[0];
    html += `
      <div>
        <h1>UniProt</h1>
        <a
          href="https://www.uniprot.org/uniprot/${accession}"
          rel="noopener noreferrer"
          target="_blank"
        >
          ${accession}
        </a>
      </div>
    `;
  }
  return html;
};

const linkElement = (report, settings) => {
  let html = `
    <style>
      .links > div {
        margin-top: 5px;
      }
    </style>
  `;
  if (settings.links) {
    html += '<section class="links">';
    html += allSpeciesLinks(report);
    if (report.tair && settings.species === 'Arabidopsis thaliana') {
      html += `
        <div>
          <h1>TAIR</h1>
          <a
            href="https://www.arabidopsis.org/servlets/TairObject?accession=${report.tair}"
            rel="noopener noreferrer"
            target="_blank"
          >
            ${report.tair}
          </a>
        </div>
      `;
    }
    if (report.wormbase && settings.species === 'Caenorhabditis elegans') {
      html += `
        <div>
          <h1>WormBase</h1>
          <a
            href="https://wormbase.org/species/c_elegans/gene/${report.wormbase}"
            rel="noopener noreferrer"
            target="_blank"
          >
            ${report.wormbase}
          </a>
        </div>
      `;
    }
    if (report.zfin && settings.species === 'Danio rerio') {
      html += `
        <div>
          <h1>ZFIN</h1>
          <a
            href="https://zfin.org/${report.zfin}"
            rel="noopener noreferrer"
            target="_blank"
          >
            ${report.zfin}
          </a>
        </div>
      `;
    }
    if (report.dictybase && settings.species === 'Dictyostelium discoideum') {
      html += `
        <div>
          <h1>dictyBase</h1>
          <a
            href="http://dictybase.org/gene/${report.dictybase}"
            rel="noopener noreferrer"
            target="_blank"
          >
            ${report.dictybase}
          </a>
        </div>
      `;
    }
    if (report.flybase && settings.species === 'Drosophila melanogaster') {
      html += `
        <div>
          <h1>FlyBase</h1>
          <a
            href="https://flybase.org/reports/${report.flybase}"
            rel="noopener noreferrer"
            target="_blank"
          >
            ${report.flybase}
          </a>
        </div>
      `;
    }
    if (report.biocyc && settings.species === 'Escherichia coli (K12)') {
      html += `
        <div>
          <h1>EcoCyc</h1>
          <a
            href="https://ecocyc.org/gene?orgid=ECOLI&id=${report.biocyc}"
            rel="noopener noreferrer"
            target="_blank"
          >
            ${report.biocyc}
          </a>
        </div>
      `;
    }
    if (
      report.uniprot
      && report.uniprot.length > 0
      && settings.species === 'Homo sapiens'
    ) {
      const accession = report.uniprot[0];
      html += `
        <div>
          <h1>neXtProt</h1>
          <a
            href="https://www.nextprot.org/entry/NX_${accession}"
            rel="noopener noreferrer"
            target="_blank"
          >
            NX_${accession}
          </a>
        </div>
      `;
    }
    if (report.mgi && settings.species === 'Mus musculus') {
      html += `
        <div>
          <h1>MGI</h1>
          <a
            href="http://www.informatics.jax.org/marker/${report.mgi}"
            rel="noopener noreferrer"
            target="_blank"
          >
            ${report.mgi}
          </a>
        </div>
      `;
    }
    if (report.sgd && settings.species === 'Saccharomyces cerevisiae') {
      html += `
        <div>
          <h1>SGD</h1>
          <a
            href="https://www.yeastgenome.org/locus/${report.sgd}"
            rel="noopener noreferrer"
            target="_blank"
          >
            ${report.sgd}
          </a>
        </div>
      `;
    }
    if (report.pombase && settings.species === 'Schizosaccharomyces pombe') {
      html += `
        <div>
          <h1>PomBase</h1>
          <a
            href="https://www.pombase.org/gene/${report.pombase}"
            rel="noopener noreferrer"
            target="_blank"
          >
            ${report.pombase}
          </a>
        </div>
      `;
    }
    if (report.xenbase && settings.species === 'Xenopus laevis') {
      html += `
        <div>
          <h1>Xenbase</h1>
          <a
            href="http://www.xenbase.org/gene/showgene.do?method=display&geneId=${report.xenbase}"
            rel="noopener noreferrer"
            target="_blank"
          >
            ${report.xenbase}
          </a>
        </div>
      `;
    }
    html += '</section>';
  }
  return html;
};

export default linkElement;
