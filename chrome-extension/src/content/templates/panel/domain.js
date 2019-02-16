/* eslint indent: 0 */

const domainElement = (report, settings) => {
  let html = '';
  if (settings.domain || settings.region) {
    const accession = report.uniprot[0];
    let { domains } = report;
    let heading;
    let warning;
    if (settings.domain && settings.region) {
      heading = 'DOMAINS & REGIONS';
      warning = 'no annotated domains or regions';
    } else if (settings.domain) {
      heading = 'DOMAINS';
      domains = domains.filter(domain => domain.type === 'domain');
      warning = 'no annotated domains';
    } else if (settings.region) {
      heading = 'REGIONS';
      domains = domains.filter(domain => domain.type === 'region');
      warning = 'no annotated regions';
    }
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
      <section class="details">
        <div class="details-header">
          <h1>${heading}</h1>
          <a
            href="http://pfam.xfam.org/protein/${accession}"
            rel="noopener noreferrer"
            target="_blank"
          >
            Pfam
          </a>
        </div>
        ${
          domains && domains.length > 0
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
                    domains.map(domain => (
                      `
                        <tr>
                          <td>${domain.start}-${domain.end}</td>
                          <td>
                            ${
                              domain.pfam
                              ? `
                                <a
                                  href="http://pfam.xfam.org/family/${domain.pfam}"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  ${domain.name}
                                </a>
                              `
                              : domain.name
                            }
                          </td>
                        </tr>
                      `
                    )).join('')
                  }
                </tbody>
              </table>
            `
            : `<div class="none">${warning}</div>`
        }
      </section>
    `;
  }
  return html;
};

export default domainElement;
