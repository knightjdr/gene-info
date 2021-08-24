import config from '../../config';
import confirmSettingOrder from '../../utils/confirm-setting-order';
import { updateTab } from '../helpers/message';

export const setElementOrder = (storage) => {
  const confirmed = confirmSettingOrder(storage.setting_order, config.defaultSettingOrder);
  const container = document.getElementById('settings_drop_container');
  confirmed.order.forEach((setting) => {
    container.appendChild(document.getElementById(`drag_${setting}`));
  });

  if (confirmed.shouldUpdate) {
    updateTab('updateSetting', 'setting_order', confirmed.order);
  }
};

const settingOrder = () => {
  chrome.storage.local.get('setting_order', setElementOrder);
};

export default settingOrder;
