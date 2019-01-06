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
  }
  return html;
};

export default linkElement;
