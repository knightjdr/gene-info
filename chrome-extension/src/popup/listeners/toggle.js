function toggle() {
  const checked = this.checked;
  const toggleValue = checked ? 'on' : 'off';
  const type = this.dataset.type;
  const toggleObj = {};
  toggleObj['detail-' + type] = toggleValue;
  chrome.storage.local.set(toggleObj);
  tabsFunction({ action: 'toggleDisplayElement', type: type, checked: checked });
}
