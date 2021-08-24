import activateListener from './activate';
import removePanel from '../remove/remove-panel';
import removeTooltip from '../remove/remove-tooltip';
import retrieveInfo from '../retrieve/retrieve';
import State from '../state';

const messages = () => {
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const { action, setting, value } = request;
    if (action === 'ping') {
      sendResponse(true);
    } else if (action === 'updateSetting') {
      State.updateSetting(setting, value);
      if (setting === 'activate') {
        activateListener(value);
      } else if (setting === 'report') {
        removePanel();
        removeTooltip();
      }
    } else if (action === 'search') {
      State.updateStyle('left', '5px');
      retrieveInfo(null, setting, true);
    }
    return true;
  });
};

export default messages;
