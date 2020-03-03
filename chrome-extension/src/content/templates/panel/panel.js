import addNodes from '../../helpers/add-nodes';
import backButton from '../back-button';
import closeButton from '../close-button';
import createNodes from './create-nodes';
import dragButton from '../drag-button';
import noResult from '../no-result/panel';
import panelStyle from '../../style/panel';
import removeAllChildren from '../../helpers/remove-all-children';
import resizeButton from './resize-button';
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
import { addSpeciesListener } from '../../listeners/species-change';

const createPanel = (reportIndex = 0, error) => {
  const result = State.results[State.results.length - 1];

  /* Use target element if it already exists, but remove listeners as they will
  ** be recreated. Otherwise create element. */
  let fadeClass = 'panel_animate-fade';
  if (State.shadowRoot.getElementById('panel')) {
    removeBackListener();
    removeCloseListener();
    removeDragListener();
    removeGoListener();
    removeInteractorListener();
    removeInteractorSortListener();
    removeResizeListener();
    removeSelectListener();
    removeAllChildren(State.shadowRoot);
    fadeClass = 'panel_animate-show';
  }

  // Get class, html and style to apply
  const nodes = error || result.length < 1
    ? noResult(error, State.style, fadeClass)
    : [createNodes(result, reportIndex, State.style, fadeClass)];
  addNodes(State.shadowRoot, [...panelStyle, ...nodes]);

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
  addSpeciesListener();
};

export default createPanel;
