function activateType() {
  const options = ['click', 'drag', 'disable'];
  const type = this.dataset.type;
  options.forEach((v) => {
    if (v === type) {
      chrome.storage.local.set({ 'activate': v });
    } else {
      document.querySelector('#report_' + v).checked = false;
    }
  });
  tabsFunction({ action: 'toggleActivationMethod', type: type });
}
