import { searchTab } from './update-tab';

export const search = function enter(e) {
  if (e.keyCode === 13) {
    const { value } = e.target;
    if (value) {
      searchTab('search', value);
    }
  }
};

export const onSearchClick = () => {
  const e = {
    keyCode: 13,
    target: {
      value: document.getElementById('input_search').value,
    },
  };
  search(e);
};
