function createDetailedPanel(data, options) {
  let detailedDiv = document.createElement('div');
  detailedDiv.id = 'cExtension_gene_info_panel';
  detailedDiv.style.backgroundColor = '#f5f5f5';
  detailedDiv.style.border = '1px solid #90a4ae';
  detailedDiv.style.borderRadius = '3px';
  detailedDiv.style.boxShadow = '0px 0px 2px 2px rgba(97, 97, 97, 0.4)';
  detailedDiv.style.color = '#333333';
  detailedDiv.style.fontFamily = 'Tahoma, Geneva, sans-serif';
  detailedDiv.style.fontSize = '14px';
  detailedDiv.style.maxHeight = 'calc(100vh - 25px)';
  detailedDiv.style.minWidth = window.innerWidth < 310 ? window.innerWidth - 10 + 'px' : '300px';
  detailedDiv.style.opacity = 0;
  detailedDiv.style.overflowX = 'none';
  detailedDiv.style.overflowY = 'auto';
  detailedDiv.style.padding = '5px 5px 5px 5px';
  detailedDiv.style.position = 'fixed';
  detailedDiv.style.right = '5px';
  detailedDiv.style.top = '5px';
  detailedDiv.style.textAlign = 'left';
  detailedDiv.style.width = window.innerWidth < 310 ? window.innerWidth - 10 + 'px' : 'calc(25vw)';
  detailedDiv.style.zIndex = '10000';
  if(!data) {
    let htmlString = '<div id="cExtension_gene_info_empty">No gene information available</div>';
    detailedDiv.innerHTML = htmlString;
    document.body.insertBefore(detailedDiv, document.body.firstChild);
  } else {
    //add html
    let htmlString = '<div id="cExtension_gene_info_details">';
    htmlString += '<div id="cExtension_gene_info_details_gene" style="padding: 0px 0px 2px 0px;"><b>Gene: </b>' + data.gene + '</div>';
    if(data.synonyms && options.basic) {
      htmlString += '<div id="cExtension_gene_info_details_synonyms" style="padding: 2px 0px 2px 0px;"><b>Synonyms: </b>';
      if(data.synonyms.length > 0) {
        data.synonyms.forEach(function(synonym, i) {
          htmlString += synonym;
          if(i < data.synonyms.length - 1) {
            htmlString += ', ';
          }
        });
      } else {
        htmlString += '-';
      }
      htmlString += '</div>';
    }
    if(data.fullname && options.basic) {
      htmlString += '<div id="cExtension_gene_info_details_name" style="padding: 2px 0px 2px 0px;"><b>Name: </b>';
      htmlString += data.fullname;
      htmlString += '</div>';
    }
    if(data.hgnc && options.links) {
      htmlString += '<div id="cExtension_gene_info_details_hgnc" style="padding: 2px 0px 2px 0px;"><b>HGNC: </b>';
      htmlString += '<a rel="noopener noreferrer" target="_blank" href="http://www.genenames.org/cgi-bin/gene_symbol_report?hgnc_id=HGNC:' + data.hgnc + '">' + data.hgnc + '</a>';
      htmlString += '</div>';
    }
    if(data.geneid && options.links) {
      htmlString += '<div id="cExtension_gene_info_details_ncbi" style="padding: 2px 0px 2px 0px;"><b>NCBI: </b>';
      htmlString += '<a rel="noopener noreferrer" target="_blank" href="https://www.ncbi.nlm.nih.gov/gene/?term=' + data.geneid + '">' + data.geneid + '</a>';
      htmlString += '</div>';
    }
    if(data.uniprot && options.links) {
      htmlString += '<div id="cExtension_gene_info_details_uniprot" style="padding: 2px 0px 2px 0px;"><b>UniProt: </b>';
      htmlString += '<a rel="noopener noreferrer" target="_blank" href="http://www.uniprot.org/uniprot/' + data.uniprot + '">' + data.uniprot + '</a>';
      htmlString += '</div>';
    }
    if(data.description && options.description) {
      htmlString += '<div id="cExtension_gene_info_details_description" style="padding: 2px 0px 2px 0px;"><b>Description: </b>';
      htmlString += data.description;
      htmlString += '</div>';
    }
    if(data.go && options.go) {
      htmlString += '<div id="cExtension_gene_info_details_go" style="padding: 5px 0px 2px 0px;">';
      htmlString += goStringConstructor(data, options);
      htmlString += '</div>';
    }
    if(data.biogrid && options.interactors) {
      htmlString += '<div id="cExtension_gene_info_details_biogrid" style="padding: 5px 0px 2px 0px;">';
      htmlString += biogridStringConstructor(data, options);
      htmlString += '</div>';
    }
    htmlString += '</div>';
    detailedDiv.innerHTML = htmlString;
    document.body.insertBefore(detailedDiv, document.body.firstChild);
    //listeners for GO and disable scroll
    document.querySelectorAll('.cExtension-gene-info-go-selector').forEach(function(element) { element.addEventListener('click', goSelector); });
    disableScroll(detailedDiv);
  }
  //create close cutton
  let closeButton = document.createElement('span');
  closeButton.id = 'cExtension_gene_info_panel_button';
  closeButton.innerHTML = 'x';
  closeButton.style.backgroundColor = '#ef5350';
  closeButton.style.borderRadius = '2px';
  closeButton.style.color = '#fafafa';
  closeButton.style.cursor = 'pointer';
  closeButton.style.display = 'none';
  closeButton.style.height = '15px';
  closeButton.style.lineHeight = '15px';
  closeButton.style.padding = '0px 1px 1px 1px';
  closeButton.style.position = 'fixed';
  closeButton.style.right = '25px';
  closeButton.style.textAlign = 'center';
  closeButton.style.top = '8px';
  closeButton.style.width = '15px';
  closeButton.style.zIndex = '10001';
  detailedDiv.appendChild(closeButton);
  detailedDiv.addEventListener('mouseover', function() { closeButton.style.display = 'inline' ;});
  detailedDiv.addEventListener('mouseout', function() { closeButton.style.display = 'none' ;});
  closeButton.addEventListener('click', removePanel);
  //show panel
  fadeIn(detailedDiv);
}
