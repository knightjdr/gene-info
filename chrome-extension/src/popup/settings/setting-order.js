import config from '../../config';
import updateTab from '../listeners/update-tab';

/* Need to ensure that the elements listed in the user's stored settings
** are still available and see if there are any new settings that have
** been added that are not in the stored order (append these to end).
** Update stored settings and tab settings if there is a descrepency. */
export const confirmOrder = (userSettings, defaultSettings) => {
  if (!userSettings || userSettings.length === 0) {
    return {
      order: defaultSettings,
      shouldUpdate: true,
    };
  }

  const missing = [...defaultSettings];
  let order = [];
  const storedSettings = [...userSettings];
  for (let i = 0; i < storedSettings.length; i += 1) {
    const setting = storedSettings[i];
    const missingIndex = missing.indexOf(setting);
    if (missingIndex > -1) {
      missing.splice(missingIndex, 1);
      order.push(setting);
      storedSettings.splice(i, 1);
      i -= 1;
    }
  }

  // Append any missing settings
  if (missing.length > 0) {
    order = [...order, ...missing];
  }

  return {
    order,
    shouldUpdate: missing.length > 0 || storedSettings.length > 0,
  };
};

export const setElementOrder = (storage) => {
  const confirmed = confirmOrder(storage.setting_order, config.defaultSettingOrder);
  const container = document.getElementById('settings_drop_container');
  confirmed.order.forEach((setting) => {
    container.appendChild(document.getElementById(`drag_${setting}`));
  });

  // Update tab if needed
  if (confirmed.shouldUpdate) {
    updateTab('updateSetting', 'setting_order', confirmed.order);
  }
};

const settingOrder = () => {
  chrome.storage.local.get('setting_order', setElementOrder);
};

export default settingOrder;
