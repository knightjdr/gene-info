let details = {
  displayOptions: {
    basic: true,
    description: true,
    domain: true,
    go: true,
    interactors: true,
    links: true
  },
  report: 'detailed'
};

//set params on load
chrome.storage.local.get('click', function(storage) {
  if (storage.click) {
    document.body.addEventListener('dblclick', retrieveInfo);
  } else {
    document.body.removeEventListener('dblclick', retrieveInfo);
  }
});
chrome.storage.local.get('report', function(storage) {
  details.report = storage.report ? storage.report : 'detailed';
});
const detailTypes = ['basic', 'description', 'domain', 'go', 'interactors', 'links'];
detailTypes.forEach(function(detail) {
  const currDetail = 'detail-' + detail;
  chrome.storage.local.get(currDetail, function(storage) {
    if (storage[currDetail] === 'off') {
      details.displayOptions[detail] = false;
    } else {
      details.displayOptions[detail] = true;
    }
  });
});

//listener
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === 'ping') {
      sendResponse({ready: true});
    } else if (request.action === 'toggleDisplayElement') {
      details.displayOptions[request.type] = request.checked;
    } else if (request.action === 'toggleDoubleClick') {
      if (request.click) {
        document.body.addEventListener('dblclick', retrieveInfo);
      } else {
        document.body.removeEventListener('dblclick', retrieveInfo);
      }
    } else if (request.action === 'toggleReportType') {
      details.report = request.type;
      const panel = document.getElementById('cExtension_gene_info_panel');
      const tooltip = document.getElementById('cExtension_gene_info_tooltip_container');
      if (panel) {
        removePanel();
      }
      if (tooltip) {
        clearTooltip();
      }
    }
    return;
  }
);

