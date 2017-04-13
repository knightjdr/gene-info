function removeTooltip() {
  const container = document.getElementById('cExtension_gene_info_tooltip_container');
  if(container) {
    container.removeEventListener('click', clearTooltip);
    document.getElementById('cExtension_gene_info_tooltip_button').removeEventListener('click', removeTooltip);
    window.removeEventListener('scroll', tooltipScroll.scroll);
    fadeOut(container);
  }
}
