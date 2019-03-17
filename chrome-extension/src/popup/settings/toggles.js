import config from '../../config';
import storageGet from '../helpers/storage';

/* setTransitionDuration gets the parent node for a toggle and then
** changes the transition duration on the adjacent label so that
** it will only transition after loading */
export const setTransitionDuration = (el) => {
  const label = el.parentNode.querySelector('label');
  window.setTimeout(() => {
    label.style.transitionDuration = '0.2s';
  }, 50);
};

export const setChecked = (toggle, storageValue, undefIsChecked, updateElement) => {
  let checked;
  if (storageValue === undefined && undefIsChecked) {
    checked = true;
  } else {
    checked = Boolean(storageValue);
  }
  const toggleEl = document.getElementById(toggle);
  toggleEl.checked = checked;
  updateElement(toggleEl);
};

export const toggles = () => {
  config.defaultCheckedOptions.forEach((toggle) => {
    storageGet(toggle, setChecked, true, setTransitionDuration);
  });
  config.defaultUncheckedOptions.forEach((toggle) => {
    storageGet(toggle, setChecked, false, setTransitionDuration);
  });
};

export default toggles;
