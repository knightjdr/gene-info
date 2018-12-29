import bindListeners from './listeners/bind-listeners';
import loadPreferences from './settings/load-preferences';
import populate from './populate/populate';

import './popup.css';

document.addEventListener('DOMContentLoaded', () => {
  // Populate menus.
  populate();

  // Get user preferences on load.
  loadPreferences();

  // Bind event handlers.
  bindListeners();
});
