/* eslint indent: 0 */
import link from '../../helpers/link-svg';

const pathwayElement = (report, settings) => {
  let html = '';
  if (settings.pathway) {
    const accession = report.uniprot[0];
    html = `
      <style>
        .pathway {
          margin: 5px 0 8px 0;
          padding-left: 30px;
        }
        .pathway a svg {
          fill: var(--primary);
        }
        .pathway a:focus svg,
        .pathway a:hover svg {
          fill: var(--text);
        }
      </style>
      <section class="details">
        <div class="details-header">
          <h1>PATHWAYS</h1>
          <a
            href="https://www.uniprot.org/uniprot/${accession}#section_x-ref_pathway"
            rel="noopener noreferrer"
            target="_blank"
          >
            UniProt - pathway
          </a>
        </div>
        ${
          report.pathway
          && report.pathway.length > 0
          ? `<ul class="pathway">
              ${
                report.pathway.map(term => (`
                  <li>
                    ${term.term}
                    <a
                      href="https://reactome.org/PathwayBrowser/#${term.id}&FLG=${accession}"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      ${link}
                    </a>
                  </li>
                `)).join('')
              }
            </ul>`
          : '<div class="none">no Reactome data</div>'
        }
      </section>
    `;
  }
  return html;
};

export default pathwayElement;
