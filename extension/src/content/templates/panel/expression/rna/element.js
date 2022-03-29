/* eslint indent: 0 */
import createLink from './create-link';
import createTable from './create-table';
import hasData from '../has-data';

const element = (report, settings, showData) => {
  let node = {};

  if (showData) {
    const accession = report['ensembl-gene'][0];
    const tissuesSelected = settings.rna_expression_tissues && settings.rna_expression_tissues.length > 0;
    const dataAvailable = hasData(report['rna-expression']);

    node = {
      class: 'expression__section',
      tag: 'div',
      children: [
        { tag: 'h2', textContent: 'RNA' },
        createLink(accession),
      ],
    };

    if (!tissuesSelected) {
      node.children.push({
        class: 'warning',
        tag: 'div',
        textContent: 'no tissues selected',
      });
    }

    if (tissuesSelected && dataAvailable) {
      node.children.push(...createTable(report['rna-expression'], settings.rna_expression_tissues));
    }

    if (tissuesSelected && !dataAvailable) {
      node.children.push({
        class: 'warning',
        tag: 'div',
        textContent: 'no RNA expression data',
      });
    }
  }

  return node;
};

export default element;
