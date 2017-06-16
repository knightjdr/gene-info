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
