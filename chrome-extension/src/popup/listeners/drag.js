let container;
let data;
let dragImage;
let placeholder;

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
  container.removeChild(dragImage);

  // destroy "placeholder" drag image
  container.removeChild(placeholder);

  // Restore element appearence
  const el = document.getElementById(data.id);
  el.setAttribute('style', `
    background-color: transparent;
    position: static;
    top: auto;
    width: auto;
    z-index: auto;
  `);
};

export const dragStart = (e) => {
  container = document.getElementById('settings-drop-container');
  const { id } = e.target;
  const { offsetTop, offsetWidth } = e.target;

  // Create "hidden" drag image
  dragImage = document.createElement('div');
  dragImage.id = 'drag_image';
  dragImage.style.display = 'none';
  container.appendChild(dragImage);
  e.dataTransfer.setDragImage(dragImage, 0, 0);

  // Set drag event.
  e.dataTransfer.setData('text/plain', id);
  e.dataTransfer.dropEffect = 'move';

  // Create placeholder
  const el = document.getElementById(id);
  placeholder = document.createElement('div');
  placeholder.id = 'drag-placeholder';
  placeholder.style.width = `${offsetWidth}px`;
  container.insertBefore(placeholder, el);

  // Configure element for dragging
  const lightTheme = document.querySelector('.theme_light');
  el.setAttribute('style', `
    background-color: ${lightTheme ? '#fafafa' : '#323639'};
    position: absolute;
    top: ${offsetTop}px;
    width: ${offsetWidth}px;
    z-index: 10;
  `);

  // Hide advanced settings if present.
  const settings = el.querySelector('.toggle-options');
  if (settings) {
    settings.style.display = 'none';
  }

  // Store current data.
  data = {
    id,
    offset: e.clientY - offsetTop,
  };
};
