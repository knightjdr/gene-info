function goSelector() {
  const selectedType = this.dataset.type;
  const types = ['bp', 'cc', 'mf'];
  types.forEach(function(v) {
    if(v !== selectedType) {
      document.querySelector('#cExtension-gene-info-go-container-' + v).style.display = 'none';
    }
  });
  document.querySelector('#cExtension-gene-info-go-container-' + selectedType).style.display = 'inline-block';
  document.querySelectorAll('.cExtension-gene-info-go-selector').forEach(function(element) {
    if(element.dataset.type === selectedType) {
      element.style.backgroundColor = '#a8a6a6';
    } else {
      element.style.backgroundColor = 'transparent';
    }
  });
}
