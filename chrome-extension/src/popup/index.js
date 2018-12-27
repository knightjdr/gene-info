import bindListeners from './listeners/bind-listeners';
import loadPreferences from './settings/load-preferences';

import './popup.css';

// Get user preferences on load.
loadPreferences();

// Bind event handlers.
bindListeners();
