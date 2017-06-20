const descriptionConstructor = (data, wrapper = true) => {
  let descriptionString = '';
  if (data.description) {
    descriptionString += `
      <div
        class="cExtension-gene-info-details-backdrop"
      >
        <b>Description: </b>${data.description}
      </div>`
    ;
  }
  if (wrapper) {
    descriptionString = `
      <div id="cExtension_gene_info_details_description">
        ${descriptionString}
      </div>
    `;
  }
  return descriptionString;
};
