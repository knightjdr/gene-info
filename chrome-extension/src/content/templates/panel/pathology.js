/* eslint indent: 0 */

export const diseaseSection = (path) => {
  const links = [];
  if (path.mim) {
    links.push(`
      <a
        href="http://www.omim.org/entry/${path.mim}"
        rel="noopener noreferrer"
        target="_blank"
      >
        OMIM: ${path.mim}
      </a>
    `);
  }
  if (path.uniprotID) {
    links.push(`
      <a
        href="https://www.uniprot.org/diseases/${path.uniprotID}"
        rel="noopener noreferrer"
        target="_blank"
      >
        UniProt: ${path.uniprotID}
      </a>
    `);
  }
  return `
    <div class="pathology-condition">
      ${path.name ? `<h2>${path.name}</h2>` : ''}
      ${
        links.length > 0
        ? `<span class="links">${links.join(',')}</span>`
        : ''
      }
      <p>${path.description}</p>
    </div>
  `;
};

const pathologyElement = (report, settings) => {
  const html = [];
  if (settings.pathology) {
    const accession = report.uniprot[0];
    const links = [];
    if (report.mim) {
      links.push(`
        <a
          href="https://www.omim.org/entry/${report.mim}"
          rel="noopener noreferrer"
          target="_blank"
        >
          OMIM
        </a>
      `);
    }
    links.push(`
      <a
        href="https://www.uniprot.org/uniprot/${accession}#pathology_and_biotech"
        rel="noopener noreferrer"
        target="_blank"
      >
        UniProt
      </a>
    `);
    html.push(`
      <style>
        .pathology h2 {
          font-size: 14px;
          font-style: italic;
          font-weight: normal;
          margin: 0;
          margin-bottom: 1px;
        }
        .pathology p {
          margin: 5px 0 0 0;
          text-align: justify;
        }
        .pathology .links {
          display: inline-flex;
        }
        .pathology .links a:not(:first-child) {
          margin-left: 4px;
        }
        .pathology-condition:not(:last-child) {
          border-bottom: 1px solid #e6e6e6;
          margin-bottom: 8px;
          padding-bottom: 8px;
        }
      </style>
      <section class="details pathology">
        <div class="details-header">
          <h1>PATHOLOGY</h1>
          <span class="links">
            ${links.join(',')}
          </links>
        </div>
        ${
          report.pathology
          && report.pathology.length > 0
          ? report.pathology.map(diseaseSection).join('')
          : '<div class="none">no pathology data</div>'
        }
      </section>
    `);
  }
  return html.join('');
};

export default pathologyElement;
