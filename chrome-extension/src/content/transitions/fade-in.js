/* eslint no-param-reassign: 0 */

const fadeIn = (el) => {
  const interval = 1;
  let then = Date.now();
  el.style.opacity = 0;
  const tick = () => {
    if (Number(el.style.opacity) < 1) {
      requestAnimationFrame(tick);
      const now = Date.now();
      const delta = now - then;
      if (delta > interval) {
        then = now - (delta % interval);
        el.style.opacity = Number(el.style.opacity) + 0.06;
      }
    }
  };
  tick();
};

export default fadeIn;
