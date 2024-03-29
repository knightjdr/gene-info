import config from '../../config';

const menuDefaults = [
  { name: 'field', value: 'gene' },
  { name: 'species', value: config.defaultSpecies },
  { name: 'theme', value: 'light' },
];

const menus = () => {
  menuDefaults.forEach((menu) => {
    const currMenu = menu.name;
    chrome.storage.local.get(currMenu, (storage) => {
      const value = storage[currMenu] || menu.value;
      document.getElementById(currMenu).value = value;
    });
  });
};

export default menus;
