import backButton from '../back-button';
import closeButton from '../close-button';
import dragButton from '../drag-button';
import fadeIn from '../../transitions/fade-in';
import noResult from './no-result';
import panelDetails from './panel-details';
import panelStyle from '../../style/panel';
import resizeButton from './resize-button';
import selectStyle from '../../style/select';
import State from '../../state';
import styleSelect from '../select';
import { addBackListener, removeBackListener } from '../../listeners/back';
import { addCloseListener, removeCloseListener } from '../../listeners/close';
import { addDragListener, removeDragListener } from '../../listeners/drag';
import { addGoListener, removeGoListener } from '../../listeners/go';
import { addInteractorListener, removeInteractorListener } from '../../listeners/interactor';
import { addInteractorSortListener, removeInteractorSortListener } from '../../listeners/interactor-sort';
import { addResizeListener, removeResizeListener } from '../../listeners/resize';
import { addSelectListener, removeSelectListener } from '../../listeners/select';

const createPanel = (reportIndex = 0, error) => {
  const result = State.results[State.results.length - 1];

  /* Use target element if it already exists, but remove listeners as they will
  ** be recreated. Otherwise create element. */
  let shouldFade = true;
  if (State.shadowRoot.getElementById('panel')) {
    removeBackListener();
    removeCloseListener();
    removeDragListener();
    removeGoListener();
    removeInteractorListener();
    removeInteractorSortListener();
    removeResizeListener();
    removeSelectListener();
    shouldFade = false;
  }

  // Get class, html and style to apply
  const html = error || result.length < 1
    ? noResult(error)
    : `${selectStyle}${panelDetails(result, reportIndex, State.style)}`;
  State.shadowRoot.innerHTML = `${panelStyle}${html}`;

  const panel = State.shadowRoot.getElementById('panel');
  // Reset state, add element, close button, listeners and fade in.
  State.reset();
  backButton(panel, State.results.length);
  closeButton(panel);
  dragButton(panel);
  resizeButton(panel);
  styleSelect(State.shadowRoot);
  addBackListener();
  addCloseListener();
  addDragListener();
  addGoListener();
  addInteractorListener();
  addInteractorSortListener();
  addResizeListener();
  addSelectListener(result);
  if (shouldFade) {
    fadeIn(panel);
  }
};

export default createPanel;
