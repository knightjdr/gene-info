const isVisible = elem => (
  !!elem
  && !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length)
);

const isClickInside = (parent, event) => {
  const elements = event.composedPath();
  return elements.some(element => (
    element
    && element.querySelector
    && element.querySelector('.close-on-click-outside') !== null
  ));
};

const clickOutside = (element, func) => {
  function outsideClickListener(event) {
    if (!isClickInside(element, event) && isVisible(element)) {
      removeClickListener();
      if (func) {
        func();
      }
    }
  }

  function removeClickListener() {
    document.removeEventListener('click', outsideClickListener);
  }

  document.addEventListener('click', outsideClickListener);
};

export default clickOutside;
