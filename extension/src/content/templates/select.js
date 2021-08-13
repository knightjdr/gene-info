import SlimSelect from 'slim-select';

const select = (shadowRoot) => {
  const el = shadowRoot.querySelector('select.slim-select-style');
  if (el) {
    new SlimSelect({
      select: el,
      showSearch: false,
    });
  }
};

export default select;
