const addDrag = (div) => {
  let startX;
  const mouseMove = (event) => {
    const delta = startX - event.screenX;
    startX = event.screenX;
    const right = document.documentElement.clientWidth - div.getBoundingClientRect().right;
    div.style.right = `${right + delta}px`;
  };
  div.addEventListener('mousedown', function(event) {
    startX = event.screenX;
    div.addEventListener('mousemove', mouseMove);
  });
  div.addEventListener('mouseup', function() {
    div.removeEventListener('mousemove', mouseMove);
  });
};
