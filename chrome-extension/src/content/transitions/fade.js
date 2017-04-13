function fadeIn(el) {
  const interval = 1;
  let then = Date.now();
  el.style.opacity = 0;
  function tick() {
    if(+el.style.opacity < 1) {
      requestAnimationFrame(tick);
      const now = Date.now();
      const delta = now - then;
      if(delta > interval) {
        then = now - (delta % interval);
        el.style.opacity = +el.style.opacity + 0.04;
      }
    }
  }
  tick();
}

function fadeOut(el) {
  const interval = 1;
  let then = Date.now();
  el.style.opacity = 1;
  function tick() {
    if(el.style.opacity > 0) {
      requestAnimationFrame(tick);
      const now = Date.now();
      const delta = now - then;
      if(delta > interval) {
        then = now - (delta % interval);
        el.style.opacity = el.style.opacity - 0.04;
      }
    } else {
      el.remove();
    }
  }
  tick();
}
