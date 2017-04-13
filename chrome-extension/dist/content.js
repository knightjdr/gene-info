let details = {
  displayOptions: {
    basic: true,
    description: true,
    go: true,
    interactors: true,
    links: true
  },
  report: 'detailed'
};

//set params on load
chrome.storage.local.get('click', function(storage) {
  if(storage.click) {
    document.body.addEventListener('dblclick', retrieveInfo);
  } else {
    document.body.removeEventListener('dblclick', retrieveInfo);
  }
});
chrome.storage.local.get('report', function(storage) {
  details.report = storage.report ? storage.report : 'detailed';
});
const detailTypes = ['basic', 'description', 'go', 'interactors', 'links'];
detailTypes.forEach(function(detail) {
  const currDetail = 'detail-' + detail;
  chrome.storage.local.get(currDetail, function(storage) {
    if(storage[currDetail] === 'off') {
      details.displayOptions[detail] = false;
    } else {
      details.displayOptions[detail] = true;
    }
  });
});

//listener
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.action === 'ping') {
      sendResponse({ready: true});
    } else if (request.action === 'toggleDisplayElement') {
      details.displayOptions[request.type] = request.checked;
    } else if (request.action === 'toggleDoubleClick') {
      if(request.click) {
        document.body.addEventListener('dblclick', retrieveInfo);
      } else {
        document.body.removeEventListener('dblclick', retrieveInfo);
      }
    } else if (request.action === 'toggleReportType') {
      details.report = request.type;
      const panel = document.getElementById('cExtension_gene_info_panel');
      const tooltip = document.getElementById('cExtension_gene_info_tooltip_container');
      if(panel) {
        removePanel();
      }
      if(tooltip) {
        clearTooltip();
      }
    }
    return;
  }
);

