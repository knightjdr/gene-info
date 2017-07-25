const geneConstructor = (selectedResult, completeResults, fullname = false, resultsIndex = 0) => {
  let geneString = '';
  if(completeResults.length == 1) {
    geneString = fullname ? selectedResult.fullname : selectedResult.gene;
  } else {
    geneString += '<select id="cExtension_gene_info_geneSelect">';
    completeResults.forEach((result, index) => {
      const synonyms = result.synonyms.length === 0 ?
        'none' :
        result.synonyms.join(', ')
      ;
      const displayName = fullname ? result.fullname : result.gene;
      if (index === resultsIndex) {
        geneString += `
          <option
            selected
            title="Synonyms: (${synonyms})"
            value=${index}
          >
            ${displayName}
          </option>
        `;
      } else {
        geneString += `
          <option
            title="Synonyms: (${synonyms})"
            value=${index}
          >
            ${displayName}
          </option>
        `;
      }
    });
    geneString += '</select>';
  }
  return geneString;
};
