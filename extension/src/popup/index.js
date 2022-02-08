import bindListeners from './listeners/bind-listeners';
import display from './display/display';
import displayOutages from './display/outages';
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

  // Check for outage notifications.
  displayOutages();

  // Bind event handlers.
  bindListeners();
});
