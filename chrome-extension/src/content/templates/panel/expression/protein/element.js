/* eslint indent: 0 */
import createLink from './create-link';
import createTable from './create-table';
import hasData from '../has-data';

const element = (report, settings, showData) => {
  let node = {};

  if (showData) {
    const accession = report.proteomicsdb;
    const tissuesSelected = settings.protein_expression_tissues && settings.protein_expression_tissues.length > 0;
    const dataAvailable = hasData(report['protein-expression']);

    node = {
      class: 'expression__section',
      tag: 'div',
      children: [
        { tag: 'h2', textContent: 'Protein' },
        createLink(accession),
      ],
    };

    if (!tissuesSelected) {
      node.children.push({
        class: 'none',
        tag: 'div',
        textContent: 'no tissues selected',
      });
    }

    if (tissuesSelected && dataAvailable) {
      node.children.push(...createTable(report, settings.protein_expression_tissues));
    }

    if (tissuesSelected && !dataAvailable) {
      node.children.push({
        class: 'none',
        tag: 'div',
        textContent: 'no protein expression data',
      });
    }
  }

  return node;
};

export default element;
