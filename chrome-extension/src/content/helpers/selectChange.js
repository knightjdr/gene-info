const selectChange = function() {
  const index = this.options[this.selectedIndex].value;
  const newResult = details.results[index];
  if (details.report === 'detailed') {
    fillDetailedPanel(newResult, details.results, details.displayOptions, false);
  } else {
    createTooltipTemplate(null, newResult, details.results, details.displayOptions, Number(index));
  }
};

const selectListener = function() {
  const el = document.getElementById('cExtension_gene_info_geneSelect');
  if (el) {
    el.removeEventListener('change', selectChange);
    el.addEventListener('change', selectChange);
  }
};
