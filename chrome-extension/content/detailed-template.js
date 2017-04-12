function biogridStringConstructor(data, options) {
  let biogridString = '<b>Interactors: </b>';
  biogridString += '<a rel="noopener noreferrer" target="_blank" href="https://thebiogrid.org/' + data.biogrid + '/summary/homo-sapiens/">BioGRID</a>';
  biogridString += '<hr style="margin: 1px 1px 1px 1px;"/><div>'
  if(data.interactors.length > 0) {
    data.interactors.forEach(function(interactor) {
      biogridString += '<div id="cExtension_gene_info_details_interactors" style="display: flex;">'
      biogridString += '<div style="flex: 0 0 25%;">' + interactor.gene + '</div>';
      biogridString += '<div style="flex: 1;">' + interactor.evidence + '</div>';
      biogridString += '</div>'
    });
  } else {
    biogridString += '<div id="cExtension_gene_info_details_interactors" style="display: flex;"><div style="flex: 0 0 25%;">none</div></div>';
  }
  biogridString += '</div>';
  return biogridString;
}

function createDetailedTemplate(data, options) {
  if(document.getElementById('cExtension_gene_info_details') && data) {
    fillDetailedPanel(data, options);
  } else {
    if(!data) {
      if(document.getElementById('cExtension_gene_info_panel')) {
        document.querySelectorAll('.cExtension-gene-info-go-selector').forEach(function(element) { element.removeEventListener('click', goSelector); });
        document.getElementById('cExtension_gene_info_panel').remove();
      }
    } else {
      if(document.getElementById('cExtension_gene_info_panel')) {
        document.getElementById('cExtension_gene_info_panel').remove();
      }
    }
    createDetailedPanel(data, options);
  }
}

function disableScroll(div) {
  div.addEventListener('mousewheel', function(event) {
    var delta = event.wheelDelta || -event.detail;
    div.scrollTop += (delta < 0 ? 1 : -1) * 65;
    event.preventDefault();
  });
}

