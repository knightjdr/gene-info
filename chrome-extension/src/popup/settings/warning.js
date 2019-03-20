import tabQuery from '../helpers/tabs';

export const checkURL = (tabs) => {
  let disabled = false;
  let display = 'none';
  if (tabs && tabs[0]) {
    const { url } = tabs[0];
    if (!url || !url.startsWith('http')) {
      disabled = true;
      display = 'flex';
    }
  } else if (!tabs || !tabs[0]) {
    disabled = true;
    display = 'flex';
  }
  document.getElementById('button_search').disabled = disabled;
  document.getElementById('input_search').disabled = disabled;
  document.querySelector('.warning').style.display = display;
};

const warning = () => {
  tabQuery({ active: true, lastFocusedWindow: true }, checkURL);
};

export default warning;
