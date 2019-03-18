import tabQuery from '../helpers/tabs';

export const checkURL = (tabs) => {
  let display = 'none';
  if (tabs && tabs[0]) {
    const { url } = tabs[0];
    if (!url || !url.startsWith('http')) {
      display = 'flex';
    }
  } else if (!tabs || !tabs[0]) {
    display = 'flex';
  }
  document.querySelector('.warning').style.display = display;
};

const warning = () => {
  tabQuery({ active: true, lastFocusedWindow: true }, checkURL);
};

export default warning;
