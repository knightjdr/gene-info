let details = {
  displayOptions: {
    basic: true,
    description: true,
    domain: true,
    go: true,
    goNamespace: 'bp',
    interactors: true,
    links: true
  },
  mdTime: null,
  report: 'detailed',
  results: []
};

// get user preferences on load
// activation method
chrome.storage.local.get('activate', function(storage) {
  if (storage.activate === 'disable') {
    document.body.removeEventListener('dblclick', retrieveInfo);
    document.body.removeEventListener('mousedown', setMdTime);
    document.body.removeEventListener('mouseup', retrieveInfo);
  } else if (storage.activate === 'drag') {
    document.body.removeEventListener('dblclick', retrieveInfo);
    document.body.addEventListener('mousedown', setMdTime);
    document.body.addEventListener('mouseup', retrieveInfo);
  } else {
    document.body.addEventListener('dblclick', retrieveInfo);
    document.body.removeEventListener('mousedown', setMdTime);
    document.body.removeEventListener('mouseup', retrieveInfo);
  }
});
// report type
chrome.storage.local.get('report', function(storage) {
  details.report = storage.report ? storage.report : 'detailed';
});
// options
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
chrome.storage.local.get('goNamespace', function(storage) {
  details.displayOptions.goNamespace = storage.goNamespace ? storage.goNamespace : 'bp';
});

