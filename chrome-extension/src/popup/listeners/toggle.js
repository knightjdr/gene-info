function toggle() {
  const checked = this.checked;
  const toggleValue = checked ? 'on' : 'off';
  const type = this.dataset.type;
  const toggleObj = {};
  toggleObj['detail-' + type] = toggleValue;
  // update storage settings
  chrome.storage.local.set(toggleObj);
  // update content options
  tabsFunction({ action: 'toggleDisplayElement', type: type, checked: checked });
  // hide toggle options if exist
  const optionsID = `toggle-container-options-${type}`;
  document.getElementById(optionsID).style.display = checked ? 'block' : 'none';
}
