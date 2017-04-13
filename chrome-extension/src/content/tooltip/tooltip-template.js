function createTooltipTemplate(event, data, options) {
  clearTooltip();
  let containerDiv = document.createElement('div');
  containerDiv.id = 'cExtension_gene_info_tooltip_container';
  containerDiv.style.height = '100vh';
  containerDiv.style.left = '0px';
  containerDiv.style.position = 'fixed';
  containerDiv.style.top = '0px';
  containerDiv.style.width = '100vw';
  containerDiv.style.zIndex = '10000';
  document.body.insertBefore(containerDiv, document.body.firstChild);
  containerDiv.addEventListener('click', clearTooltip);
  //create tooltip
  let tooltipDiv = document.createElement('div');
  tooltipDiv.id = 'cExtension_gene_info_tooltip';
  tooltipDiv.style.backgroundColor = '#f5f5f5';
  tooltipDiv.style.border = '1px solid #90a4ae';
  tooltipDiv.style.borderRadius = '3px';
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
  if(!data) {
    let htmlString = '<div id="cExtension_gene_info_empty">No gene information available</div>';
    tooltipDiv.innerHTML = htmlString;
    containerDiv.appendChild(tooltipDiv);
  } else {
    //add html
    let htmlString = '<div style="padding: 0px 0px 2px 0px; text-align: center;">' + data.fullname + '</div>';
    htmlString += '<div style="display: flex; flex-direction: row; flex-wrap: wrap;">';
    if(data.hgnc && options.links) {
      htmlString += '<span style="flex-grow: 1; text-align: center; min-width: 80px;"><a rel="noopener noreferrer" target="_blank" href="http://www.genenames.org/cgi-bin/gene_symbol_report?hgnc_id=HGNC:' + data.hgnc + '">HGNC</a></span>';
    }
    if(data.geneid && options.links) {
      htmlString += '<span style="flex-grow: 1; text-align: center; min-width: 80px;"><a rel="noopener noreferrer" target="_blank" href="https://www.ncbi.nlm.nih.gov/gene/?term=' + data.geneid + '">NCBI</a></span>';
    }
    if(data.uniprot && options.links) {
      htmlString += '<span style="flex-grow: 1; text-align: center; min-width: 80px;"><a rel="noopener noreferrer" target="_blank" href="http://www.uniprot.org/uniprot/' + data.uniprot + '">UniProt</a></span>';
    }
    if(data.go && options.go) {
      htmlString += '<span style="flex-grow: 1; text-align: center; min-width: 80px;"><a rel="noopener noreferrer" target="_blank" href="http://amigo.geneontology.org/amigo/gene_product/UniProtKB:' + data.uniprot + '">AmiGO</a></span>';
    }
    if(data.biogrid && options.interactors) {
      htmlString += '<span style="flex-grow: 1; text-align: center; min-idth: 80px;"><a rel="noopener noreferrer" target="_blank" href="https://thebiogrid.org/' + data.biogrid + '/summary/homo-sapiens/">BioGRID</a></span>';
    }
    htmlString += '</div>';
    tooltipDiv.innerHTML = htmlString;
    containerDiv.appendChild(tooltipDiv);
  }
  //position tooltip
  const divHeight = tooltipDiv.offsetHeight;
  const divWidth = tooltipDiv.offsetWidth;
  const scrollOffset =  window.innerWidth > document.documentElement.clientWidth ? 15 : 0;
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;
  if(event.clientX < 5) {
    tooltipDiv.style.left = '5px';
  } else if(event.clientX + divWidth > viewportWidth - 5) {
    tooltipDiv.style.left = viewportWidth - divWidth - scrollOffset - 5 + 'px';
  } else {
    tooltipDiv.style.left = event.clientX + 'px';
  }
  if(event.clientY - divHeight < 5) {
    tooltipDiv.style.top = '5px';
  } else if(event.clientY > viewportHeight - 5) {
    tooltipDiv.style.top = viewportHeight - divHeight - 5 + 'px';
  } else {
    tooltipDiv.style.top = event.clientY - divHeight + 'px';
  }
  //create close cutton
  let closeButton = document.createElement('span');
  closeButton.id = 'cExtension_gene_info_tooltip_button';
  closeButton.innerHTML = 'x';
  closeButton.style.color = '#90a4ae';
  closeButton.style.cursor = 'pointer';
  closeButton.style.height = '15px';
  closeButton.style.lineHeight = '15px';
  closeButton.style.position = 'absolute';
  closeButton.style.right = '-2px';
  closeButton.style.textAlign = 'center';
  closeButton.style.top = '-2px';
  closeButton.style.width = '15px';
  closeButton.style.zIndex = '10002';
  tooltipDiv.appendChild(closeButton);
  closeButton.addEventListener('click', removeTooltip);
  //show panel
  fadeIn(tooltipDiv);
  //bind scroll event
  tooltipScroll.init('cExtension_gene_info_tooltip');
}
