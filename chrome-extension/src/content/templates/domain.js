/* eslint indent: 0 */

const domainElement = (report, settings) => {
  let html = '';
  if (settings.domain) {
    const accession = report.uniprot[0];
    html = `
      <style>
        .domain-table th:first-child {
          width: 35%;
        }
        .domain-table th:last-child {
          width: 65%;
        }
        .domain-table td {
          text-align: center;
        }
      </style>
      <section class="bevel details">
        <div class="details-header">
          <h1>DOMAINS</h1>
          <a
            href="http://pfam.xfam.org/protein/${accession}"
            rel="noopener noreferrer"
            target="_blank"
          >
            Pfam
          </a>
        </div>
        ${
          report.domains && report.domains.length > 0
            ? `
              <table class="domain-table">
                <thead>
                  <tr>
                    <th>Start - End</th>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>
                  ${
                    report.domains.map(domain => (
                      `
                        <tr>
                          <td>${domain.start}-${domain.end}</td>
                          <td>
                            <a
                              href="http://pfam.xfam.org/family/${domain.pfam}"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              ${domain.name}
                            </a>
                          </td>
                        </tr>
                      `
                    )).join('')
                  }
                </tbody>
              </table>
            `
            : '<div class="none">no annotated domains</div>'
        }
      </section>
    `;
  }
  return html;
};

export default domainElement;
