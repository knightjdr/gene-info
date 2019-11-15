/* eslint indent: 0 */
import createLink from './create-link';
import createTable from './create-table';
import hasData from '../has-data';

const element = (report, settings, availableSpecies) => {
  let html = '';

  if (
    settings.rna_expression
    && availableSpecies.includes(settings.species)
  ) {
    const accession = report['ensembl-gene'][0];
    const tissuesSelected = settings.rna_expression_tissues.length > 0;
    const dataAvailable = hasData(report['rna-expression']);

    html = `
      <div class="expression__section">
        <h2>RNA</h2>
        ${createLink(accession)}
        ${!tissuesSelected ? '<div class="none">no tissues selected</div>' : ''}
        ${tissuesSelected && dataAvailable ? createTable(report, settings.rna_expression_tissues) : ''}
        ${tissuesSelected && !dataAvailable ? '<div class="none">no RNA expression data</div>' : ''} 
      </div>
    `;
  }
  return html;
};

export default element;
