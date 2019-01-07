/* eslint indent: 0 */
import config from '../../../config';

const hpaList = list => (`
  <ul>
    ${
      list.map(item => `<li>${item}</li>`).join('')
    }
  </ul>
`);

const hpaRows = (data) => {
  let rows = '';
  if (data.enhanced) {
    rows += `
      <tr>
        <td>Enhanced</td>
        <td>${hpaList(data.enhanced)}</td>
      </tr>
    `;
  }
  if (data.supported) {
    rows += `
      <tr>
        <td>Supported</td>
        <td>${hpaList(data.supported)}</td>
      </tr>
    `;
  }
  if (data.approved) {
    rows += `
      <tr>
        <td>Approved</td>
        <td>${hpaList(data.approved)}</td>
      </tr>
    `;
  }
  if (data.uncertain) {
    rows += `
      <tr>
        <td>Uncertain</td>
        <td>${hpaList(data.uncertain)}</td>
      </tr>
    `;
  }
  return rows;
};

const localizationElement = (report, settings) => {
  let html = '';
  if (
    settings.localization
    && (
      settings.localization_compartments
      || settings.localization_hpa
      || settings.localization_uniprot
    )
  ) {
    html = `
      <style>
        .localization h1::after {
          content: '';
        }
        .localization h2 {
          display: inline;
          font-size: 14px;
          font-weight: bold;
          margin: 0;
        }
        .localization h2::after {
          content: ':';
          margin-right: 3px;
        }
        .localization p {
          margin: 8px 0;
          text-align: justify;
        }
        .localization table {
          margin-bottom: 10px;
        }
        .localization table ul {
          margin: 4px 0;
          padding-left: 20px;
        }
        .localization ul {
          margin-bottom: 8px;
          margin-top: 5px;
        }
        .localization__section {
          margin-top: 5px;
        }
        .localization__section:not(:nth-of-type(+2)) {
          border-top: 1px solid #d0d0d0;
          margin-top: 6px;
          padding-top: 6px;
        }
      </style>
      <section class="bevel details localization">
        <div class="details-header">
          <h1>LOCALIZATION</h1>
        </div>
    `;
    if (
      settings.localization_hpa
      && settings.species === 'Homo sapiens'
    ) {
      const ensembl = report['ensembl-gene'][0];
      const fieldNumber = Object.keys(report.localization.hpa).length;
      html += `
        <div class="localization__section">
          <h2>Protein Atlas</h2>
      `;
      html += `
        ${
          report.localization.hpa
          && fieldNumber > 0
          ? `
            <a
              href="https://www.proteinatlas.org/${ensembl}/cell"
              rel="noopener noreferrer"
              target="_blank"
            >
              ${ensembl}
            </a>
            <p>
              The Human Protein Atlas annotates localizations based on
              the supporting evidence. From best to worst the reliability
              scores are: "Enhanced", "Supported", "Approved" and "Uncertain". 
              See
              <a
                href="https://www.proteinatlas.org/about/assays+annotation"
                rel="noopener noreferrer"
                target="_blank"
              >
                IF - Reliability score
              </a>
              for more.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Score</th>
                  <th>Localization</th>
                </tr>
              </thead>
              <tbody>
                ${hpaRows(report.localization.hpa)}
              </tbody>
            </table>
          `
          : '<span class="none">no data</span>'
        }
      `;
      html += '</div>';
    }
    if (settings.localization_uniprot) {
      const accession = report.uniprot[0];
      html += `
        <div class="localization__section">
          <h2>UniProt</h2>
      `;
      html += `
        ${
          report.localization.uniprot
          && report.localization.uniprot.length > 0
          ? `
            <a
              href="https://www.uniprot.org/uniprot/${accession}#subcellular_location"
              rel="noopener noreferrer"
              target="_blank"
            >
              ${accession}
            </a>
            <ul>
              ${
                report.localization.uniprot.map(localization => (
                  `<li>${localization}</li>`
                )).join('')
              }
            </ul>
          `
          : '<span class="none">no data</span>'
        }
      `;
      html += '</div>';
    }
    if (
      settings.localization_compartments
      && config.compartmentSpecies.includes(settings.species)
    ) {
      const accession = report.localization.compartments;
      const speciesID = config.speciesID[settings.species];
      html += `
        <div class="localization__section">
          <h2>Compartments</h2>
      `;
      html += `
        ${
          report.localization.compartments
          ? `
            <a
              href="https://compartments.jensenlab.org/Entity?figures=subcell_cell_%&knowledge=10&textmining=10&experiments=10&predictions=10&type1=${speciesID}&type2=-22&id1=${accession}"
              rel="noopener noreferrer"
              target="_blank"
            >
              ${accession}
            </a>
          `
          : '<span class="none">no data</span>'
        }
      `;
      html += '</div>';
    }
    html += '</section>';
  }
  return html;
};

export default localizationElement;
