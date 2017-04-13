function createDetailedTemplate(data, options) {
  if(document.getElementById('cExtension_gene_info_details') && data) {
    fillDetailedPanel(data, options);
  } else {
    clearPanel(data, 'detailed');
    createDetailedPanel(data, options);
  }
}
