import activateListener from './listeners/activate';
import messages from './listeners/messages';
import State from './state';

import './content.css';
import '../../../node_modules/slim-select/dist/slimselect.css';

// Initialize state and listeners
chrome.storage.local.get(null, (storage) => {
  State.init(storage);
  activateListener(storage.activate);
  messages();
});
