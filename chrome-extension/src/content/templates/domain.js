/* eslint indent: 0 */

const domainElement = (report, settings) => {
  let html = '';
  if (settings.domain) {
    const accession = report.uniprot[0];
    html = `
      <section class="gene-info__bevel gene-info__details">
        <div class="gene-info__details-header">
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
              <table class="gene-info__domain-table">
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
            : '<div class="gene-info__none">no annotated domains</div>'
        }
      </section>
    `;
  }
  return html;
};

export default domainElement;
