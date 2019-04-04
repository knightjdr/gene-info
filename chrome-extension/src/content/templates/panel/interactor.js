/* eslint indent: 0 */

import sortIcon from '../assets/sort';
import sortUpIcon from '../assets/sort-up';

export const fillRows = interactors => (
  interactors.map(interactor => (`
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
);

const interactorElement = (report, settings) => {
  let html = '';
  if (settings.interactors) {
    const accession = report.uniprot[0];
    const links = [];
    if (report.biogrid) {
      links.push(`
        <a
          href="https://thebiogrid.org/${report.biogrid}"
          rel="noopener noreferrer"
          target="_blank"
        >
          BioGRID
        </a>
      `);
    }
    links.push(`
      <a
        href="https://www.ebi.ac.uk/intact/query/${accession}"
        rel="noopener noreferrer"
        target="_blank"
      >
        IntAct
      </a>
    `);
    html = `
      <style>
        .interactor .links {
          display: inline-flex;
        }
        .interactor .links a:not(:first-child) {
          margin-left: 4px;
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
        .interactor-table th button {
          background-color: transparent;
          border: none;
          cursor: pointer;
          height: auto;
          padding: 2px;
        }
        .interactor-table th button:focus {
          outline: none;
        }
        .interactor-table th svg path {
          fill: var(--text-contrast);
        }
        .interactor-table td:not(:first-child) {
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
      <section class="details interactor">
        <div class="details-header">
          <h1>INTERACTORS</h1>
          <span class="links">${links.join(',')}</span>
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
                  <th>
                    Target
                    <button
                      id="interactor_gene"
                      type="button"
                    >
                      ${sortUpIcon}
                    </button>
                  </th>
                  <th>
                    BioGRID
                    <button
                      id="interactor_biogrid"
                      type="button"
                    >
                      ${sortIcon}
                    </button>
                  </th>
                  <th>
                    IntAct
                    <button
                      id="interactor_intact"
                      type="button"
                    >
                      ${sortIcon}
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody id="interactor_tbody">
                ${fillRows(report.interactors)}
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
