/* eslint no-new: 0 */

import SlimSelect from 'slim-select';

const select = (shadowRoot) => {
  if (shadowRoot.getElementById('gene-select')) {
    new SlimSelect({
      select: shadowRoot.getElementById('gene-select'),
      showSearch: false,
    });
  }
};

export default select;
