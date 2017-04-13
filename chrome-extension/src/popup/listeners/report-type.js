function reportType() {
  const type = this.dataset.type;
  chrome.storage.local.set({'report': type});
  const typeOff = this.dataset.type === 'detailed' ? 'tooltip' : 'detailed';
  document.querySelector('#report_' + typeOff).checked = false;
  tabsFunction({action: 'toggleReportType', type: type});
}
