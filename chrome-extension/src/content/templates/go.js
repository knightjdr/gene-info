/* eslint indent: 0 */

import link from '../helpers/link-svg';

const goElement = (report, settings) => {
  let html = '';
  if (settings.go) {
    const accession = report.uniprot[0];
    html = `
      <section class="gene-info__bevel gene-info__details">
        <div class="gene-info__details-header">
          <h1>GO TERMS</h1>
          <a
            href="http://amigo.geneontology.org/amigo/gene_product/UniProtKB:${accession}"
            rel="noopener noreferrer"
            target="_blank"
          >
            AmiGO
          </a>
        </div>
        <div id="gene-info__go-buttons">
          ${
            ['bp', 'cc', 'mf'].map((namespace) => {
              const currentClass = namespace === settings['go-namespace']
                ? 'gene-info__go-button active'
                : 'gene-info__go-button';
              return `
                <button
                  class="${currentClass}"
                  data-type="${namespace}"
                  id="gene-info__go-button-${namespace}"
                  type="button"
                >
                  ${namespace.toUpperCase()}
                </button>
              `;
            }).join('')
          }
        </div>
        ${
          ['bp', 'cc', 'mf'].map((namespace) => {
            const firstCharacter = namespace.charAt(1);
            const terms = report.go[firstCharacter];
            return `
              <div
                class="gene-info__go-terms"
                id="gene-info__go-terms-${namespace}"
                style="display: ${namespace === settings['go-namespace'] ? 'block' : 'none'}"
              >
                ${
                  terms && terms.length > 0
                  ? `
                    <ul>
                      ${
                        terms.map(term => (`
                          <li>
                            ${term.term}
                            <a
                              href="http://amigo.geneontology.org/amigo/term/GO:${term.id}"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              ${link}
                            </a>
                          </li>
                        `)).join('')
                      }
                    </ul>
                  `
                  : '<div class="gene-info__none">no terms</div>'
                }
              </div>
            `;
          }).join('')
        }
      </section>
    `;
  }
  return html;
};

export default goElement;
