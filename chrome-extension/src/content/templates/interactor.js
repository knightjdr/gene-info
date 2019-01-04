/* eslint indent: 0 */

const interactorElement = (report, settings) => {
  let html = '';
  if (settings.interactors) {
    const accession = report.uniprot[0];
    html = `
      <section class="gene-info__bevel gene-info__details">
        <div class="gene-info__details-header">
          <h1>Interactors</h1>
          ${
            report.biogrid
            ? `
              <a
                href="https://thebiogrid.org/${report.biogrid}"
                rel="noopener noreferrer"
                target="_blank"
              >
                BioGRID
              </a>
            `
            : ''
          }
          <a
            href="https://www.ebi.ac.uk/intact/query/${accession}"
            rel="noopener noreferrer"
            target="_blank"
          >
            IntAct
          </a>
        </div>
        ${
          report.interactors && report.interactors.length > 0
          ? `
            <p class="gene-info__details-description">
              The values in the table indicate the number of different methods
              that have been used to detect the interaction partner (target) as
              reporting by each database.
            </p>
            <table class="gene-info__interactor-table">
              <thead>
                <tr>
                  <th>Target</th>
                  <th>BioGRID</th>
                  <th>IntAct</th>
                </tr>
              </thead>
              <tbody>
                ${
                  report.interactors.map((interactor) => {
                    return `
                      <tr>
                        <td>${interactor.gene}</td>
                        <td>${interactor.biogrid.length}</td>
                        <td>${interactor.intact.length}</td>
                      </tr>
                    `;
                  }).join('')
                }
              </tbody>
            </table>
          `
          : '<div class="gene-info__none">no known interactors</div>'
        }
      </section>
    `;
  }
  return html;
};

export default interactorElement;
