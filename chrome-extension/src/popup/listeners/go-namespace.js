function goNamespace() {
  console.log('here');
  const type = this.dataset.type;
  console.log(type);
  ['bp', 'cc', 'mf'].forEach((v) => {
    if (v === type) {
      chrome.storage.local.set({ 'goNamespace': v });
    } else {
      document.getElementById('goNamespace_' + v).checked = false;
    }
  });
  tabsFunction({ action: 'toggleGoNamespace', type: type });
}
