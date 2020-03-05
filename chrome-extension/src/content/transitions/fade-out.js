import removeAllChildren from '../helpers/remove-all-children';

const fadeOut = (el, shadowRoot) => {
  el.classList.add('panel_animate-fadeout');
  window.setTimeout(() => {
    removeAllChildren(shadowRoot);
  }, 400);
};

export default fadeOut;
