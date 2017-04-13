function clickSet() {
  const checked = this.checked;
  chrome.storage.local.set({'click': checked});
  tabsFunction({action: 'toggleDoubleClick', click: checked});
}
