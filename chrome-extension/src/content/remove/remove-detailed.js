function removePanel() {
  if(document.getElementById('cExtension_gene_info_panel')) {
    window.onscroll = null;
    document.getElementById('cExtension_gene_info_panel_button').removeEventListener('click', removePanel);
    document.querySelectorAll('.cExtension-gene-info-go-selector').forEach(function(element) { element.removeEventListener('click', goSelector); });
    const changeEl = document.getElementById('cExtension_gene_info_geneSelect');
    if (changeEl) {
      changeEl.removeEventListener('change', selectChange);
    }
    fadeOut(document.getElementById('cExtension_gene_info_panel'));
  }
}
