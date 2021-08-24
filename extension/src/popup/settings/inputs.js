import config from '../../config';
import storageGet from '../helpers/storage';

export const setInput = (inputID, storageValue, defaultValue) => {
  const value = storageValue === undefined ? defaultValue : Number(storageValue);
  const inputEl = document.getElementById(inputID);
  inputEl.value = value;
};

export const inputs = () => {
  Object.entries(config.defaultInputs).forEach(([inputID, value]) => {
    storageGet(inputID, setInput, value);
  });
};
