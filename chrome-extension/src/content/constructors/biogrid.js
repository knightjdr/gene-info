const biogridStringConstructor = (data, wrapper = true) => {
  let biogridString = `
    <div
      class="cExtension-gene-info-details-backdrop"
    >
      <div class="cExtension-gene-info-bevel-line"></div>
      <div class="cExtension-gene-info-section-header">
        <b>INTERACTORS:</b>
        <a rel="noopener noreferrer" target="_blank" href="https://thebiogrid.org/${data.biogrid}/summary/homo-sapiens/">BioGRID</a>
      </div>`
  ;
  if (data.interactors.length > 0) {
    biogridString += `
      <div style="display: flex;">
        <div style="flex: 0 0 30%;">
          <u>Target</u>
        </div>
        <div style="flex: 1;">
          <u>Approach</u>
        </div>
      </div>`
    ;
    data.interactors.forEach(function(interactor) {
      biogridString += `
        <div style="display: flex;">
          <div style="flex: 0 0 30%;">
            ${interactor.gene}
          </div>
          <div style="flex: 1;">
            ${interactor.evidence}
          </div>
        </div>`
      ;
    });
  } else {
    biogridString += '<div id="cExtension_gene_info_details_interactors" style="display: flex;"><div style="flex: 0 0 25%;">none</div></div>';
  }
  biogridString += '</div></div>';
  if (wrapper) {
    biogridString = `
      <div id="cExtension_gene_info_details_biogrid">
        ${biogridString}
      </div>
    `;
  }
  return biogridString;
};
