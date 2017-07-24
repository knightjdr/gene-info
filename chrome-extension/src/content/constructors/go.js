const goStringConstructor = (data, wrapper = true) => {
  // create header
  let goString = `
    <div
      class="cExtension-gene-info-details-backdrop"
    >
      <div class="cExtension-gene-info-bevel-line"></div>
      <div class="cExtension-gene-info-section-header">
        <b>GO TERMS: </b>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="http://amigo.geneontology.org/amigo/gene_product/UniProtKB:${data.uniprot}"
        >
          AmiGO
        </a>
      </div>
      <div>
        <div style="display: flex; flex-direction: row;">
    `
  ;
  // create header buttons
  ['bp', 'cc', 'mf'].forEach((namespace) => {
    const currentClass = namespace === details.displayOptions.goNamespace ?
      'cExtension-gene-info-go-selector active' :
      'cExtension-gene-info-go-selector'
    ;
    const strNamespace = namespace.toUpperCase();
    goString += `
      <div
        class="${currentClass}"
        data-type="${namespace}"
      >
        ${strNamespace}
      </div>
    `;
  });
  goString += '</div>';
  // create namespace panels
  ['bp', 'cc', 'mf'].forEach((namespace) => {
    const currentStyle = namespace === details.displayOptions.goNamespace ?
      'padding: 0px 5px 0px 5px' :
      'display: none; padding: 0px 5px 0px 5px'
    ;
    const shortName = namespace.charAt(1);
    goString += `
      <div
        id="cExtension-gene-info-go-container-${namespace}"
        style="${currentStyle}"
      >`
    ;
    if(data.go[shortName].length > 0) {
      data.go[shortName].forEach(function(term) {
        goString +=
          `<div style="padding: 2px 0px 2px 0px;">
            &#8226;
            ${term.term}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="http://amigo.geneontology.org/amigo/term/GO:${term.id}"
              style="text-decoration: none;"
            >
              &#10162;
            </a>
          </div>`
        ;
      });
    } else {
      goString += '<div style="padding: 2px 0px 2px 0px;">no terms</div>';
    }
    goString += '</div>';
  });
  goString += '</div></div>';
  if (wrapper) {
    goString = `
      <div id="cExtension_gene_info_details_go">
        ${goString}
      </div>
    `;
  }
  return goString;
};