function biogridStringConstructor(data, options) {
  let biogridString = '<b>Interactors: </b>';
  biogridString += '<a rel="noopener noreferrer" target="_blank" href="https://thebiogrid.org/' + data.biogrid + '/summary/homo-sapiens/">BioGRID</a>';
  biogridString += '<hr style="margin: 1px 1px 1px 1px;"/><div>';
  if(data.interactors.length > 0) {
    data.interactors.forEach(function(interactor) {
      biogridString += '<div id="cExtension_gene_info_details_interactors" style="display: flex;">';
      biogridString += '<div style="flex: 0 0 30%;">' + interactor.gene + '</div>';
      biogridString += '<div style="flex: 1;">' + interactor.evidence + '</div>';
      biogridString += '</div>';
    });
  } else {
    biogridString += '<div id="cExtension_gene_info_details_interactors" style="display: flex;"><div style="flex: 0 0 25%;">none</div></div>';
  }
  biogridString += '</div>';
  return biogridString;
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

function disableScroll(div) {
  div.addEventListener('mousewheel', function(event) {
    var delta = event.wheelDelta || -event.detail;
    div.scrollTop += (delta < 0 ? 1 : -1) * 65;
    event.preventDefault();
  });
}

function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

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

function createDetailedTemplate(data, options) {
  if(document.getElementById('cExtension_gene_info_details') && data) {
    fillDetailedPanel(data, options);
  } else {
    clearPanel(data, 'detailed');
    createDetailedPanel(data, options);
  }
}

function fillDetailedPanel(data, options) {
  let lastNode;
  //update gene
  document.getElementById('cExtension_gene_info_details_gene').innerHTML = '<b>Gene: </b>' + data.gene;
  lastNode = document.getElementById('cExtension_gene_info_details_gene');
  //synonyms
  if(data.synonyms && options.basic) {
    let synonymString = '<b>Synonyms: </b>';
    if(data.synonyms.length > 0) {
      data.synonyms.forEach(function(synonym, i) {
        synonymString += synonym;
        if(i < data.synonyms.length - 1) {
          synonymString += ', ';
        }
      });
    } else {
      synonymString += '-';
    }
    if(document.getElementById('cExtension_gene_info_details_synonyms')) {
      document.getElementById('cExtension_gene_info_details_synonyms').innerHTML = synonymString;
    } else {
      let synonymsDiv = document.createElement('div');
      synonymsDiv.id = 'cExtension_gene_info_details_synonyms';
      synonymsDiv.innerHTML = synonymString;
      synonymsDiv.style.padding = '2px 0px 2px 0px';
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
      nameDiv.style.padding = '2px 0px 2px 0px';
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
      uniprotDiv.style.padding = '2px 0px 2px 0px';
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
      uniprotDiv.style.padding = '2px 0px 2px 0px';
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
      uniprotDiv.style.padding = '2px 0px 2px 0px';
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
      descriptionDiv.style.padding = '2px 0px 2px 0px';
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
      goDiv.style.padding = '5px 0px 2px 0px';
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
      biogridDiv.style.padding = '5px 0px 2px 0px';
      insertAfter(biogridDiv, lastNode);
    }
    lastNode = document.getElementById('cExtension_gene_info_details_biogrid');
  } else {
    if(document.getElementById('cExtension_gene_info_details_biogrid')) {
      document.getElementById('cExtension_gene_info_details_biogrid').remove();
    }
  }
}

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

function clearTooltip() {
  const container = document.getElementById('cExtension_gene_info_tooltip_container');
  if(container) {
    container.removeEventListener('click', clearTooltip);
    document.getElementById('cExtension_gene_info_tooltip_button').removeEventListener('click', removeTooltip);
    container.remove();
    window.removeEventListener('scroll', tooltipScroll.scroll);
  }
}

function removePanel() {
  if(document.getElementById('cExtension_gene_info_panel')) {
    document.getElementById('cExtension_gene_info_panel_button').removeEventListener('click', removePanel);
    document.querySelectorAll('.cExtension-gene-info-go-selector').forEach(function(element) { element.removeEventListener('click', goSelector); });
    fadeOut(document.getElementById('cExtension_gene_info_panel'));
  }
}

function removeTooltip() {
  const container = document.getElementById('cExtension_gene_info_tooltip_container');
  if(container) {
    container.removeEventListener('click', clearTooltip);
    document.getElementById('cExtension_gene_info_tooltip_button').removeEventListener('click', removeTooltip);
    window.removeEventListener('scroll', tooltipScroll.scroll);
    fadeOut(container);
  }
}

function http(gene) {
  return new Promise((resolve, reject) => {
    const paramString = '?gene=' + gene;
    chrome.runtime.sendMessage({
      method: 'GET',
      action: 'xhttp',
      url: 'http://localhost:8002/extension' + paramString
    }, function(response) {
      var parsedResponse = JSON.parse(response);
      if(parsedResponse.status === 200) {
        resolve(parsedResponse.result);
      } else {
        reject(parsedResponse.error);
      }
    });
  });
}

function retrieveInfo(event) {
  const gene = window.getSelection().toString().trim();
  http(gene)
    .then((data) => {
      if(details.report === 'detailed') {
        removeTooltip();
        createDetailedTemplate(data, details.displayOptions);
      } else {
        removePanel();
        createTooltipTemplate(event, data, details.displayOptions);
      }
    })
    .catch((err) => {
      console.log(err);
    })
  ;
}

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

function fadeIn(el) {
  const interval = 1;
  let then = Date.now();
  el.style.opacity = 0;
  function tick() {
    if(+el.style.opacity < 1) {
      requestAnimationFrame(tick);
      const now = Date.now();
      const delta = now - then;
      if(delta > interval) {
        then = now - (delta % interval);
        el.style.opacity = +el.style.opacity + 0.04;
      }
    }
  }
  tick();
}

function fadeOut(el) {
  const interval = 1;
  let then = Date.now();
  el.style.opacity = 1;
  function tick() {
    if(el.style.opacity > 0) {
      requestAnimationFrame(tick);
      const now = Date.now();
      const delta = now - then;
      if(delta > interval) {
        then = now - (delta % interval);
        el.style.opacity = el.style.opacity - 0.04;
      }
    } else {
      el.remove();
    }
  }
  tick();
}

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

const tooltipScroll = {
  init: function() {
    tooltipScroll.position.x = window.pageXOffset;
    tooltipScroll.position.y = window.pageYOffset;
    window.addEventListener('scroll', tooltipScroll.scroll);
  },
  position: {
    x: 0,
    y: 0
  },
  scroll: function() {
    const deltaX = window.pageXOffset - tooltipScroll.position.x;
    const deltaY = window.pageYOffset - tooltipScroll.position.y;
    const element = 'cExtension_gene_info_tooltip';
    document.getElementById(element).style.left = document.getElementById(element).offsetLeft - deltaX + 'px';
    document.getElementById(element).style.top = document.getElementById(element).offsetTop - deltaY + 'px';
    tooltipScroll.position.x = window.pageXOffset;
    tooltipScroll.position.y = window.pageYOffset;
  }
};
