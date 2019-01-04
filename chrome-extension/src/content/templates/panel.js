import backButton from './back-button';
import closeButton from './close-button';
import dragButton from './drag-button';
import fadeIn from '../transitions/fade-in';
import noResult from './no-result';
import reportDetails from './report-details';
import State from '../state';
import { addBackListener, removeBackListener } from '../listeners/back';
import { addCloseListener, removeCloseListener } from '../listeners/close';
import { addDragListener, removeDragListener } from '../listeners/drag';
import { addSelectListener, removeSelectListener } from '../listeners/select';

const panel = (reportIndex = 0) => {
  const result = State.results[State.results.length - 1];

  /* Use target element if it already exists, but remove listeners as they will
  ** be recreated. Otherwise create element. */
  let shouldFade = true;
  let targetEl = document.getElementById('gene-info__panel');
  if (targetEl) {
    removeBackListener();
    removeCloseListener();
    removeDragListener();
    removeSelectListener();
    shouldFade = false;
  } else {
    targetEl = document.createElement('aside');
    targetEl.id = 'gene-info__panel';
  }

  // Get class, html and style to apply
  const properties = result.length < 1 ? noResult() : reportDetails(result, reportIndex);
  targetEl.className = properties.className;
  targetEl.innerHTML = properties.html;

  // Add element, close button, listeners and fade in.
  document.body.insertBefore(targetEl, document.body.firstChild);
  backButton(targetEl, State.results.length);
  closeButton(targetEl);
  dragButton(targetEl);
  addBackListener();
  addCloseListener();
  addDragListener();
  addSelectListener(result);
  if (shouldFade) {
    fadeIn(targetEl);
  }
};

export default panel;
