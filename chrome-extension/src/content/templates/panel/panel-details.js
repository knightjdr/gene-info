import basicElement from './basic';
import descriptionElement from './description';
import domainElement from './domain';
import geneElement from '../gene';
import goElement from './go';
import interactorElement from './interactor';
import linkElement from './link';
import localizationElement from './localization';
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
  rna_expression: rnaExpressionElement,
};

const reportDetails = (result, reportIndex, stateStyle) => {
  let style = '';
  if (stateStyle.right) {
    style += `left: auto; right: ${stateStyle.right};`;
  } else if (stateStyle.left) {
    style += `left: ${stateStyle.left}; right: 'auto'`;
  }
  if (stateStyle.width) {
    style += `width: ${stateStyle.width};`;
  }
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
