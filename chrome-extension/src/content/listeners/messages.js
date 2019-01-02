import clickListener from './click-listener';
import removePanel from '../remove/remove-panel';
// import removeTooltip from '../remove/remove-tooltip';
import retrieveInfo from '../retrieve/retrieve';
import State from '../state';

const messages = () => {
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const { action, setting, value } = request;
    if (action === 'ping') {
      sendResponse({ ready: true });
    } else if (action === 'updateSetting') {
      State.updateSetting(setting, value);
      if (setting === 'activate') {
        clickListener('activate');
      } else if (setting === 'report') {
        removePanel();
        // removeTooltip();
      }
    } else if (action === 'search') {
      retrieveInfo(null, setting);
    }
    return null;
  });
};

export default messages;
