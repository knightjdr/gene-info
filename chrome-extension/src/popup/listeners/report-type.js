function reportType() {
  const options = ['detailed', 'tooltip'];
  const type = this.dataset.type;
  options.forEach((v) => {
    if (v === type) {
      chrome.storage.local.set({ 'report': v });
    } else {
      document.querySelector('#report_' + v).checked = false;
    }
  });
  tabsFunction({ action: 'toggleReportType', type: type });
}
