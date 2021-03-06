import activateListener from './listeners/activate';
import messages from './listeners/messages';
import State from './state';

State.createShadow();

// Initialize state and listeners
chrome.storage.local.get(null, (storage) => {
  State.init(storage);
  activateListener(storage.activate);
  messages();
});
