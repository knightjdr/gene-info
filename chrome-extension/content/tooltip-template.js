function clearTooltip() {
  const container = document.getElementById('cExtension_gene_info_tooltip_container');
  if(container) {
    container.removeEventListener('click', clearTooltip);
    document.getElementById('cExtension_gene_info_tooltip_button').removeEventListener('click', removeTooltip);
    container.remove();
  }
}

function removeTooltip() {
  const container = document.getElementById('cExtension_gene_info_tooltip_container');
  container.removeEventListener('click', clearTooltip);
  document.getElementById('cExtension_gene_info_tooltip_button').removeEventListener('click', removeTooltip);
  fadeOut(container);
}

function createTooltipTemplate(event, data, options) {
  clearTooltip();
  let containerDiv = document.createElement('div');
  containerDiv.id = 'cExtension_gene_info_tooltip_container';
  containerDiv.style.height = '100vh';
  containerDiv.style.left = '0px';
  containerDiv.style.position = 'fixed';
  containerDiv.style.top = '0px'
  containerDiv.style.width = '100vw';
  containerDiv.style.zIndex = '10000';
  document.body.insertBefore(containerDiv, document.body.firstChild);
  containerDiv.addEventListener('click', clearTooltip);
  //create tooltip
  let tooltipDiv = document.createElement('div');
  tooltipDiv.id = 'cExtension_gene_info_tooltip';
  tooltipDiv.style.backgroundColor = '#f5f5f5';
  tooltipDiv.style.border = '1px solid #90a4ae';
  tooltipDiv.style.borderRadius = '3px'
  tooltipDiv.style.boxShadow = '0px 0px 2px 2px rgba(97, 97, 97, 0.4)';
  tooltipDiv.style.color = '#333333';
  tooltipDiv.style.fontFamily = 'Tahoma, Geneva, sans-serif';
  tooltipDiv.style.fontSize = '14px';
  tooltipDiv.style.height = 'auto';
  tooltipDiv.style.maxWidth = '250px';
  tooltipDiv.style.opacity = 0;
  tooltipDiv.style.padding = '5px 5px 5px 5px';
  tooltipDiv.style.position = 'relative';
  tooltipDiv.style.width = 'auto';
  tooltipDiv.style.zIndex = '10001';
  //add html
  let htmlString = '<div style="padding: 0px 0px 2px 0px; text-align: center;">' + data.fullname + '</div>';
  htmlString += '<div style="display: flex; flex-direction: row; flex-wrap: wrap;">'
  if(data.uniprot && options.links) {
    htmlString += '<span style="flex-grow: 1; text-align: center; min-width: 80px;"><a rel="noopener noreferrer" target="_blank" href="http://www.uniprot.org/uniprot/' + data.uniprot + '">UniProt</a></span>';
  }
  if(data.go && options.go) {
    htmlString += '<span style="flex-grow: 1; text-align: center; min-width: 80px;"><a rel="noopener noreferrer" target="_blank" href="http://amigo.geneontology.org/amigo/gene_product/UniProtKB:' + data.uniprot + '">AmiGO</a></span>';
  }
  if(data.biogrid && options.interactors) {
    htmlString += '<span style="flex-grow: 1; text-align: center; min-idth: 80px;"><a rel="noopener noreferrer" target="_blank" href="https://thebiogrid.org/' + data.biogrid + '/summary/homo-sapiens/">BioGRID</a></span>';
  }
  htmlString += '</div>'
  tooltipDiv.innerHTML = htmlString;
  containerDiv.appendChild(tooltipDiv);
  //position tooltip
  const divHeight = tooltipDiv.offsetHeight;
  const divWidth = tooltipDiv.offsetWidth;
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;
  if(event.clientX < 5) {
    tooltipDiv.style.left = '5px';
  } else if(event.clientX + divWidth > viewportWidth - 5) {
    tooltipDiv.style.left = viewportWidth - divWidth - 5 + 'px';
  } else {
    tooltipDiv.style.left = event.clientX + 'px';
  }
  if(event.clientY + divHeight < 5) {
    tooltipDiv.style.top = '5px';
  } else if(event.clientY > viewportHeight - 5) {
    tooltipDiv.style.top = viewportHeight - divHeight - 5 + 'px';
  } else {
    tooltipDiv.style.top = event.clientY - divHeight + 'px';
  }
  //create close cutton
  let closeButton = document.createElement('input');
  closeButton.id = 'cExtension_gene_info_tooltip_button';
  closeButton.value = 'x';
  closeButton.type = 'button';
  closeButton.style.backgroundColor = 'transparent'
  closeButton.style.border = '1px solid transparent';
  closeButton.style.borderRadius = '2px'
  closeButton.style.color = '#90a4ae';
  closeButton.style.cursor = 'pointer';
  closeButton.style.height = '20px';
  closeButton.style.margin = '-5px 0px 0px 0px';
  closeButton.style.padding = '0px 0px 0px 0px';
  closeButton.style.position = 'absolute';
  closeButton.style.right = '1px';
  closeButton.style.top = '0px';
  closeButton.style.width = '15px';
  closeButton.style.zIndex = '10002';
  tooltipDiv.appendChild(closeButton);
  closeButton.addEventListener('click', removeTooltip);
  //show panel
  fadeIn(tooltipDiv);
}
