import { activeTab } from '../helpers/message';

const warning = () => {
  activeTab('ping').then((response) => {
    let disabled = false;
    let display = 'none';
    if (!response) {
      disabled = true;
      display = 'flex';
    }
    document.getElementById('button_search').disabled = disabled;
    document.getElementById('input_search').disabled = disabled;
    document.querySelector('.warning').style.display = display;
  });
};

export default warning;
