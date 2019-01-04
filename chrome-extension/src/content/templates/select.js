/* eslint no-new: 0 */

import SlimSelect from 'slim-select';

const select = () => {
  if (document.getElementById('gene-info__select')) {
    new SlimSelect({
      select: '#gene-info__select',
      showSearch: false,
    });
  }
};

export default select;
