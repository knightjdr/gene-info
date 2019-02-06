/* eslint indent: 0 */

import goURL from '../../helpers/go-url';
import link from '../../helpers/link-svg';

const goElement = (report, settings) => {
  let html = '';
  if (settings.go) {
    const url = goURL(report, settings);
    html = `
      <style>
        #go-buttons {
          display: flex;
          margin-bottom: 5px;
        }
        .go-button {
          border-radius: 2px;
          cursor: pointer;
          flex-grow: 1;
          font-size: 14px;
          margin: 0px 2px 0px 2px;
          text-align: center;
        }
        .theme_dark .go-button {
          background-color: var(--primary-1_dark);
          border: 1px solid var(--primary_dark);
          color: var(--text_dark);
        }
        .theme_default .go-button {
          background-color: var(--primary-1);
          border: 1px solid var(--primary);
          color: var(--text);
        }
        .theme_dark .go-button.active {
          background-color: var(--primary_dark);
          color: var(--text-contrast_dark);
        }
        .theme_default .go-button.active {
          background-color: var(--primary);
          color: var(--text-contrast);
        }
        .go-button:focus {
          outline: 0;
        }
        .go-terms {
          padding: 0 5px;
        }
        .go-terms ul {
          margin: 5px 0 8px 0;
          padding-left: 20px;
        }
      </style>
      <section class="bevel details">
        <div class="details-header">
          <h1>GO TERMS</h1>
          ${
            url
            && `
              <a
                href="${url}"
                rel="noopener noreferrer"
                target="_blank"
              >
                AmiGO
              </a>
            `
          }
          
        </div>
        <div id="go-buttons">
          ${
            ['bp', 'cc', 'mf'].map((namespace) => {
              const currentClass = namespace === settings.go_namespace
                ? 'go-button active'
                : 'go-button';
              return `
                <button
                  class="${currentClass}"
                  data-type="${namespace}"
                  id="go-button-${namespace}"
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
                class="go-terms"
                id="go-terms-${namespace}"
                style="display: ${namespace === settings.go_namespace ? 'block' : 'none'}"
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
                  : '<div class="none">no terms</div>'
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
