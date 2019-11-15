/* eslint indent: 0 */
import createLink from './create-link';
import createTable from './create-table';
import hasData from '../has-data';

const element = (report, settings, availableSpecies) => {
  let html = '';

  if (
    settings.protein_expression
    && availableSpecies.includes(settings.species)
  ) {
    const accession = report.proteomicsdb;
    const tissuesSelected = settings.protein_expression_tissues.length > 0;
    const dataAvailable = hasData(report['protein-expression']);

    html = `
      <div class="expression__section">
        <h2>Protein</h2>
        ${createLink(accession)}
        ${!tissuesSelected ? '<div class="none">no tissues selected</div>' : ''}
        ${tissuesSelected && dataAvailable ? createTable(report, settings.protein_expression_tissues) : ''}
        ${tissuesSelected && !dataAvailable ? '<div class="none">no protein expression data</div>' : ''} 
      </div>
    `;
  }
  return html;
};

export default element;
