// Limit the history to 1 state
Config.history.maxStates = 1;

// Autosave and autoload
Config.saves.autoload = true;
Config.saves.autosave = 'save';

// Remove UI and history controls
UIBar.destroy();
Config.history.controls = false;

// Turn on nobr by default in all passages
Config.passages.nobr = true;

// Forcibly enable test mode
Config.debug = false;
