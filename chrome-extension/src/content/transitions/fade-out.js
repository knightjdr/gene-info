/* eslint no-param-reassign: 0 */

const fadeOut = (el) => {
  const interval = 1;
  let then = Date.now();
  el.style.opacity = 1;
  const tick = () => {
    if (Number(el.style.opacity) > 0) {
      requestAnimationFrame(tick);
      const now = Date.now();
      const delta = now - then;
      if (delta > interval) {
        then = now - (delta % interval);
        el.style.opacity = Number(el.style.opacity) - 0.06;
      }
    } else {
      el.remove();
    }
  };
  tick();
};

export default fadeOut;
