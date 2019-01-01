import updateTab from './update-tab';

const onEnter = function enter(e) {
  if (e.keyCode === 13) {
    const { value } = this;
    if (value) {
      updateTab('search', value);
    }
  }
};

export default onEnter;
