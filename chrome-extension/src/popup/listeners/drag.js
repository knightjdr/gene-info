let data;

export const drag = (e) => {
  e.preventDefault();

  const { id } = e.target;
  const mousePosition = e.clientY;

  // Update element position.
  const el = document.getElementById(id);
  const top = mousePosition - data.offset;
  el.style.top = `${top}px`;
};

export const dragEnd = (e) => {
  e.preventDefault();

  // destroy "hidden" drag image
  document.getElementById('drag_image').outerHTML = '';

  // Restore element appearence
  const el = document.getElementById(data.id);
  el.style.backgroundColor = 'transparent';
  el.style.position = 'static';
  el.style.width = 'auto';
  el.style.zIndex = 'auto';
};

export const dragStart = (e) => {
  const { id } = e.target;
  const { offsetTop, offsetWidth } = e.target;

  // Create "hidden" drag image
  const dragImage = document.createElement('div');
  dragImage.id = 'drag_image';
  dragImage.style.display = 'none';
  document.body.appendChild(dragImage);
  e.dataTransfer.setDragImage(dragImage, 0, 0);

  // Set drag event.
  data = {
    id,
    offset: e.clientY - offsetTop,
  };
  e.dataTransfer.setData('text/plain', id);
  e.dataTransfer.dropEffect = 'move';

  // Configure element for dragging
  const el = document.getElementById(id);
  const { color } = el.style;
  el.style.backgroundColor = color === '#333333' ? '#fafafa' : '#323639';
  el.style.position = 'absolute';
  el.style.top = `${offsetTop}px`;
  el.style.width = `${offsetWidth}px`;
  el.style.zIndex = 10;

  // Hide advanced settings if present.
  const settings = el.querySelector('.toggle-options');
  if (settings) {
    settings.style.display = 'none';
  }
};
