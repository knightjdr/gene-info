let details = {
  data: {
    biogrid: 116400,
    description: 'Promotes cell proliferation. Modulates apoptotic pathways. Increases mitogen-activated protein kinase activity and STK26 activity. Important for cell migration, and for normal structure and assembly of the Golgi complex. Important for KDR/VEGFR2 signaling. Increases the stability of KDR/VEGFR2 and prevents its breakdown. Required for normal cardiovascular development. Required for normal angiogenesis, vasculogenesis and hematopoiesis during embryonic development (by similarity).',
    fullname: 'Programmed cell death protein 10',
    gene: 'PDCD10',
    geneid: 11235,
    go: {
      "c": [
        {"id": "0009986", "term": "cytoplasm"}
      ],
      "f": [
        {"id": "0009986", "term": "a function"}
      ],
      "p": [
        {"id": "0009986", "term": "a process"},
        {"id": "0009987", "term": "another process"}
      ],
    },
    hgnc: 8761,
    interactors: [
      {gene: 'gene A', evidence: 'evidence A'},
      {gene: 'gene B', evidence: 'evidence B'}
    ],
    synonyms: ['CCM3', 'TFAR15'],
    uniprot: 'Q9BUL8'
  },
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

function retrieveInfo(event) {
  const gene = window.getSelection().toString().trim();
  http(gene)
    .then((data) => {
      if(details.report === 'detailed') {
        createDetailedTemplate(data, details.displayOptions);
      } else {
        createTooltipTemplate(event, data, details.displayOptions)
      }
    })
    .catch((err) => {
      console.log(err);
    })
  ;
}

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
