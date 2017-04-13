//set params on page load
chrome.storage.local.get('click', function(storage) {
  if(storage.click) {
    document.querySelector('#click').checked = true;
  }
});
chrome.storage.local.get('report', function(storage) {
  if(storage.report) {
    document.querySelector('#report_' + storage.report).checked = true;
    const typeOff = storage.report === 'detailed' ? 'tooltip' : 'detailed';
    document.querySelector('#report_' + typeOff).checked = false;
  }
});
const details = ['basic', 'description', 'go', 'interactors', 'links'];
details.forEach(function(detail) {
  const currDetail = 'detail-' + detail;
  chrome.storage.local.get(currDetail, function(storage) {
    if(storage[currDetail] === 'off') {
      document.querySelector('#detail_' + detail).checked = false;
    }
  });
});
