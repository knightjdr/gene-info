import createGeneElement from '../gene';
import domainElement from './domain';
import essentialityElement from './essentiality';
import interactorElement from './interactor';
import linkElement from './link';
import localizationElement from './localization';
import goElement from './go';
import hpaElement from './hpa';
import pathologyElement from './pathology';
import proteomicsDBElement from './proteomics-db';
import sortArray from '../../helpers/sort-array';
import State from '../../state';

const tooltipDetails = (result, reportIndex, fadeClass = '') => {
  const links = [
    ...linkElement(result[reportIndex], State.settings),
    ...domainElement(result[reportIndex], State.settings),
    ...essentialityElement(result[reportIndex], State.settings),
    ...goElement(result[reportIndex], State.settings),
    ...localizationElement(result[reportIndex], State.settings),
    ...hpaElement(result[reportIndex], State.settings),
    ...interactorElement(result[reportIndex], State.settings),
    ...pathologyElement(result[reportIndex], State.settings),
    ...proteomicsDBElement(result[reportIndex], State.settings),
  ];
  const sorted = sortArray.alphabeticalByKey(links, 'database');

  return {
    class: `theme_${State.settings.theme} ${fadeClass} close-on-click-outside`,
    id: 'tooltip',
    tag: 'aside',
    children: [
      createGeneElement(result, reportIndex),
      {
        tag: 'section',
        children: sorted.map(link => ({
          href: link.href,
          rel: 'noopener noreferrer',
          tag: 'a',
          target: '_blank',
          textContent: link.database,
        })),
      },
    ],
  };
};

export default tooltipDetails;
