import basicElement from './basic';
import descriptionElement from './description';
import geneElement from './gene';
import linkElement from './link';
import State from '../state';

const reportDetails = (result, reportIndex) => {
  const html = `
    <section>
      <span class="gene-info__heading">Gene</span>
      ${geneElement(result, reportIndex)}
    </section>
    ${basicElement(result[reportIndex], State.settings)}
    ${linkElement(result[reportIndex], State.settings)}
    ${descriptionElement(result[reportIndex], State.settings)}
  `;
  return {
    className: 'gene-info__panel',
    html,
  };
};

export default reportDetails;
