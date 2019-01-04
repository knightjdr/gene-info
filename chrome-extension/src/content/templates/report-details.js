import basicElement from './basic';
import descriptionElement from './description';
import domainElement from './domain';
import geneElement from './gene';
import goElement from './go';
import interactorElement from './interactor';
import linkElement from './link';
import State from '../state';

const reportDetails = (result, reportIndex) => {
  const html = `
    <div class="gene-info__panel-inner">
      <section>
        <h1>Gene</h1>
        ${geneElement(result, reportIndex)}
      </section>
      ${basicElement(result[reportIndex], State.settings)}
      ${linkElement(result[reportIndex], State.settings)}
      ${descriptionElement(result[reportIndex], State.settings)}
      ${domainElement(result[reportIndex], State.settings)}
      ${goElement(result[reportIndex], State.settings)}
      ${interactorElement(result[reportIndex], State.settings)}
    </div>
  `;
  return {
    className: 'gene-info__panel',
    html,
  };
};

export default reportDetails;
