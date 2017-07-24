// get user preferences on load
// activation method
chrome.storage.local.get('activate', function(storage) {
  if (storage.activate) {
    ['click', 'drag', 'disable'].forEach((v) => {
      if (v === storage.activate) {
        document.getElementById(`report_${v}`).checked = true;
      } else {
        document.getElementById(`report_${v}`).checked = false;
      }
    });
  }
});
// report type
chrome.storage.local.get('report', function(storage) {
  if (storage.report) {
    ['detailed', 'tooltip'].forEach((v) => {
      if (v === storage.report) {
        document.getElementById(`report_${v}`).checked = true;
      } else {
        document.getElementById(`report_${v}`).checked = false;
      }
    });
  }
});
// options
const details = ['basic', 'description', 'domain', 'go', 'interactors', 'links'];
details.forEach(function(detail) {
  const currDetail = 'detail-' + detail;
  chrome.storage.local.get(currDetail, function(storage) {
    if (storage[currDetail] === 'off') {
      document.getElementById(`detail_${detail}`).checked = false;
      document.getElementById(`toggle-container-options-${detail}`).style.display = 'none';
    }
  });
});
chrome.storage.local.get('goNamespace', function(storage) {
  if (storage.goNamespace) {
    ['bp', 'cc', 'mf'].forEach((v) => {
      if (v === storage.goNamespace) {
        document.getElementById(`goNamespace_${v}`).checked = true;
      } else {
        document.getElementById(`goNamespace_${v}`).checked = false;
      }
    });
  }
});
