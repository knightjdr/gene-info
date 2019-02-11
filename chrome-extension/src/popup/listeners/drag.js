let container;
let data;
let dragImage;
let placeholder;

const containerChildren = () => {
  const childData = [];
  const { children } = container;
  for (let i = 0; i < children.length; i += 1) {
    childData.push({
      id: children[i].id,
      top: children[i].offsetTop,
    });
  }
  return childData;
};

const mouseOverID = (mousePosition) => {
  const numChildren = data.children.length - 1;
  if (mousePosition < data.children[0].top) {
    return {
      dropBeforeID: data.children[0].id,
      dropIndex: 0,
    };
  } if (
    mousePosition >= data.children[numChildren].top
    && mousePosition < data.containerBottom
  ) {
    return {
      dropBeforeID: data.children[numChildren].id,
      dropIndex: numChildren,
    };
  }
  for (let i = 0; i < numChildren; i += 1) {
    if (
      mousePosition >= data.children[i].top
      && mousePosition < data.children[i + 1].top
    ) {
      return {
        dropBeforeID: data.children[i + 1].id,
        dropIndex: i,
      };
    }
  }
  return {
    dropBeforeID: 'drag_noelement',
    dropIndex: numChildren,
  };
};

export const drag = (e) => {
  e.preventDefault();

  // This conditional prevents firing of the drag event on dragend.
  if (e.screenY) {
    const { id } = e.target;
    const mousePosition = e.clientY;

    // Update element position.
    const el = document.getElementById(id);
    const top = mousePosition - data.offset;
    el.style.top = `${top}px`;

    // Get drop position and update placeholder
    const insertPosition = mouseOverID(mousePosition, data.startIndex);
    data.dropBeforeID = insertPosition.dropBeforeID;
    data.dropIndex = insertPosition.dropIndex;
    container.insertBefore(placeholder, document.getElementById(insertPosition.dropBeforeID));
  }
};

export const dragEnd = (e) => {
  e.preventDefault();

  // Move element.
  const el = document.getElementById(data.id);
  container.insertBefore(el, document.getElementById(data.dropBeforeID));

  // destroy "placeholder" drag image
  container.removeChild(placeholder);

  // Restore element appearence
  el.setAttribute('style', `
    background-color: transparent;
    position: static;
    top: auto;
    width: auto;
    z-index: auto;
  `);

  // destroy "hidden" drag image
  container.removeChild(dragImage);
};

export const dragStart = (e) => {
  const { id } = e.target;
  const { offsetHeight, offsetTop, offsetWidth } = e.target;

  // Get drag children and find element index.
  container = document.getElementById('settings-drop-container');
  const children = containerChildren();
  const startIndex = children.findIndex(child => child.id === id);

  // Create hidden drag image
  dragImage = document.createElement('div');
  dragImage.id = 'drag_image';
  dragImage.style.display = 'none';
  container.appendChild(dragImage);
  e.dataTransfer.setDragImage(dragImage, 0, 0);

  // Create placeholder
  const el = document.getElementById(id);
  placeholder = document.createElement('div');
  placeholder.id = 'drag-placeholder';
  placeholder.style.height = `${offsetHeight}px`;
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

  // Store current data.
  data = {
    children,
    containerBottom: container.offsetTop + container.offsetHeight,
    id,
    offset: e.clientY - offsetTop,
    startIndex,
  };
};
