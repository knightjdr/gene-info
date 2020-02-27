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

const expressionElement = (report, settings) => {
  let html = '';

  const showProteinData = shouldShowData(settings.protein_expression, settings.species, config.tissues.protein);
  const showRNAData = shouldShowData(settings.rna_expression, settings.species, config.tissues.rna);

  if (showProteinData || showRNAData) {
    html += `
      <style>
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
        }
      </style>
      <section class="expression">
        <div class="details-header">
          <h1>EXPRESSION</h1>
        </div>
        <p class="expression__help">
          Expression values are binned into qualitative
          levels: no expression (none), low, medium or high.
        </p>
        ${proteinExpression(report, settings, showProteinData)}
        ${rnaExpression(report, settings, showRNAData)}
      </section>
    `;
  }
  return html;
};

export default expressionElement;
