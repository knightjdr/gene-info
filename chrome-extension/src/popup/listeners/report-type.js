function reportType() {
  const type = this.dataset.type;
  ['detailed', 'tooltip'].forEach((v) => {
    if (v === type) {
      chrome.storage.local.set({ 'report': v });
    } else {
      document.getElementById('report_' + v).checked = false;
    }
  });
  tabsFunction({ action: 'toggleReportType', type: type });
}