function goStringConstructor(data, options) {
  let goString = '<b>GO terms: </b>';
  goString += '<a rel="noopener noreferrer" target="_blank" href="http://amigo.geneontology.org/amigo/gene_product/UniProtKB:' + data.uniprot + '">AmiGO</a>';
  goString += '<hr style="margin: 1px 1px 1px 1px;"/>';
  goString += '<div>';
  goString += '<div style="display: flex; flex-direction: row;">';
  goString += '<div class="cExtension-gene-info-go-selector" data-type="bp" style="background-color: #a8a6a6; border: 1px solid #90a4ae; border-radius: 2px; cursor: pointer; flex-grow: 1; margin: 0px 2px 0px 2px; text-align: center;">BP</div>';
  goString += '<div class="cExtension-gene-info-go-selector" data-type="cc" style="border: 1px solid #90a4ae; border-radius: 2px; cursor: pointer; flex-grow: 1; margin: 0px 2px 0px 2px; text-align: center;">CC</div>';
  goString += '<div class="cExtension-gene-info-go-selector" data-type="mf" style="border: 1px solid #90a4ae; border-radius: 2px; cursor: pointer; flex-grow: 1; margin: 0px 2px 0px 2px; text-align: center;">MF</div>';
  goString += '</div>';
  goString += '<div id="cExtension-gene-info-go-container-bp" style="padding: 0px 5px 0px 5px;">';
  if(data.go.p.length > 0) {
    data.go.p.forEach(function(term) {
      goString += '<div style="padding: 2px 0px 2px 0px;"> &#8226; ' + term.term + ' <a rel="noopener noreferrer" target="_blank" href="http://amigo.geneontology.org/amigo/term/GO:' + term.id + '">&#10162;</a></div>';
    });
  } else {
    goString += '<div style="padding: 2px 0px 2px 0px;">no terms</div>';
  }
  goString += '</div>';
  goString += '<div id="cExtension-gene-info-go-container-cc" style="display: none; padding: 0px 5px 0px 5px;">';
  if(data.go.c.length > 0) {
    data.go.c.forEach(function(term) {
      goString += '<div style="padding: 2px 0px 2px 0px;"> &#8226; ' + term.term + ' <a rel="noopener noreferrer" target="_blank" href="http://amigo.geneontology.org/amigo/term/GO:' + term.id + '">&#10162;</a></div>';
    });
  } else {
    goString += '<div style="padding: 2px 0px 2px 0px;">no terms</div>';
  }
  goString += '</div>';
  goString += '<div id="cExtension-gene-info-go-container-mf" style="display: none; padding: 0px 5px 0px 5px;">';
  if(data.go.f.length > 0) {
    data.go.f.forEach(function(term) {
      goString += '<div style="padding: 2px 0px 2px 0px;"> &#8226; ' + term.term + ' <a rel="noopener noreferrer" target="_blank" href="http://amigo.geneontology.org/amigo/term/GO:' + term.id + '">&#10162;</a></div>';
    });
  } else {
    goString += '<div style="padding: 2px 0px 2px 0px;">no terms</div>';
  }
  goString += '</div>';
  goString += '</div>';
  return goString;
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function removePanel() {
  document.getElementById('cExtension_gene_info_panel_button').removeEventListener('click', removePanel);
  document.querySelectorAll('.cExtension-gene-info-go-selector').forEach(function(element) { element.removeEventListener('click', goSelector); });
  fadeOut(document.getElementById('cExtension_gene_info_panel'));
}

function createDetailedPanel(data, options) {
  let newDiv = document.createElement('div');
  newDiv.id = 'cExtension_gene_info_panel';
  newDiv.style.backgroundColor = '#f5f5f5';
  newDiv.style.border = '1px solid #90a4ae';
  newDiv.style.borderRadius = '3px'
  newDiv.style.boxShadow = '0px 0px 2px 2px rgba(97, 97, 97, 0.4)';
  newDiv.style.color = '#333333';
  newDiv.style.fontFamily = 'Tahoma, Geneva, sans-serif';
  newDiv.style.fontSize = '14px';
  newDiv.style.maxHeight = 'calc(100vh - 25px)';
  newDiv.style.opacity = 0;
  newDiv.style.overflowX = 'none';
  newDiv.style.overflowY = 'auto';
  newDiv.style.padding = '5px 5px 5px 5px';
  newDiv.style.position = 'fixed';
  newDiv.style.right = '5px';
  newDiv.style.top = '5px';
  newDiv.style.width = window.innerWidth < 300 ? window.innerWidth : '300px';
  newDiv.style.zIndex = '10000';
  if(!data) {
    let htmlString = '<div id="cExtension_gene_info_empty">No gene information available</div>';
    newDiv.innerHTML = htmlString;
    document.body.insertBefore(newDiv, document.body.firstChild);
  } else {
    //add html
    let htmlString = '<div id="cExtension_gene_info_details">';
    htmlString += '<div id="cExtension_gene_info_details_gene" style="padding: 0px 0px 2px 0px;"><b>Gene: </b>' + data.gene + '</div>';
    if(data.synonyms && options.basic) {
      htmlString += '<div id="cExtension_gene_info_details_synonyms" style="padding: 2px 0px 2px 0px;"><b>Synonyms: </b>';
      data.synonyms.forEach(function(synonym, i) {
        htmlString += synonym;
        if(i < data.synonyms.length - 1) {
          htmlString += ', ';
        }
      });
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
    newDiv.innerHTML = htmlString;
    document.body.insertBefore(newDiv, document.body.firstChild);
    //listeners for GO and disable scroll
    document.querySelectorAll('.cExtension-gene-info-go-selector').forEach(function(element) { element.addEventListener('click', goSelector); });
    disableScroll(newDiv);
  }
  //create close cutton
  let closeButton = document.createElement('input');
  closeButton.id = 'cExtension_gene_info_panel_button';
  closeButton.value = 'X';
  closeButton.type = 'button';
  closeButton.style.backgroundColor = '#ef5350'
  closeButton.style.border = '1px solid #ef5350';
  closeButton.style.borderRadius = '3px'
  closeButton.style.color = '#fafafa';
  closeButton.style.cursor = 'pointer';
  closeButton.style.display = 'none';
  closeButton.style.height = '20px';
  closeButton.style.padding = '1px 1px 1px 1px';
  closeButton.style.position = 'fixed';
  closeButton.style.right = '8px';
  closeButton.style.top = '8px';
  closeButton.style.width = '20px';
  closeButton.style.zIndex = '10001';
  newDiv.appendChild(closeButton);
  newDiv.addEventListener('mouseover', function() { closeButton.style.display = 'inline' ;});
  newDiv.addEventListener('mouseout', function() { closeButton.style.display = 'none' ;});
  closeButton.addEventListener('click', removePanel);
  //show panel
  fadeIn(newDiv);
}

function fillDetailedPanel(data, options) {
  let lastNode;
  //update gene
  document.getElementById('cExtension_gene_info_details_gene').innerHTML = '<b>Gene: </b>' + data.gene;
  lastNode = document.getElementById('cExtension_gene_info_details_gene');
  //synonyms
  if(data.synonyms && options.basic) {
    let synonymString = '<b>Synonyms: </b>';
    data.synonyms.forEach(function(synonym, i) {
      synonymString += synonym;
      if(i < data.synonyms.length - 1) {
        synonymString += ', ';
      }
    });
    if(document.getElementById('cExtension_gene_info_details_synonyms')) {
      document.getElementById('cExtension_gene_info_details_synonyms').innerHTML = synonymString;
    } else {
      let synonymsDiv = document.createElement('div');
      synonymsDiv.id = 'cExtension_gene_info_details_synonyms';
      synonymsDiv.innerHTML = synonymString;
      synonymsDiv.style.padding = '2px 0px 2px 0px;'
      insertAfter(synonymsDiv, lastNode);
    }
    lastNode = document.getElementById('cExtension_gene_info_details_synonyms');
  } else {
    if(document.getElementById('cExtension_gene_info_details_synonyms')) {
      document.getElementById('cExtension_gene_info_details_synonyms').remove();
    }
  }
  //name
  if(data.fullname && options.basic) {
    let nameString = '<b>Name: </b>' + data.fullname;
    if(document.getElementById('cExtension_gene_info_details_name')) {
      document.getElementById('cExtension_gene_info_details_name').innerHTML = nameString;
    } else {
      let nameDiv = document.createElement('div');
      nameDiv.id = 'cExtension_gene_info_details_name';
      nameDiv.innerHTML = nameString;
      nameDiv.style.padding = '2px 0px 2px 0px;'
      insertAfter(nameDiv, lastNode);
    }
    lastNode = document.getElementById('cExtension_gene_info_details_name');
  } else {
    if(document.getElementById('cExtension_gene_info_details_name')) {
      document.getElementById('cExtension_gene_info_details_name').remove();
    }
  }
  //hgnc
  if(data.geneid && options.links) {
    let uniprotString = '<b>NCBI: </b><a rel="noopener noreferrer" target="_blank" href="http://www.genenames.org/cgi-bin/gene_symbol_report?hgnc_id=HGNC:' + data.hgnc + '">' + data.hgnc + '</a>';
    if(document.getElementById('cExtension_gene_info_details_hgnc')) {
      document.getElementById('cExtension_gene_info_details_hgnc').innerHTML = uniprotString;
    } else {
      let uniprotDiv = document.createElement('div');
      uniprotDiv.id = 'cExtension_gene_info_details_hgnc';
      uniprotDiv.innerHTML = uniprotString;
      uniprotDiv.style.padding = '2px 0px 2px 0px;'
      insertAfter(uniprotDiv, lastNode);
    }
    lastNode = document.getElementById('cExtension_gene_info_details_hgnc');
  } else {
    if(document.getElementById('cExtension_gene_info_details_hgnc')) {
      document.getElementById('cExtension_gene_info_details_hgnc').remove();
    }
  }
  //ncbi
  if(data.geneid && options.links) {
    let uniprotString = '<b>NCBI: </b><a rel="noopener noreferrer" target="_blank" href="https://www.ncbi.nlm.nih.gov/gene/?term=' + data.geneid + '">' + data.geneid + '</a>';
    if(document.getElementById('cExtension_gene_info_details_ncbi')) {
      document.getElementById('cExtension_gene_info_details_ncbi').innerHTML = uniprotString;
    } else {
      let uniprotDiv = document.createElement('div');
      uniprotDiv.id = 'cExtension_gene_info_details_ncbi';
      uniprotDiv.innerHTML = uniprotString;
      uniprotDiv.style.padding = '2px 0px 2px 0px;'
      insertAfter(uniprotDiv, lastNode);
    }
    lastNode = document.getElementById('cExtension_gene_info_details_ncbi');
  } else {
    if(document.getElementById('cExtension_gene_info_details_ncbi')) {
      document.getElementById('cExtension_gene_info_details_ncbi').remove();
    }
  }
  //uniprot
  if(data.uniprot && options.links) {
    let uniprotString = '<b>UniProt: </b><a rel="noopener noreferrer" target="_blank" href="http://www.uniprot.org/uniprot/' + data.uniprot + '">' + data.uniprot + '</a>';
    if(document.getElementById('cExtension_gene_info_details_uniprot')) {
      document.getElementById('cExtension_gene_info_details_uniprot').innerHTML = uniprotString;
    } else {
      let uniprotDiv = document.createElement('div');
      uniprotDiv.id = 'cExtension_gene_info_details_uniprot';
      uniprotDiv.innerHTML = uniprotString;
      uniprotDiv.style.padding = '2px 0px 2px 0px;'
      insertAfter(uniprotDiv, lastNode);
    }
    lastNode = document.getElementById('cExtension_gene_info_details_uniprot');
  } else {
    if(document.getElementById('cExtension_gene_info_details_uniprot')) {
      document.getElementById('cExtension_gene_info_details_uniprot').remove();
    }
  }
  //description
  if(data.description && options.description) {
    let descriptionString = '<b>Description: </b>' + data.description;
    if(document.getElementById('cExtension_gene_info_details_description')) {
      document.getElementById('cExtension_gene_info_details_description').innerHTML = descriptionString;
    } else {
      let descriptionDiv = document.createElement('div');
      descriptionDiv.id = 'cExtension_gene_info_details_description';
      descriptionDiv.innerHTML = descriptionString;
      descriptionDiv.style.padding = '2px 0px 2px 0px;'
      insertAfter(descriptionDiv, lastNode);
    }
    lastNode = document.getElementById('cExtension_gene_info_details_description');
  } else {
    if(document.getElementById('cExtension_gene_info_details_description')) {
      document.getElementById('cExtension_gene_info_details_description').remove();
    }
  }
  //go
  if(data.go && options.go) {
    //remove listeners for GO
    document.querySelectorAll('.cExtension-gene-info-go-selector').forEach(function(element) { element.removeEventListener('click', goSelector); });
    let goString = goStringConstructor(data, options);
    if(document.getElementById('cExtension_gene_info_details_go')) {
      document.getElementById('cExtension_gene_info_details_go').innerHTML = goString;
    } else {
      let goDiv = document.createElement('div');
      goDiv.id = 'cExtension_gene_info_details_go';
      goDiv.innerHTML = goString;
      goDiv.style.padding = '5px 0px 2px 0px;'
      insertAfter(goDiv, lastNode);
    }
    document.querySelectorAll('.cExtension-gene-info-go-selector').forEach(function(element) { element.addEventListener('click', goSelector); });
    lastNode = document.getElementById('cExtension_gene_info_details_go');
  } else {
    if(document.getElementById('cExtension_gene_info_details_go')) {
      document.getElementById('cExtension_gene_info_details_go').remove();
    }
  }
  //biogrid
  if(data.biogrid && options.interactors) {
    let biogridString = biogridStringConstructor(data, options);
    if(document.getElementById('cExtension_gene_info_details_biogrid')) {
      document.getElementById('cExtension_gene_info_details_biogrid').innerHTML = biogridString;
    } else {
      let biogridDiv = document.createElement('div');
      biogridDiv.id = 'cExtension_gene_info_details_biogrid';
      biogridDiv.innerHTML = biogridString;
      biogridDiv.style.padding = '5px 0px 2px 0px;'
      insertAfter(biogridDiv, lastNode);
    }
    lastNode = document.getElementById('cExtension_gene_info_details_biogrid');
  } else {
    if(document.getElementById('cExtension_gene_info_details_biogrid')) {
      document.getElementById('cExtension_gene_info_details_biogrid').remove();
    }
  }
}
