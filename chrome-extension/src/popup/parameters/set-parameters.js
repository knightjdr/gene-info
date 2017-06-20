//set params on page load
chrome.storage.local.get('activate', function(storage) {
  if (storage.activate) {
    const options = ['click', 'drag', 'disable'];
    options.forEach((v) => {
      if (v === storage.activate) {
        document.querySelector('#report_' + v).checked = true;
      } else {
        document.querySelector('#report_' + v).checked = false;
      }
    });
  }
});
chrome.storage.local.get('report', function(storage) {
  if (storage.report) {
    const options = ['detailed', 'tooltip'];
    options.forEach((v) => {
      if (v === storage.report) {
        document.querySelector('#report_' + v).checked = true;
      } else {
        document.querySelector('#report_' + v).checked = false;
      }
    });
  }
});
const details = ['basic', 'description', 'domain', 'go', 'interactors', 'links'];
details.forEach(function(detail) {
  const currDetail = 'detail-' + detail;
  chrome.storage.local.get(currDetail, function(storage) {
    if (storage[currDetail] === 'off') {
      document.querySelector('#detail_' + detail).checked = false;
    }
  });
});
