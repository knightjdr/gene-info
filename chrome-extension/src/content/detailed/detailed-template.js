const createDetailedTemplate = (selectedResult, completeResults, options) => {
  if (
    document.getElementById('cExtension_gene_info_details') &&
    selectedResult
  ) {
    fillDetailedPanel(selectedResult, completeResults, options);
  } else {
    clearPanel(selectedResult, 'detailed');
    createDetailedPanel(selectedResult, completeResults, options);
  }
};