//listener
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === 'ping') {
      sendResponse({ready: true});
    } else if (request.action === 'toggleActivationMethod') {
      if (request.type === 'disable') {
        document.body.removeEventListener('dblclick', retrieveInfo);
        document.body.removeEventListener('mousedown', setMdTime);
        document.body.removeEventListener('mouseup', retrieveInfo);
      } else if (request.type === 'drag') {
        document.body.removeEventListener('dblclick', retrieveInfo);
        document.body.addEventListener('mousedown', setMdTime);
        document.body.addEventListener('mouseup', retrieveInfo);
      } else {
        document.body.addEventListener('dblclick', retrieveInfo);
        document.body.removeEventListener('mousedown', setMdTime);
        document.body.removeEventListener('mouseup', retrieveInfo);
      }
      details.mdTime = null;
    } else if (request.action === 'toggleDisplayElement') {
      details.displayOptions[request.type] = request.checked;
    } else if (request.action === 'toggleGoNamespace') {
      details.displayOptions.goNamespace = request.type;
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

const basicConstructor = (data, wrapper = true) => {
  let basicString = '';
  if (data.synonyms) {
    basicString += `
      <div
        class="cExtension-gene-info-details-backdrop"
      >
        <b>Synonyms: </b>`
    ;
    if (data.synonyms.length > 0) {
      data.synonyms.forEach(function(synonym, i) {
        basicString += synonym;
        if (i < data.synonyms.length - 1) {
          basicString += ', ';
        }
      });
    } else {
      basicString += '-';
    }
    basicString += '</div>';
  }
  if (data.fullname) {
    basicString += `
      <div
        class="cExtension-gene-info-details-backdrop"
      >
        <b>Name: </b>${data.fullname}
      </div>`
    ;
  }
  if (data.length) {
    const mw = data.mw ? Math.round(data.mw / 100) / 10 : '-';
    basicString += `
      <div
        class="cExtension-gene-info-details-backdrop"
      >
        <b>Length: </b>${data.length}aa<span style="float: right;"><b>MW:</b> ${mw}kDa</span>
      </div>`
    ;
  }
  if (wrapper) {
    basicString = `
      <div id="cExtension_gene_info_details_basic">
        ${basicString}
      </div>
    `;
  }
  return basicString;
};

const biogridStringConstructor = (data, wrapper = true) => {
  let biogridString = `
    <div
      class="cExtension-gene-info-details-backdrop"
    >
      <div class="cExtension-gene-info-bevel-line"></div>
      <div class="cExtension-gene-info-section-header">
        <b>INTERACTORS:</b>
        <a rel="noopener noreferrer" target="_blank" href="https://thebiogrid.org/${data.biogrid}/summary/homo-sapiens/">BioGRID</a>
      </div>`
  ;
  if (data.interactors.length > 0) {
    biogridString += `
      <div style="display: flex;">
        <div style="flex: 0 0 30%;">
          <u>Target</u>
        </div>
        <div style="flex: 1;">
          <u>Approach</u>
        </div>
      </div>`
    ;
    let lastInteractor = '';
    data.interactors.forEach((interactor) => {
      const interactorString = interactor.gene === lastInteractor ? '' : interactor.gene;
      lastInteractor = interactor.gene;
      biogridString += `
        <div style="display: flex;">
          <div style="flex: 0 0 30%;">
            ${interactorString}
          </div>
          <div style="flex: 1;">
            ${interactor.evidence}
          </div>
        </div>`
      ;
    });
  } else {
    biogridString += '<div id="cExtension_gene_info_details_interactors" style="display: flex;"><div style="flex: 0 0 25%;">none</div></div>';
  }
  biogridString += '</div></div>';
  if (wrapper) {
    biogridString = `
      <div id="cExtension_gene_info_details_biogrid">
        ${biogridString}
      </div>
    `;
  }
  return biogridString;
};

const descriptionConstructor = (data, wrapper = true) => {
  let descriptionString = '';
  if (data.description) {
    descriptionString += `
      <div
        class="cExtension-gene-info-details-backdrop"
      >
        <b>Description: </b>${data.description}
      </div>`
    ;
  }
  if (wrapper) {
    descriptionString = `
      <div id="cExtension_gene_info_details_description">
        ${descriptionString}
      </div>
    `;
  }
  return descriptionString;
};

const domainConstructor = (data, wrapper = true) => {
  let domainString = `
    <div
      class="cExtension-gene-info-details-backdrop"
    >
      <div class="cExtension-gene-info-bevel-line"></div>
      <div class="cExtension-gene-info-section-header">
        <b>DOMAINS:</b>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="http://pfam.xfam.org/protein/${data.uniprot}"
        >
          Pfam
        </a>
      </div>`
  ;
  if (data.domains.length > 0) {
    domainString += `
      <div
        style="display: flex;"
      >
        <div
          style="text-align: center; width: 35%"
        >
          <u>Start-End</u>
        </div>
        <div style="width: 65%">
          <u>Name</u>
        </div>
      </div>`
    ;
    data.domains = data.domains.sort((a,b) => { return a.domain_start - b.domain_start; });
    data.domains.forEach((domain) => {
      domainString += `
        <div
          style="display: flex;"
        >`
      ;
      domainString += `
        <div style="text-align:center; width: 35%;">
          ${domain.domain_start}-${domain.domain_end}
        </div>`
      ;
      if (domain.pfam) {
        domainString += `
          <div style="width: 65%">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="http://pfam.xfam.org/family/${domain.pfam}"
              style="text-decoration: none;"
            >
              ${domain.domain_name}
            </a>
          </div>`
        ;
      } else {
        domainString += `
          <div style="width: 65%">
            ${domain.domain_name}
          </div>`
        ;
      }
      domainString += '</div>';
    });
  } else {
    domainString += `
      <div>
        none
      </div>`
    ;
  }
  domainString += '</div></div>';
  if (wrapper) {
    domainString = `
      <div id="cExtension_gene_info_details_domain">
        ${domainString}
      </div>
    `;
  }
  return domainString;
};

const geneConstructor = (selectedResult, completeResults, fullname = false, resultsIndex = 0) => {
  let geneString = '';
  if(completeResults.length == 1) {
    geneString = fullname ? selectedResult.fullname : selectedResult.gene;
  } else {
    geneString += '<select id="cExtension_gene_info_geneSelect">';
    completeResults.forEach((result, index) => {
      const synonyms = result.synonyms.length === 0 ?
        'none' :
        result.synonyms.join(', ')
      ;
      const displayName = fullname ? result.fullname : result.gene;
      if (index === resultsIndex) {
        geneString += `
          <option
            selected
            title="Synonyms: (${synonyms})"
            value=${index}
          >
            ${displayName}
          </option>
        `;
      } else {
        geneString += `
          <option
            title="Synonyms: (${synonyms})"
            value=${index}
          >
            ${displayName}
          </option>
        `;
      }
    });
    geneString += '</select>';
  }
  return geneString;
};

const goStringConstructor = (data, wrapper = true) => {
  // create header
  let goString = `
    <div
      class="cExtension-gene-info-details-backdrop"
    >
      <div class="cExtension-gene-info-bevel-line"></div>
      <div class="cExtension-gene-info-section-header">
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
    `
  ;
  // create header buttons
  ['bp', 'cc', 'mf'].forEach((namespace) => {
    const currentClass = namespace === details.displayOptions.goNamespace ?
      'cExtension-gene-info-go-selector active' :
      'cExtension-gene-info-go-selector'
    ;
    const strNamespace = namespace.toUpperCase();
    goString += `
      <div
        class="${currentClass}"
        data-type="${namespace}"
      >
        ${strNamespace}
      </div>
    `;
  });
  goString += '</div>';
  // create namespace panels
  ['bp', 'cc', 'mf'].forEach((namespace) => {
    const currentStyle = namespace === details.displayOptions.goNamespace ?
      'padding: 0px 5px 0px 5px' :
      'display: none; padding: 0px 5px 0px 5px'
    ;
    const shortName = namespace.charAt(1);
    goString += `
      <div
        id="cExtension-gene-info-go-container-${namespace}"
        style="${currentStyle}"
      >`
    ;
    if(data.go[shortName].length > 0) {
      data.go[shortName].forEach(function(term) {
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
  });
  goString += '</div></div>';
  if (wrapper) {
    goString = `
      <div id="cExtension_gene_info_details_go">
        ${goString}
      </div>
    `;
  }
  return goString;
};

const linkConstructor = (data, wrapper = true) => {
  let linkString = '';
  if (data.geneid) {
    linkString +=
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
  if (data.uniprot) {
    linkString +=
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
  if (data['ensembl-gene']) {
    linkString +=
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
  if (wrapper) {
    linkString = `
      <div id="cExtension_gene_info_details_link">
        ${linkString}
      </div>
    `;
  }
  return linkString;
};

createDetailedPanel = (selectedResult, completeResults, options) => {
  let detailedDiv = document.createElement('div');
  detailedDiv.id = 'cExtension_gene_info_panel';
  if (!selectedResult) {
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
        <b>Gene: </b>${geneConstructor(selectedResult, completeResults)}
      </div>`
    ;
    if (options.basic) {
      htmlString += basicConstructor(selectedResult);
    }
    if (options.links) {
      htmlString += linkConstructor(selectedResult);
    }
    if (options.description) {
      htmlString += descriptionConstructor(selectedResult);
    }
    if (selectedResult.domains && options.domain) {
      htmlString += domainConstructor(selectedResult);
    }
    if (selectedResult.go && options.go) {
      htmlString += goStringConstructor(selectedResult);
    }
    if (selectedResult.biogrid && options.interactors) {
      htmlString += biogridStringConstructor(selectedResult);
    }
    htmlString += '</div>';
    detailedDiv.innerHTML = htmlString;
    document.body.insertBefore(detailedDiv, document.body.firstChild);
    // listeners for GO and disable scroll
    document.querySelectorAll('.cExtension-gene-info-go-selector').forEach(function(element) { element.addEventListener('click', goSelector); });
    // add drag listeners
    addDrag(detailedDiv);
    // add select listener (if applicable)
    selectListener();
    // disableScroll(detailedDiv);
  }
  //create close cutton
  let closeButton = document.createElement('span');
  closeButton.id = 'cExtension_gene_info_panel_button';
  closeButton.className = 'cExtension-gene-info-panel-button';
  closeButton.innerHTML = 'x';
  detailedDiv.appendChild(closeButton);
  if (selectedResult) {
    detailedDiv.addEventListener('mouseover', function() { closeButton.style.display = 'inline' ;});
    detailedDiv.addEventListener('mouseout', function() { closeButton.style.display = 'none' ;});
  } else {
    closeButton.style.display = 'inline';
  }
  closeButton.addEventListener('click', removePanel);
  //show panel
  fadeIn(detailedDiv);
};

const createDetailedTemplate = (selectedResult, completeResults, options) => {
  if (
    document.getElementById('cExtension_gene_info_details') &&
    selectedResult
  ) {
    fillDetailedPanel(selectedResult, completeResults, options);
  } else {
    clearPanel(selectedResult, 'detailed');
    createDetailedPanel(selectedResult, completeResults, options);
  }
};

fillDetailedPanel = (selectedResult, completeResults, options, updateGene = true) => {
  let lastNode;
  //update gene
  if (updateGene) {
    document.getElementById('cExtension_gene_info_details_gene').innerHTML = `<b>Gene: </b>${geneConstructor(selectedResult, completeResults)}`;
  }
  lastNode = document.getElementById('cExtension_gene_info_details_gene');
  // basic
  if (options.basic) {
    let basicString = basicConstructor(selectedResult, false);
    if (document.getElementById('cExtension_gene_info_details_basic')) {
      document.getElementById('cExtension_gene_info_details_basic').innerHTML = basicString;
    } else {
      let basicDiv = document.createElement('div');
      basicDiv.id = 'cExtension_gene_info_details_basic';
      basicDiv.innerHTML = basicString;
      insertAfter(basicDiv, lastNode);
    }
    lastNode = document.getElementById('cExtension_gene_info_details_basic');
  } else {
    if (document.getElementById('cExtension_gene_info_details_basic')) {
      document.getElementById('cExtension_gene_info_details_basic').remove();
    }
  }
  // ncbi
  if (options.links) {
    let linkString = linkConstructor(selectedResult, false);
    if (document.getElementById('cExtension_gene_info_details_link')) {
      document.getElementById('cExtension_gene_info_details_link').innerHTML = linkString;
    } else {
      let linkDiv = document.createElement('div');
      linkDiv.id = 'cExtension_gene_info_details_basic';
      linkDiv.innerHTML = linkString;
      insertAfter(linkDiv, lastNode);
    }
    lastNode = document.getElementById('cExtension_gene_info_details_link');
  } else {
    if (document.getElementById('cExtension_gene_info_details_link')) {
      document.getElementById('cExtension_gene_info_details_link').remove();
    }
  }
  //description
  if (options.description) {
    let descriptionString = descriptionConstructor(selectedResult, false);
    if (document.getElementById('cExtension_gene_info_details_description')) {
      document.getElementById('cExtension_gene_info_details_description').innerHTML = descriptionString;
    } else {
      let descDiv = document.createElement('div');
      descDiv.id = 'cExtension_gene_info_details_description';
      descDiv.innerHTML = descriptionString;
      insertAfter(descDiv, lastNode);
    }
    lastNode = document.getElementById('cExtension_gene_info_details_description');
  } else {
    if (document.getElementById('cExtension_gene_info_details_description')) {
      document.getElementById('cExtension_gene_info_details_description').remove();
    }
  }
  // domain
  if (selectedResult.domains && options.domain) {
    let domainString = domainConstructor(selectedResult, false);
    if (document.getElementById('cExtension_gene_info_details_domain')) {
      document.getElementById('cExtension_gene_info_details_domain').innerHTML = domainString;
    } else {
      let domainDiv = document.createElement('div');
      domainDiv.id = 'cExtension_gene_info_details_domain';
      domainDiv.innerHTML = domainString;
      insertAfter(domainDiv, lastNode);
    }
    document.querySelectorAll('.cExtension-gene-info-go-selector').forEach(function(element) { element.addEventListener('click', goSelector); });
    lastNode = document.getElementById('cExtension_gene_info_details_domain');
  } else {
    if (document.getElementById('cExtension_gene_info_details_domain')) {
      document.getElementById('cExtension_gene_info_details_domain').remove();
    }
  }
  // go
  if (selectedResult.go && options.go) {
    //remove listeners for GO
    document.querySelectorAll('.cExtension-gene-info-go-selector').forEach(function(element) { element.removeEventListener('click', goSelector); });
    let goString = goStringConstructor(selectedResult, false);
    if (document.getElementById('cExtension_gene_info_details_go')) {
      document.getElementById('cExtension_gene_info_details_go').innerHTML = goString;
    } else {
      let goDiv = document.createElement('div');
      goDiv.id = 'cExtension_gene_info_details_go';
      goDiv.innerHTML = goString;
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
  if (selectedResult.biogrid && options.interactors) {
    let biogridString = biogridStringConstructor(selectedResult, false);
    if (document.getElementById('cExtension_gene_info_details_biogrid')) {
      document.getElementById('cExtension_gene_info_details_biogrid').innerHTML = biogridString;
    } else {
      let biogridDiv = document.createElement('div');
      biogridDiv.id = 'cExtension_gene_info_details_biogrid';
      biogridDiv.innerHTML = biogridString;
      insertAfter(biogridDiv, lastNode);
    }
    lastNode = document.getElementById('cExtension_gene_info_details_biogrid');
  } else {
    if (document.getElementById('cExtension_gene_info_details_biogrid')) {
      document.getElementById('cExtension_gene_info_details_biogrid').remove();
    }
  }
  // if gene changes, select listener needs to be updated
  selectListener();
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

function clearPanel(data, type) {
  if(!data) {
    if(document.getElementById('cExtension_gene_info_panel')) {
      document.querySelectorAll('.cExtension-gene-info-go-selector').forEach(function(element) { element.removeEventListener('click', goSelector); });
      document.getElementById('cExtension_gene_info_geneSelect').removeEventListener('change', selectChange);
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
    document.getElementById('cExtension_gene_info_geneSelect').removeEventListener('change', selectChange);
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
      // url: `http://localhost:8002/extension${paramString}`
      url: `http://prohitstools.mshri.on.ca:8002/extension${paramString}`
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
  const getInfo = (gene) => {
    http(gene)
      .then((data) => {
        details.results = data;
        if (details.report === 'detailed') {
          removeTooltip();
          createDetailedTemplate(data[0], data, details.displayOptions);
        } else {
          removePanel();
          createTooltipTemplate(event, data[0], data, details.displayOptions);
        }
      })
      .catch((err) => {
        console.log(err);
      })
    ;
  };
  if (gene) {
    if (!details.mdTime) {
      getInfo(gene);
    } else {
      if (details.mdTime &&
        Date.now() - details.mdTime > 500
      ) {
        getInfo(gene);
      }
      details.mdTime = null;
    }
  }
}

const setMdTime = () => {
  details.mdTime = Date.now();
};

const createTooltipTemplate = (event, selectedResult, completeResults, options, resultsIndex = 0) => {
  // if tooltip already exists, get position (when changing option via select)
  let tooltipLeft;
  let tooltipTop;
  if (!event) {
    const el = document.getElementById('cExtension_gene_info_tooltip');
    tooltipLeft = el.getBoundingClientRect().left;
    tooltipTop = el.getBoundingClientRect().top;
  }
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
  if (!selectedResult) {
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
        ${geneConstructor(selectedResult, completeResults, true, resultsIndex)}
      </div>`
    ;
    htmlString += '<div style="display: flex; flex-direction: row; flex-wrap: wrap;">';
    if (options.links && selectedResult.geneid) {
      htmlString += `
        <span class="cExtension-gene-info-tooltip-link">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.ncbi.nlm.nih.gov/gene/?term=${selectedResult.geneid}"
          >
            NCBI
          </a>
        </span>`
      ;
    }
    if (options.links && selectedResult.uniprot) {
      htmlString += `
        <span class="cExtension-gene-info-tooltip-link">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://www.uniprot.org/uniprot/${selectedResult.uniprot}"
          >
            UniProt
          </a>
        </span>`
      ;
    }
    if (options.domain && selectedResult.domains) {
      htmlString += `
        <span class="cExtension-gene-info-tooltip-link">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://pfam.xfam.org/protein/${selectedResult.uniprot}"
          >
            Pfam
          </a>
        </span>`
      ;
    }
    if (options.go && selectedResult.go) {
      htmlString += `
        <span class="cExtension-gene-info-tooltip-link">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://amigo.geneontology.org/amigo/gene_product/UniProtKB:${selectedResult.uniprot}"
          >
            AmiGO
          </a>
        </span>`
      ;
    }
    if (options.interactors && selectedResult.biogrid) {
      htmlString += `
        <span class="cExtension-gene-info-tooltip-link">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://thebiogrid.org/${selectedResult.biogrid}/summary/homo-sapiens/"
          >
            BioGRID
          </a>
        </span>`
      ;
    }
    if (options.links && selectedResult['ensembl-gene']) {
      htmlString += `
        <span class="cExtension-gene-info-tooltip-link">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://www.proteinatlas.org/${selectedResult['ensembl-gene']}/cell"
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
  if (!event) {
    tooltipDiv.style.left = `${tooltipLeft}px`;
    tooltipDiv.style.top = `${tooltipTop}px`;
  } else {
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
  }
  // create close cutton
  let closeButton = document.createElement('span');
  closeButton.id = 'cExtension_gene_info_tooltip_button';
  closeButton.className = 'cExtension-gene-info-tooltip-button';
  closeButton.innerHTML = 'x';
  tooltipDiv.appendChild(closeButton);
  closeButton.addEventListener('click', removeTooltip);
  // add select listener (if needed)
  selectListener();
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
