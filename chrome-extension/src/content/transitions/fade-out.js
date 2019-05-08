const fadeOut = (el) => {
  el.classList.add('panel_animate-fadeout');
  window.setInterval(() => {
    el.remove();
  }, 400);
};

export default fadeOut;
