import config from '../../../../config';
import proteinExpression from './protein/element';
import rnaExpression from './rna/element';

const expressionElement = (report, settings) => {
  let html = '';

  const availableProteinSpecies = Object.keys(config.tissues.protein);
  const availableRNASpecies = Object.keys(config.tissues.rna);
  if (
    (settings.protein_expression && availableProteinSpecies.includes(settings.species))
    || (settings.rna_expression && availableRNASpecies.includes(settings.species))
  ) {
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
        .expression table {
          margin-bottom: 10px;
        }
        .expression__section {
          margin-top: 5px;
        }
        .expression__section:not(:nth-of-type(+2)) {
          border-top: 1px solid #d0d0d0;
          margin-top: 6px;
          padding-top: 10px;
        }
        .expression-table {
          table-layout: fixed;
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
      </style>
      <section class="expression">
        <div class="details-header">
          <h1>EXPRESSION</h1>
        </div>
        <p>
          Expression values are binned into qualitative
          levels: no expression (none), low, medium or high.
        </p>
        ${proteinExpression(report, settings, availableProteinSpecies)}
        ${rnaExpression(report, settings, availableRNASpecies)}
      </section>
    `;
  }
  return html;
};

export default expressionElement;
