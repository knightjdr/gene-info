const linkElement = (report, settings) => {
  let html = '';
  if (settings.links) {
    if (report.geneid) {
      html += `
        <section>
          <span class="gene-info__heading">NCBI</span>
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
      html += `
        <section>
          <span class="gene-info__heading">neXtProt</span>
          <a
            href="https://www.nextprot.org/entry/NX_${accession}"
            rel="noopener noreferrer"
            target="_blank"
          >
            ${accession}
          </a>
        </section>
      `;
      html += `
        <section>
          <span class="gene-info__heading">UniProt</span>
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
