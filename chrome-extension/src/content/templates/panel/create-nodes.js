import createBasicElement from './basic';
import createDepmapElement from './depmap/depmap';
import createDescriptionElement from './description';
import createDomainElement from './domain';
import createExpressionElement from './expression/expression';
import createGeneElement from '../gene';
import createGoElement from './go';
import createInteractorElement from './interactor';
import createLinkElement from './link';
import createLocalizationElement from './localization';
import createPathwayElement from './pathway';
import createPathologyElement from './pathology';
import position from '../position';
import State from '../../state';

const sections = {
  basic: createBasicElement,
  depmap: createDepmapElement,
  description: createDescriptionElement,
  domain: createDomainElement,
  expression: createExpressionElement,
  go: createGoElement,
  interactors: createInteractorElement,
  links: createLinkElement,
  localization: createLocalizationElement,
  pathology: createPathologyElement,
  pathway: createPathwayElement,
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
          ...(
            State.settings.setting_order.map(section => (
              sections[section](result[reportIndex], State.settings)
            ))
          ).flat(),
        ],
      },
    ],
  };

  return aside;
};

export default reportDetails;
