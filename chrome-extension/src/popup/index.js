import bindListeners from './listeners/bind-listeners';
import display from './display/display';
import loadPreferences from './settings/load-preferences';
import populate from './populate/populate';

import './popup.css';

document.addEventListener('DOMContentLoaded', () => {
  // Populate menus.
  populate();

  // Get user preferences on load.
  loadPreferences();

  // Update displayed elements.
  display();

  // Bind event handlers.
  bindListeners();
});
