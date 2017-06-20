const linkConstructor = (data, wrapper = true) => {
  let linkString = '';
  if (data.geneid) {
    linkString +=
      `<div
        class="cExtension-gene-info-details-backdrop"
        id="cExtension_gene_info_details_ncbi"
      >
        <b>NCBI: </b>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.ncbi.nlm.nih.gov/gene/?term=${data.geneid }"
        >
          ${data.geneid}
        </a>
      </div>`
    ;
  }
  if (data.uniprot) {
    linkString +=
      `<div
        class="cExtension-gene-info-details-backdrop"
        id="cExtension_gene_info_details_uniprot"
      >
        <b>UniProt: </b>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="http://www.uniprot.org/uniprot/${data.uniprot}"
        >
          ${data.uniprot}
        </a>
      </div>`
    ;
  }
  if (data['ensembl-gene']) {
    linkString +=
      `<div
        class="cExtension-gene-info-details-backdrop"
        id="cExtension_gene_info_details_hpa"
      >
        <b>Human Protein Atlas: </b>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="http://www.proteinatlas.org/${data['ensembl-gene']}/cell"
        >
          ${data['ensembl-gene']}
        </a>
      </div>`
    ;
  }
  if (wrapper) {
    linkString = `
      <div id="cExtension_gene_info_details_link">
        ${linkString}
      </div>
    `;
  }
  return linkString;
};
