/* eslint indent: 0 */

const interactorElement = (report, settings) => {
  let html = '';
  if (settings.interactors) {
    const accession = report.uniprot[0];
    html = `
      <style>
        .details-header-interactors a:not(:last-child):after {
          content: ',';
          left: -4px;
          position: relative;
        }
        .interactor-table {
          table-layout: fixed;
        }
        .interactor-table th:first-child {
          width: 100px;
        }
        .interactor-table th:not(:first-child) {
          width: calc((100% - 100px) / 2);
        }
        .interactor-table tr td:not(:first-child) {
          cursor: pointer;
          text-align: center;
          vertical-align: top;
        }
        .interactor__method-list {
          border-top: 1px dotted #d0d0d0;
          display: none;
          font-size: 0.8em;
          list-style: none;
          margin: 0;
          padding-left: 0;
          text-align: left;
          width: auto;
          word-break: break-word;
        }
        .interactor__method-list li {
          margin: 0;
        }
      </style>
      <section class="bevel details">
        <div class="details-header details-header-interactors">
          <h1>INTERACTORS</h1>
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
            <p class="details-description">
              The values in the table indicate the number of different methods
              that have been used to detect the interaction partner (target) as
              reported by each database. Click on a table cell to view the list
              of methods.
            </p>
            <table class="interactor-table">
              <thead>
                <tr>
                  <th>Target</th>
                  <th>BioGRID</th>
                  <th>IntAct</th>
                </tr>
              </thead>
              <tbody>
                ${
                  report.interactors.map(interactor => (`
                    <tr>
                      <td>${interactor.gene}</td>
                      <td
                        class="interactor-list-toggle"
                        data-gene="${interactor.gene}"
                      >
                        <div>${interactor.biogrid.length}</div>
                        <ul class="interactor__method-list interactor-list-${interactor.gene}">
                          ${
                            interactor.biogrid.map(method => (
                              `<li>∙${method}</li>`
                            )).join('')
                          }
                        </ul>
                      </td>
                      <td
                        class="interactor-list-toggle"
                        data-gene="${interactor.gene}"
                      >
                        <div>${interactor.intact.length}</div>
                        <ul class="interactor__method-list interactor-list-${interactor.gene}">
                          ${
                            interactor.intact.map(method => (
                              `<li>∙${method}</li>`
                            )).join('')
                          }
                        </ul>
                      </td>
                    </tr>
                  `)).join('')
                }
              </tbody>
            </table>
          `
          : '<div class="none">no known interactors</div>'
        }
      </section>
    `;
  }
  return html;
};

export default interactorElement;
