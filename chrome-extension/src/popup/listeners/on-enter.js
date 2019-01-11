import { searchTab } from './update-tab';

const onEnter = function enter(e) {
  if (e.keyCode === 13) {
    const { value } = this;
    if (value) {
      searchTab('search', value);
    }
  }
};

export default onEnter;
