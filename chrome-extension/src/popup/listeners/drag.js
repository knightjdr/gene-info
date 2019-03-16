import updateTab from './update-tab';

export const data = {
  get: function getter(key) {
    return this.values[key];
  },
  set: function setter(key, value) {
    this.values[key] = value;
  },
  values: {},
};

// Move an item fromIndex toIndex in arr
export const arrayMove = (arr, fromIndex, toIndex) => {
  const reordered = [...arr];
  const item = reordered[fromIndex];
  reordered.splice(fromIndex, 1);
  reordered.splice(toIndex, 0, item);
  return reordered;
};

// Get the ID and top position of children in an element.
export const elementChildren = (element) => {
  const childData = [];
  const { children } = element;
  for (let i = 0; i < children.length; i += 1) {
    childData.push({
      id: children[i].id,
      top: children[i].offsetTop,
    });
  }
  return childData;
};

// Get ID and array index of item being moused over.
export const mouseOverID = (mousePosition, arr, startIndex) => {
  const lastIndex = arr.length - 1;
  if (mousePosition < arr[0].top) {
    return {
      dropBeforeID: arr[0].id,
      dropIndex: 0,
    };
  }
  for (let i = 0; i < lastIndex; i += 1) {
    if (
      mousePosition >= arr[i].top
      && mousePosition < arr[i + 1].top
    ) {
      return {
        dropBeforeID: arr[i + 1].id,
        dropIndex: i < startIndex ? i + 1 : i,
      };
    }
  }
  return {
    dropBeforeID: 'drag_noelement',
    dropIndex: lastIndex,
  };
};

export const drag = (e) => {
  const { id } = e.target;
  e.preventDefault();

  // Update element position.
  const el = document.getElementById(id);
  const mousePosition = data.get('y');
  const top = mousePosition - data.get('offset');
  el.style.top = `${top}px`;

  // Get drop position and update placeholder
  const insertPosition = mouseOverID(mousePosition, data.get('children'), data.get('startIndex'));
  data.set('dropBeforeID', insertPosition.dropBeforeID);
  data.set('dropIndex', insertPosition.dropIndex);
  el.parentElement.insertBefore(
    document.getElementById('drag_placeholder'),
    document.getElementById(insertPosition.dropBeforeID),
  );
};

export const dragOver = (e) => {
  data.set('y', e.clientY);
};

export const dragEnd = (e) => {
  e.preventDefault();
  const { id } = e.target;

  // Move element.
  const el = document.getElementById(id);
  const container = el.parentElement;
  container.insertBefore(el, document.getElementById(data.get('dropBeforeID')));

  // destroy "placeholder" drag image
  container.removeChild(document.getElementById('drag_placeholder'));

  // Restore element appearence
  el.setAttribute('style', `
    background-color: transparent;
    position: static;
    width: auto;
    z-index: auto;
  `);

  // destroy "hidden" drag image
  container.removeChild(document.getElementById('drag_image'));

  // Remove drag over listener from document.
  document.removeEventListener('dragover', dragOver);

  // Update user settings.
  const settingNames = data.get('children').map(child => child.id.replace('drag_', ''));
  const newOrder = arrayMove(settingNames, data.get('startIndex'), data.get('dropIndex'));
  chrome.storage.local.set({ setting_order: newOrder });
  updateTab('updateSetting', 'setting_order', newOrder);
};

export const dragStart = (e) => {
  const { clientY, dataTransfer, target } = e;
  const {
    id,
    offsetHeight,
    offsetTop,
    offsetWidth,
  } = target;

  // Get drag children and selected element index.
  const container = document.getElementById('settings_drop_container');
  const children = elementChildren(container);
  const startIndex = children.findIndex(child => child.id === id);

  // Firefox requires setData to be called.
  dataTransfer.setData('text/plain', '');

  /* Add drag over listener from document. This is needed because Firefox
  ** does not attach clientY to drag events. */
  document.addEventListener('dragover', dragOver);

  // Create hidden drag image
  const dragImage = document.createElement('div');
  dragImage.id = 'drag_image';
  dragImage.style.height = '1px';
  dragImage.style.opacity = 0;
  dragImage.style.width = '1px';
  container.appendChild(dragImage);
  dataTransfer.setDragImage(dragImage, 0, 0);

  // Create placeholder
  const el = document.getElementById(id);
  const placeholder = document.createElement('div');
  placeholder.id = 'drag_placeholder';
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

  // Set current data.
  data.set('children', children);
  data.set('offset', clientY - offsetTop);
  data.set('startIndex', startIndex);
  data.set('y', clientY);
};
