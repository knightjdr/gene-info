/* eslint indent: 0 */

import domainElement from './domain';
import geneElement from '../gene';
import interactorElement from './interactor';
import linkElement from './link';
import localizationElement from './localization';
import goElement from './go';
import hpaElement from './hpa';
import pathologyElement from './pathology';
import sortArray from '../../helpers/sort-array';
import State from '../../state';

const tooltipDetails = (result, reportIndex) => {
  const links = [
    ...linkElement(result[reportIndex], State.settings),
    ...domainElement(result[reportIndex], State.settings),
    ...goElement(result[reportIndex], State.settings),
    ...localizationElement(result[reportIndex], State.settings),
    ...hpaElement(result[reportIndex], State.settings),
    ...interactorElement(result[reportIndex], State.settings),
    ...pathologyElement(result[reportIndex], State.settings),
  ];
  const sorted = sortArray.alphabeticalByKey(links, 'database');
  return `
    <aside id="backdrop">
      <div
        class="theme_${State.settings.theme}"
        id="tooltip"
      >
        <header>
          ${geneElement(result, reportIndex)}
        </header>
        <section>
          ${
            sorted.map(link => (
              `<a
                href="${link.href}"
                rel="noopener noreferrer"
                target="_blank"
              >
                ${link.database}
              </a>`
            )).join('')
          }
        </section>
      </div>
    </aside>
  `;
};

export default tooltipDetails;