function biogridStringConstructor(data, options) {
  let biogridString = `
    <div class="cExtension-gene-info-section-header">
      <b>INTERACTORS:</b>
      <a rel="noopener noreferrer" target="_blank" href="https://thebiogrid.org/${data.biogrid}/summary/homo-sapiens/">BioGRID</a>
    </div>`
  ;
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

const domainConstructor = (data, options) => {
  let domainString = `
    <div class="cExtension-gene-info-section-header">
      <b>DOMAINS:</b>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.ebi.ac.uk/interpro/protein/${data.uniprot}"
      >
        InterPro
      </a>
    </div>`
  ;
  const length = data.length ? data.length : '-';
  const mw = data.mw ? data.mw : '-';
  domainString = `
    <div>
      <b>Length:</b> ${length}, <b>MW:</b> ${mw}
    </div>`
  ;
  if (data.domains.length > 0) {
    data.domains.forEach((domain) => {
      domainString += '<div id="cExtension_gene_info_details_domains" style="display: flex;">';
      domainString += `
        <div style="flex: 0 0 30%;">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.ebi.ac.uk/interpro/entry/${domain.domain_interpro}"
          >
            ${domain.domain_name}
          </a>
        </div>`
      ;
      domainString += `
        <div style="flex: 1;">
          ${domain.domain_start}
        </div>`
      ;
      domainString += `
        <div style="flex: 1;">
          ${domain.domain_end}
        </div>`
      ;
      domainString += '</div>';
    });
  } else {
    domainString += `
      <div
        id="cExtension_gene_info_details_domains"
        style="display: flex;"
      >
        <div style="flex: 0 0 25%;">
          none
        </div>
      </div>`
    ;
  }
  domainString += '</div>';
  return domainString;
};

const goStringConstructor = (data, options) => {
  let goString =
    `<div class="cExtension-gene-info-section-header">
      <b>GO TERMS: </b>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="http://amigo.geneontology.org/amigo/gene_product/UniProtKB:${data.uniprot}"
      >
        AmiGO
      </a>
    </div>
    <div>
      <div style="display: flex; flex-direction: row;">
        <div
          class="cExtension-gene-info-go-selector active"
          data-type="bp"
        >
          BP
        </div>
        <div
          class="cExtension-gene-info-go-selector"
          data-type="cc"
        >
          CC
        </div>
        <div
          class="cExtension-gene-info-go-selector"
          data-type="mf"
        >
          MF
        </div>
      </div>
    `
  ;
  goString += `
    <div
      id="cExtension-gene-info-go-container-bp"
      style="padding: 0px 5px 0px 5px;"
    >`
  ;
  if(data.go.p.length > 0) {
    data.go.p.forEach(function(term) {
      goString +=
        `<div style="padding: 2px 0px 2px 0px;">
          &#8226;
          ${term.term}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://amigo.geneontology.org/amigo/term/GO:${term.id}"
            style="text-decoration: none;"
          >
            &#10162;
          </a>
        </div>`
      ;
    });
  } else {
    goString += '<div style="padding: 2px 0px 2px 0px;">no terms</div>';
  }
  goString += '</div>';
  goString += `
    <div
      id="cExtension-gene-info-go-container-cc"
      style="display: none; padding: 0px 5px 0px 5px;"
    >`
  ;
  if(data.go.c.length > 0) {
    data.go.c.forEach(function(term) {
      goString +=
        `<div style="padding: 2px 0px 2px 0px;">
          &#8226;
          ${term.term}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://amigo.geneontology.org/amigo/term/GO:${term.id}"
            style="text-decoration: none;"
          >
            &#10162;
          </a>
        </div>`
      ;
    });
  } else {
    goString += '<div style="padding: 2px 0px 2px 0px;">no terms</div>';
  }
  goString += '</div>';
  goString += `
    <div
      id="cExtension-gene-info-go-container-mf"
      style="display: none; padding: 0px 5px 0px 5px;"
    >`
  ;
  if(data.go.f.length > 0) {
    data.go.f.forEach(function(term) {
      goString +=
        `<div style="padding: 2px 0px 2px 0px;">
          &#8226;
          ${term.term}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://amigo.geneontology.org/amigo/term/GO:${term.id}"
            style="text-decoration: none;"
          >
            &#10162;
          </a>
        </div>`
      ;
    });
  } else {
    goString += '<div style="padding: 2px 0px 2px 0px;">no terms</div>';
  }
  goString += '</div>';
  goString += '</div>';
  return goString;
};

createDetailedPanel = (data, options) => {
  let detailedDiv = document.createElement('div');
  detailedDiv.id = 'cExtension_gene_info_panel';
  if (!data) {
    detailedDiv.className = 'cExtension-gene-info-panel-backdrop-small';
    let htmlString = '<div id="cExtension_gene_info_empty">No gene information available</div>';
    detailedDiv.innerHTML = htmlString;
    document.body.insertBefore(detailedDiv, document.body.firstChild);
  } else {
    detailedDiv.className = 'cExtension-gene-info-panel-backdrop';
    detailedDiv.style.minWidth = window.innerWidth < 310 ? window.innerWidth - 10 + 'px' : '300px';
    detailedDiv.style.width = window.innerWidth < 310 ? window.innerWidth - 10 + 'px' : 'calc(25vw)';
    // css 'classes'
    //add html
    let htmlString = '<div id="cExtension_gene_info_details">';
    htmlString += `
      <div
        class="cExtension-gene-info-details-backdrop"
        id="cExtension_gene_info_details_gene"
      >
        <b>Gene: </b>${data.gene}
      </div>`
    ;
    if (data.synonyms && options.basic) {
      htmlString += `
        <div
          class="cExtension-gene-info-details-backdrop"
          id="cExtension_gene_info_details_synonyms"
        >
          <b>Synonyms: </b>`
      ;
      if (data.synonyms.length > 0) {
        data.synonyms.forEach(function(synonym, i) {
          htmlString += synonym;
          if (i < data.synonyms.length - 1) {
            htmlString += ', ';
          }
        });
      } else {
        htmlString += '-';
      }
      htmlString += '</div>';
    }
    if (data.fullname && options.basic) {
      htmlString += `
        <div
          class="cExtension-gene-info-details-backdrop"
          id="cExtension_gene_info_details_name"
        >
          <b>Name: </b>${data.fullname}
        </div>`
      ;
    }
    if (data.geneid && options.links) {
      htmlString +=
        `<div
          class="cExtension-gene-info-details-backdrop"
          id="cExtension_gene_info_details_ncbi"
        >
          <b>NCBI: </b>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.ncbi.nlm.nih.gov/gene/?term=${data.geneid }"
          >
            ${data.geneid}
          </a>
        </div>`
      ;
    }
    if (data.uniprot && options.links) {
      htmlString +=
        `<div
          class="cExtension-gene-info-details-backdrop"
          id="cExtension_gene_info_details_uniprot"
        >
          <b>UniProt: </b>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://www.uniprot.org/uniprot/${data.uniprot}"
          >
            ${data.uniprot}
          </a>
        </div>`
      ;
    }
    if (data['ensembl-gene'] && options.links) {
      htmlString +=
        `<div
          class="cExtension-gene-info-details-backdrop"
          id="cExtension_gene_info_details_hpa"
        >
          <b>Human Protein Atlas: </b>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://www.proteinatlas.org/${data['ensembl-gene']}/cell"
          >
            ${data['ensembl-gene']}
          </a>
        </div>`
      ;
    }
    if (data.description && options.description) {
      htmlString +=
        `<div
          class="cExtension-gene-info-details-backdrop"
          id="cExtension_gene_info_details_description"
        >
          <b>Description: </b>${data.description}
        </div>`
      ;
    }
    if ((data.domains || data.length || data.mw) && options.domain) {
      htmlString += '<div class="cExtension-gene-info-bevel-line"></div>';
      htmlString +=
        `<div
          class="cExtension-gene-info-details-backdrop"
          id="cExtension_gene_info_details_domain"
        >
          ${domainConstructor(data, options)}
        </div>`
      ;
    }
    if (data.go && options.go) {
      htmlString += '<div class="cExtension-gene-info-bevel-line"></div>';
      htmlString +=
        `<div
          class="cExtension-gene-info-details-backdrop"
          id="cExtension_gene_info_details_go"
        >
          ${goStringConstructor(data, options)}
        </div>`
      ;
    }
    if (data.biogrid && options.interactors) {
      htmlString += '<div class="cExtension-gene-info-bevel-line"></div>';
      htmlString +=
        `<div
          class="cExtension-gene-info-details-backdrop"
          id="cExtension_gene_info_details_biogrid"
        >
          ${biogridStringConstructor(data, options)}
        </div>`
      ;
    }
    htmlString += '</div>';
    detailedDiv.innerHTML = htmlString;
    document.body.insertBefore(detailedDiv, document.body.firstChild);
    //listeners for GO and disable scroll
    document.querySelectorAll('.cExtension-gene-info-go-selector').forEach(function(element) { element.addEventListener('click', goSelector); });
    addDrag(detailedDiv);
    // disableScroll(detailedDiv);
  }
  //create close cutton
  let closeButton = document.createElement('span');
  closeButton.id = 'cExtension_gene_info_panel_button';
  closeButton.className = 'cExtension-gene-info-panel-button';
  closeButton.innerHTML = 'x';
  detailedDiv.appendChild(closeButton);
  if (data) {
    detailedDiv.addEventListener('mouseover', function() { closeButton.style.display = 'inline' ;});
    detailedDiv.addEventListener('mouseout', function() { closeButton.style.display = 'none' ;});
  } else {
    closeButton.style.display = 'inline';
  }
  closeButton.addEventListener('click', removePanel);
  //show panel
  fadeIn(detailedDiv);
};

const createDetailedTemplate = (data, options) => {
  if (document.getElementById('cExtension_gene_info_details') && data) {
    fillDetailedPanel(data, options);
  } else {
    clearPanel(data, 'detailed');
    createDetailedPanel(data, options);
  }
};

fillDetailedPanel = (data, options) => {
  let lastNode;
  //update gene
  document.getElementById('cExtension_gene_info_details_gene').innerHTML = '<b>Gene: </b>' + data.gene;
  lastNode = document.getElementById('cExtension_gene_info_details_gene');
  //synonyms
  if (data.synonyms && options.basic) {
    let synonymString = '<b>Synonyms: </b>';
    if (data.synonyms.length > 0) {
      data.synonyms.forEach(function(synonym, i) {
        synonymString += synonym;
        if (i < data.synonyms.length - 1) {
          synonymString += ', ';
        }
      });
    } else {
      synonymString += '-';
    }
    if (document.getElementById('cExtension_gene_info_details_synonyms')) {
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
    if (document.getElementById('cExtension_gene_info_details_synonyms')) {
      document.getElementById('cExtension_gene_info_details_synonyms').remove();
    }
  }
  //name
  if (data.fullname && options.basic) {
    let nameString = '<b>Name: </b>' + data.fullname;
    if (document.getElementById('cExtension_gene_info_details_name')) {
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
    if (document.getElementById('cExtension_gene_info_details_name')) {
      document.getElementById('cExtension_gene_info_details_name').remove();
    }
  }
  //ncbi
  if (data.geneid && options.links) {
    let uniprotString = `
      <b>NCBI: </b>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.ncbi.nlm.nih.gov/gene/?term=${data.geneid}"
      >
        ${data.geneid }
      </a>`
    ;
    if (document.getElementById('cExtension_gene_info_details_ncbi')) {
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
    if (document.getElementById('cExtension_gene_info_details_ncbi')) {
      document.getElementById('cExtension_gene_info_details_ncbi').remove();
    }
  }
  //uniprot
  if (data.uniprot && options.links) {
    let uniprotString = `
      <b>UniProt: </b>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="http://www.uniprot.org/uniprot/${data.uniprot}"
      >
        ${data.uniprot}
      </a>`
    ;
    if (document.getElementById('cExtension_gene_info_details_uniprot')) {
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
    if (document.getElementById('cExtension_gene_info_details_uniprot')) {
      document.getElementById('cExtension_gene_info_details_uniprot').remove();
    }
  }
  // HPA
  if (data['ensembl-gene'] && options.links) {
    let uniprotString = `
      <b>Human Protein Atlas: </b>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="http://www.proteinatlas.org/${data['ensembl-gene']}/cell"
      >
        ${data['ensembl-gene']}
      </a>`
    ;
    if (document.getElementById('cExtension_gene_info_details_hpa')) {
      document.getElementById('cExtension_gene_info_details_hpa').innerHTML = uniprotString;
    } else {
      let uniprotDiv = document.createElement('div');
      uniprotDiv.id = 'cExtension_gene_info_details_hpa';
      uniprotDiv.innerHTML = uniprotString;
      uniprotDiv.style.padding = '2px 0px 2px 0px';
      insertAfter(uniprotDiv, lastNode);
    }
    lastNode = document.getElementById('cExtension_gene_info_details_hpa');
  } else {
    if (document.getElementById('cExtension_gene_info_details_hpa')) {
      document.getElementById('cExtension_gene_info_details_hpa').remove();
    }
  }
  //description
  if (data.description && options.description) {
    let descriptionString = '<b>Description: </b>' + data.description;
    if (document.getElementById('cExtension_gene_info_details_description')) {
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
    if (document.getElementById('cExtension_gene_info_details_description')) {
      document.getElementById('cExtension_gene_info_details_description').remove();
    }
  }
  //go
  if (data.go && options.go) {
    //remove listeners for GO
    document.querySelectorAll('.cExtension-gene-info-go-selector').forEach(function(element) { element.removeEventListener('click', goSelector); });
    let goString = goStringConstructor(data, options);
    if (document.getElementById('cExtension_gene_info_details_go')) {
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
    if (document.getElementById('cExtension_gene_info_details_go')) {
      document.getElementById('cExtension_gene_info_details_go').remove();
    }
  }
  //biogrid
  if (data.biogrid && options.interactors) {
    let biogridString = biogridStringConstructor(data, options);
    if (document.getElementById('cExtension_gene_info_details_biogrid')) {
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
    if (document.getElementById('cExtension_gene_info_details_biogrid')) {
      document.getElementById('cExtension_gene_info_details_biogrid').remove();
    }
  }
};

const addDrag = (div) => {
  let startX;
  const mouseMove = (event) => {
    const delta = startX - event.screenX;
    startX = event.screenX;
    const right = document.documentElement.clientWidth - div.getBoundingClientRect().right;
    div.style.right = `${right + delta}px`;
  };
  div.addEventListener('mousedown', function(event) {
    startX = event.screenX;
    div.addEventListener('mousemove', mouseMove);
  });
  div.addEventListener('mouseup', function() {
    div.removeEventListener('mousemove', mouseMove);
  });
};

const disableScroll = (div) => {
  const x = window.scrollX;
  const y = window.scrollY;
  div.addEventListener('mousewheel', function(event) {
    window.onscroll = function(){
      window.scrollTo(x, y);
    };
  });
};

function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
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

const clearTooltip = () => {
  const container = document.getElementById('cExtension_gene_info_tooltip_container');
  if (container) {
    container.removeEventListener('click', clearTooltip);
    document.getElementById('cExtension_gene_info_tooltip_button').removeEventListener('click', removeTooltip);
    container.remove();
    window.removeEventListener('scroll', tooltipScroll.scroll);
  }
};

function removePanel() {
  if(document.getElementById('cExtension_gene_info_panel')) {
    window.onscroll = null;
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

const http = (gene) => {
  return new Promise((resolve, reject) => {
    const paramString = `?gene=${gene}`;
    chrome.runtime.sendMessage({
      method: 'GET',
      action: 'xhttp',
      url: `http://localhost:8002/extension${paramString}`
      // url: `http://prohitstools.mshri.on.ca:8002/extension${paramString}`
    }, function(response) {
      var parsedResponse = JSON.parse(response);
      if (parsedResponse.status === 200) {
        resolve(parsedResponse.result);
      } else {
        reject(parsedResponse.error);
      }
    });
  });
};

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

const createTooltipTemplate = (event, data, options) => {
  clearTooltip();
  let containerDiv = document.createElement('div');
  containerDiv.id = 'cExtension_gene_info_tooltip_container';
  containerDiv.className = 'cExtension-gene-info-tooltip-container';
  document.body.insertBefore(containerDiv, document.body.firstChild);
  containerDiv.addEventListener('click', clearTooltip);
  //create tooltip
  let tooltipDiv = document.createElement('div');
  tooltipDiv.id = 'cExtension_gene_info_tooltip';
  tooltipDiv.className = 'cExtension-gene-info-tooltip';
  if (!data) {
    let htmlString = `
      <div id="cExtension_gene_info_empty">
        No gene information available
      </div>`
    ;
    tooltipDiv.innerHTML = htmlString;
    containerDiv.appendChild(tooltipDiv);
  } else {
    //add html
    let htmlString = `
      <div class="cExtension-gene-info-tooltip-header">
        ${data.fullname}
      </div>`
    ;
    htmlString += '<div style="display: flex; flex-direction: row; flex-wrap: wrap;">';
    if (options.links && data.geneid) {
      htmlString += `
        <span class="cExtension-gene-info-tooltip-link">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.ncbi.nlm.nih.gov/gene/?term=${data.geneid}"
          >
            NCBI
          </a>
        </span>`
      ;
    }
    if (options.links && data.uniprot) {
      htmlString += `
        <span class="cExtension-gene-info-tooltip-link">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://www.uniprot.org/uniprot/${data.uniprot}"
          >
            UniProt
          </a>
        </span>`
      ;
    }
    if (options.go && data.go) {
      htmlString += `
        <span class="cExtension-gene-info-tooltip-link">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://amigo.geneontology.org/amigo/gene_product/UniProtKB:${data.uniprot}"
          >
            AmiGO
          </a>
        </span>`
      ;
    }
    if (options.interactors && data.biogrid) {
      htmlString += `
        <span class="cExtension-gene-info-tooltip-link">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://thebiogrid.org/${data.biogrid}/summary/homo-sapiens/"
          >
            BioGRID
          </a>
        </span>`
      ;
    }
    if (options.links && data['ensembl-gene']) {
      htmlString += `
        <span class="cExtension-gene-info-tooltip-link">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://www.proteinatlas.org/${data['ensembl-gene']}/cell"
          >
            HPA
          </a>
        </span>`
      ;
    }
    htmlString += '</div>';
    tooltipDiv.innerHTML = htmlString;
    containerDiv.appendChild(tooltipDiv);
    // prevent clicks on links etc. from dismissing parent
    tooltipDiv.addEventListener('click', function(event) { event.stopPropagation(); });
  }
  // position tooltip
  const divHeight = tooltipDiv.offsetHeight;
  const divWidth = tooltipDiv.offsetWidth;
  const scrollOffset =  window.innerWidth > document.documentElement.clientWidth ? 15 : 0;
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;
  if (event.clientX < 5) {
    tooltipDiv.style.left = '5px';
  } else if (event.clientX + divWidth > viewportWidth - 5) {
    tooltipDiv.style.left = `${viewportWidth - divWidth - scrollOffset - 5}px`;
  } else {
    tooltipDiv.style.left = `${event.clientX}px`;
  }
  if (event.clientY - divHeight < 5) {
    tooltipDiv.style.top = '5px';
  } else if (event.clientY > viewportHeight - 5) {
    tooltipDiv.style.top = `${viewportHeight - divHeight - 5}px`;
  } else {
    tooltipDiv.style.top = `${event.clientY - divHeight}px`;
  }
  //create close cutton
  let closeButton = document.createElement('span');
  closeButton.id = 'cExtension_gene_info_tooltip_button';
  closeButton.className = 'cExtension-gene-info-tooltip-button';
  closeButton.innerHTML = 'x';
  tooltipDiv.appendChild(closeButton);
  closeButton.addEventListener('click', removeTooltip);
  //show panel
  fadeIn(tooltipDiv);
  //bind scroll event
  tooltipScroll.init('cExtension_gene_info_tooltip');
};

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
    if (v !== selectedType) {
      document.querySelector('#cExtension-gene-info-go-container-' + v).style.display = 'none';
    }
  });
  document.querySelector('#cExtension-gene-info-go-container-' + selectedType).style.display = 'inline-block';
  document.querySelectorAll('.cExtension-gene-info-go-selector').forEach(function(element) {
    if (element.dataset.type === selectedType) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
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
