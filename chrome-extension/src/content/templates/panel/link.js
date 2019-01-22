const linkElement = (report, settings) => {
  let html = '';
  if (settings.links) {
    if (report['ensembl-gene'] && report['ensembl-gene'].length > 0) {
      const accession = report['ensembl-gene'][0];
      html += `
        <section>
          <h1>Ensembl</h1>
          <a
            href="https://ensembl.org/Gene/Summary?g=${accession}"
            rel="noopener noreferrer"
            target="_blank"
          >
            ${accession}
          </a>
        </section>
      `;
    }
    if (report.dictybase && settings.species === 'Dictyostelium discoideum') {
      html += `
        <section>
          <h1>dictyBase</h1>
          <a
            href="http://dictybase.org/gene/${report.dictybase}"
            rel="noopener noreferrer"
            target="_blank"
          >
            ${report.dictybase}
          </a>
        </section>
      `;
    }
    if (report.flybase && settings.species === 'Drosophila melanogaster') {
      html += `
        <section>
          <h1>FlyBase</h1>
          <a
            href="https://flybase.org/reports/${report.flybase}"
            rel="noopener noreferrer"
            target="_blank"
          >
            ${report.flybase}
          </a>
        </section>
      `;
    }
    if (report.geneid) {
      html += `
        <section>
          <h1>NCBI</h1>
          <a
            href="https://www.ncbi.nlm.nih.gov/gene/?term=${report.geneid}"
            rel="noopener noreferrer"
            target="_blank"
          >
            ${report.geneid}
          </a>
        </section>
      `;
    }
    if (report.mgi && settings.species === 'Mus musculus') {
      html += `
        <section>
          <h1>MGI</h1>
          <a
            href="http://www.informatics.jax.org/marker/${report.mgi}"
            rel="noopener noreferrer"
            target="_blank"
          >
            ${report.mgi}
          </a>
        </section>
      `;
    }
    if (report.sgd && settings.species === 'Saccharomyces cerevisiae') {
      html += `
        <section>
          <h1>SGD</h1>
          <a
            href="https://www.yeastgenome.org/locus/${report.sgd}"
            rel="noopener noreferrer"
            target="_blank"
          >
            ${report.sgd}
          </a>
        </section>
      `;
    }
    if (report.tair && settings.species === 'Arabidopsis thaliana') {
      html += `
        <section>
          <h1>TAIR</h1>
          <a
            href="https://www.arabidopsis.org/servlets/TairObject?accession=${report.tair}"
            rel="noopener noreferrer"
            target="_blank"
          >
            ${report.tair}
          </a>
        </section>
      `;
    }
    if (report.uniprot && report.uniprot.length > 0) {
      const accession = report.uniprot[0];
      if (settings.species === 'Homo sapiens') {
        html += `
          <section>
            <h1>neXtProt</h1>
            <a
              href="https://www.nextprot.org/entry/NX_${accession}"
              rel="noopener noreferrer"
              target="_blank"
            >
              NX_${accession}
            </a>
          </section>
        `;
      }
      html += `
        <section>
          <h1>UniProt</h1>
          <a
            href="https://www.uniprot.org/uniprot/${accession}"
            rel="noopener noreferrer"
            target="_blank"
          >
            ${accession}
          </a>
        </section>
      `;
    }
    if (report.wormbase && settings.species === 'Caenorhabditis elegans') {
      html += `
        <section>
          <h1>WormBase</h1>
          <a
            href="https://wormbase.org/species/c_elegans/gene/${report.wormbase}"
            rel="noopener noreferrer"
            target="_blank"
          >
            ${report.wormbase}
          </a>
        </section>
      `;
    }
    if (report.zfin && settings.species === 'Danio rerio') {
      html += `
        <section>
          <h1>ZFIN</h1>
          <a
            href="https://zfin.org/${report.zfin}"
            rel="noopener noreferrer"
            target="_blank"
          >
            ${report.zfin}
          </a>
        </section>
      `;
    }
  }
  return html;
};

export default linkElement;
