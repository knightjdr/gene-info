const basicConstructor = (data, wrapper = true) => {
  let basicString = '';
  if (data.synonyms) {
    basicString += `
      <div
        class="cExtension-gene-info-details-backdrop"
      >
        <b>Synonyms: </b>`
    ;
    if (data.synonyms.length > 0) {
      data.synonyms.forEach(function(synonym, i) {
        basicString += synonym;
        if (i < data.synonyms.length - 1) {
          basicString += ', ';
        }
      });
    } else {
      basicString += '-';
    }
    basicString += '</div>';
  }
  if (data.fullname) {
    basicString += `
      <div
        class="cExtension-gene-info-details-backdrop"
      >
        <b>Name: </b>${data.fullname}
      </div>`
    ;
  }
  if (data.length) {
    const mw = data.mw ? Math.round(data.mw / 100) / 10 : '-';
    basicString += `
      <div
        class="cExtension-gene-info-details-backdrop"
      >
        <b>Length: </b>${data.length}aa<span style="float: right;"><b>MW:</b> ${mw}kDa</span>
      </div>`
    ;
  }
  if (wrapper) {
    basicString = `
      <div id="cExtension_gene_info_details_basic">
        ${basicString}
      </div>
    `;
  }
  return basicString;
};
