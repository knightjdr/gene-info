import createGeneElement from '../gene';
import createInteractorElement from './interactor';
import position from '../position';
import State from '../../state';

// import basicElement from './basic';
// import descriptionElement from './description';
// import domainElement from './domain';
// import expressionElement from './expression/expression';
// import goElement from './go';
// import linkElement from './link';
// import localizationElement from './localization';
// import pathologyElement from './pathology';
// import pathwayElement from './pathway';

const sections = {
  basic: () => [],
  description: () => [],
  domain: () => [],
  expression: () => [],
  go: () => [],
  interactors: createInteractorElement,
  links: () => [],
  localization: () => [],
  pathology: () => [],
  pathway: () => [],
};

const reportDetails = (result, reportIndex, stateStyle, fadeClass) => {
  const positionStyle = position(stateStyle);

  const aside = {
    class: `theme_${State.settings.theme} ${fadeClass}`,
    id: 'panel',
    style: positionStyle,
    tag: 'aside',
    children: [
      {
        class: 'panel__inner',
        tag: 'div',
        children: [
          {
            class: 'gene',
            tag: 'section',
            children: [
              { tag: 'h1', textContent: 'Gene' },
              createGeneElement(result, reportIndex),
            ],
          },
          ...(State.settings.setting_order.map(section => sections[section](result[reportIndex], State.settings))).flat(),
        ],
      },
    ],
  };

  return aside;
};

export default reportDetails;
