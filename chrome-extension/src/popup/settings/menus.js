import config from '../../config';

const menuDefaults = [
  { name: 'field', value: 'gene' },
  { name: 'species', value: config.defaultSpecies },
];

const menus = () => {
  menuDefaults.forEach((menu) => {
    const currMenu = `select_${menu.name}`;
    chrome.storage.local.get(currMenu, (storage) => {
      const value = storage[currMenu] || menu.value;
      document.getElementById(currMenu).value = value;
    });
  });
};

export default menus;
