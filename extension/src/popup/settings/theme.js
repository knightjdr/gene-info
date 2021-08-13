import config from '../../config';

const theme = () => {
  chrome.storage.local.get('theme', (storage) => {
    const value = storage.theme || config.theme;
    document.querySelector('body').classList.add(`theme_${value}`);
  });
};

export default theme;
