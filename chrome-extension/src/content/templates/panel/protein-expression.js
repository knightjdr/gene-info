/* eslint indent: 0 */
import config from '../../../config';

const tissueRow = (tissue, data) => {
  const datum = data.cells[tissue] || data.tissues[tissue];
  return `
    <tr>
      <td>${tissue}</td>
      <td>${datum.intensity}</td>
      <td>${datum.level}</td>
    </tr>
  `;
};

const proteinExpressionElement = (report, settings) => {
  let html = '';

  const availableSpecies = Object.keys(config.defaultTissues.protein);
  if (
    settings.protein_expression
    && availableSpecies.includes(settings.species)
  ) {
    const accession = report.proteomicsdb;
    html = `
      <style>
        .protein-expression-table {
          table-layout: fixed;
        }
        .protein-expression-table th:first-child {
          width: 40%px;
        }
        .protein-expression-table th:not(:first-child) {
          width: 30%;
        }
        .protein-expression-table td:not(:first-child) {
          text-align: center;
        }
      </style>
      <section class="details">
        <div class="details-header">
          <h1>EXPRESSION (protein)</h1>
          ${
            accession
            ? `
              <a
                href="https://www.proteomicsdb.org/proteomicsdb/#protein/proteinDetails/${accession}/expression"
                rel="noopener noreferrer"
                target="_blank"
              >
                Proteomics DB
              </a>
            `
            : ''
          }
        </div>
        ${
          settings.protein_expression_tissues.length === 0
          ? '<div class="none">no tissues selected</div>'
          : ''
        }
        ${
          settings.protein_expression_tissues.length > 0
          && report['protein-expression']
          && report['protein-expression'].cells
          ? `
            <p class="details-description">
              Protein expression values are reported as the normalized MS1
              iBAQ itensity and binned into expression level
              categories: no expression (none), low, medium or
              high.
            </p>
            <table class="protein-expression-table">
              <thead>
                <tr>
                  <th>Tissue</th>
                  <th>Intensity</th>
                  <th>Level</th>
                </tr>
              </thead>
              <tbody>
                ${
                  settings.protein_expression_tissues.map(tissue => (
                    tissueRow(tissue, report['protein-expression'])
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

export default proteinExpressionElement;
