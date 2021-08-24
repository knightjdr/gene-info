import config from '../../../../config';
import proteinExpression from './protein/element';
import rnaExpression from './rna/element';

const shouldShowData = (showExpression, species, data) => (
  showExpression
  && data[species]
  && (
    data[species].cells.length > 0
    || data[species].tissues.length > 0
  )
);

const style = `
.expression h1::after {
  content: '';
}
.expression h2 {
  display: inline;
  font-size: 14px;
  font-weight: bold;
  margin: 0;
}
.expression h2::after {
  content: ':';
  margin-right: 3px;
}
.expression p {
  margin: 5px 0 10px 0;
}
.expression p.expression__help {
  margin-top: 0;
}
.expression__section {
  margin-top: 5px;
}
.expression__section:not(:nth-of-type(+2)) {
  border-top: 1px solid #d0d0d0;
  margin-top: 6px;
  padding-top: 10px;
}
.expression__table th:first-child {
  width: 40%px;
}
.expression__table th:not(:first-child) {
  width: 30%;
}
.expression__table td:not(:first-child) {
  text-align: center;
}
.expression__table-protein {
  margin-bottom: 10px;
}`;

const expressionElement = (report, settings) => {
  const nodes = [];

  const showProteinData = shouldShowData(settings.protein_expression, settings.species, config.tissues.protein);
  const showRNAData = shouldShowData(settings.rna_expression, settings.species, config.tissues.rna);

  if (showProteinData || showRNAData) {
    nodes.push({
      tag: 'style',
      textContent: style,
      type: 'text/css',
    });

    const section = {
      class: 'expression',
      tag: 'section',
      children: [
        {
          class: 'details-header',
          tag: 'div',
          children: [
            { tag: 'h1', textContent: 'EXPRESSION' },
          ],
        },
        {
          class: 'expression__help',
          tag: 'p',
          textContent: `Expression values are binned into qualitative
          levels: no expression (none), low, medium or high.`,
        },
      ],
    };

    section.children.push(proteinExpression(report, settings, showProteinData));
    section.children.push(rnaExpression(report, settings, showRNAData));

    nodes.push(section);
  }

  return nodes;
};

export default expressionElement;
