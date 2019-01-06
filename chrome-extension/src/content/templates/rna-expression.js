/* eslint indent: 0 */
import config from '../../config';

const thresholds = config.expressionThresholds;

const threshold = (value) => {
  if (value < thresholds.none[1]) {
    return 'none';
  } if (
    value >= thresholds.low[0]
    && value < thresholds.low[1]
  ) {
    return 'low';
  } if (
    value >= thresholds.medium[0]
    && value < thresholds.medium[1]
  ) {
    return 'medium';
  }
  return 'high';
};

const tissueRow = (tissue, data) => {
  const tpm = data.cells[tissue] || data.tissues[tissue];
  return `
    <tr>
      <td>${tissue}</td>
      <td>${tpm}</td>
      <td>${threshold(tpm)}</td>
    </tr>
  `;
};

const rnaExpressionElement = (report, settings) => {
  let html = '';
  if (settings.rna_expression && settings.species === 'Homo sapiens') {
    const accession = report['ensembl-gene'][0];
    html = `
      <style>
        .rna-expression-table {
          table-layout: fixed;
        }
        .rna-expression-table th:first-child {
          width: 40%px;
        }
        .rna-expression-table th:not(:first-child) {
          width: 30%;
        }
        .rna-expression-table td:not(:first-child) {
          text-align: center;
        }
      </style>
      <section class="bevel details">
        <div class="details-header">
          <h1>EXPRESSION (RNA)</h1>
          ${
            accession
            ? `
              <a
                href="https://www.proteinatlas.org/${accession}/tissue"
                rel="noopener noreferrer"
                target="_blank"
              >
                Protein Atlas
              </a>
            `
            : ''
          }
        </div>
        ${
          settings.rna_expression_tissues.length === 0
          ? '<div class="none">no tissues selected</div>'
          : ''
        }
        ${
          settings.rna_expression_tissues.length > 0
          && report['rna-expression']
          && report['rna-expression'].cells
          ? `
            <p class="details-description">
              RNA expression values are reported as transcripts
              per million (TPM) and binned into expression level
              categories: no expression (none), low, medium or
              high. See
              <a
                href="https://www.proteinatlas.org/about/assays+annotation"
                rel="noopener noreferrer"
                target="_blank"
              >
                HPA RNA-seq data
              </a>
              for more.
            </p>
            <table class="rna-expression-table">
              <thead>
                <tr>
                  <th>Tissue</th>
                  <th>TPM</th>
                  <th>Level</th>
                </tr>
              </thead>
              <tbody>
                ${
                  settings.rna_expression_tissues.map(tissue => (
                    tissueRow(tissue, report['rna-expression'])
                  )).join('')
                }
              </tbody>
            </table>
          `
          : '<div class="none">no expression data</div>'
        }
      </section>
    `;
  }
  return html;
};

export default rnaExpressionElement;
