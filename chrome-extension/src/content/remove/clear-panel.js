function clearPanel(data, type) {
  if(!data) {
    if(document.getElementById('cExtension_gene_info_panel')) {
      document.querySelectorAll('.cExtension-gene-info-go-selector').forEach(function(element) { element.removeEventListener('click', goSelector); });
      document.getElementById('cExtension_gene_info_panel_button').removeEventListener('click', removePanel);
      document.getElementById('cExtension_gene_info_panel').remove();
    }
  } else {
    if(document.getElementById('cExtension_gene_info_panel')) {
      document.getElementById('cExtension_gene_info_panel').remove();
    }
  }
}
