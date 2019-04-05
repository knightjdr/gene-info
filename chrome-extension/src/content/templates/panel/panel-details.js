import basicElement from './basic';
import descriptionElement from './description';
import domainElement from './domain';
import geneElement from '../gene';
import goElement from './go';
import interactorElement from './interactor';
import linkElement from './link';
import localizationElement from './localization';
import pathologyElement from './pathology';
import pathwayElement from './pathway';
import position from '../position';
import rnaExpressionElement from './rna-expression';
import State from '../../state';

const sections = {
  basic: basicElement,
  description: descriptionElement,
  domain: domainElement,
  go: goElement,
  interactors: interactorElement,
  links: linkElement,
  localization: localizationElement,
  pathology: pathologyElement,
  pathway: pathwayElement,
  rna_expression: rnaExpressionElement,
};

const reportDetails = (result, reportIndex, stateStyle) => {
  const style = position(stateStyle);
  return `
    <aside
      class="theme_${State.settings.theme}"
      id="panel"
      style="${style}"
    >
      <div class="panel__inner">
        <section class="gene">
          <h1>Gene</h1>
          ${geneElement(result, reportIndex)}
        </section>
        ${State.settings.setting_order.map(section => sections[section](result[reportIndex], State.settings)).join('')}
      </div>
    </aside>
  `;
};

export default reportDetails;
