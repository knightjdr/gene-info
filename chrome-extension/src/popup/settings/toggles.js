import config from '../../config';

const setToggle = (toggle, undef = true) => {
  if (undef) {
    chrome.storage.local.get(toggle, (storage) => {
      const checked = Boolean(storage[toggle] || storage[toggle] === undefined);
      document.getElementById(toggle).checked = checked;
    });
  } else {
    chrome.storage.local.get(toggle, (storage) => {
      const checked = Boolean(storage[toggle]);
      document.getElementById(toggle).checked = checked;
    });
  }
};

const toggles = () => {
  config.defaultCheckedOptions.forEach((toggle) => {
    setToggle(toggle);
  });
  config.defaultUncheckedOptions.forEach((toggle) => {
    setToggle(toggle, false);
  });
};

export default toggles;
