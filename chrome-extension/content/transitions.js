function goSelector() {
  const selectedType = this.dataset.type;
  const types = ['bp', 'cc', 'mf'];
  types.forEach(function(v) {
    if(v !== selectedType) {
      document.querySelector('#cExtension-gene-info-go-container-' + v).style.display = 'none';
    }
  });
  document.querySelector('#cExtension-gene-info-go-container-' + selectedType).style.display = 'inline-block';
  document.querySelectorAll('.cExtension-gene-info-go-selector').forEach(function(element) {
    if(element.dataset.type === selectedType) {
      element.style.backgroundColor = '#a8a6a6';
    } else {
      element.style.backgroundColor = 'transparent';
    }
  });
}

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
  };
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
  };
  tick();
}
