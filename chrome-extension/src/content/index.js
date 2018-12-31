import './content.css';

const details = {
  displayOptions: {
    basic: true,
    description: true,
    domain: true,
    go: true,
    goNamespace: 'bp',
    interactors: true,
    links: true,
  },
  mdTime: null,
  report: 'detailed',
  results: [],
};

// get user preferences on load
// activation method
/* chrome.storage.local.get('activate', function(storage) {
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
}); */
// report type
/* chrome.storage.local.get('report', function(storage) {
  details.report = storage.report ? storage.report : 'detailed';
}); */
// options
/* const detailTypes = ['basic', 'description', 'domain', 'go', 'interactors', 'links'];
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
}); */

// listener
/* chrome.runtime.onMessage.addListener(
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
); */
