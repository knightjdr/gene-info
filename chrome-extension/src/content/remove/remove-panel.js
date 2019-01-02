const removePanel = () => {
  const panel = document.getElementById('gene-info__panel');
  if (panel) {
    window.onscroll = null;
    document.getElementById('gene-info__panel-remove').removeEventListener('click', removePanel);
    document.querySelectorAll('.gene-info__go-selector').forEach((element) => {
      element.removeEventListener('click', namespaceSelect);
    });
    const changeEl = document.getElementById('gene-info__gene-select');
    if (changeEl) {
      changeEl.removeEventListener('change', geneSelect);
    }
    fadeOut(panel);
  }
}

module.exports = removePanel;
