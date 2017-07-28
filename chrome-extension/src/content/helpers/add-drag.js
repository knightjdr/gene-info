const addDrag = (div) => {
  let startX;
  const mouseMove = (event) => {
    document.getElementById('cExtension_gene_info_panel').style.cursor = 'ew-resize';
    document.getElementById('cExtension_gene_info_panel').style.userSelect = 'none';
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
    document.getElementById('cExtension_gene_info_panel').style.cursor = 'auto';
    document.getElementById('cExtension_gene_info_panel').style.userSelect = 'auto';
    div.removeEventListener('mousemove', mouseMove);
  });
};
