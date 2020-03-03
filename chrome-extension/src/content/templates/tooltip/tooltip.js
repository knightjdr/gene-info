import addNodes from '../../helpers/add-nodes';
import closeButton from '../close-button';
import createNodes from './create-nodes';
import noResult from '../no-result/tooltip';
import removeAllChildren from '../../helpers/remove-all-children';
import State from '../../state';
import styleSelect from '../select';
import tooltipPosition from '../../helpers/tooltip-position';
import tooltipStyle from '../../style/tooltip';
import { addCloseListener, removeCloseListener } from '../../listeners/close';
import { addSelectListener, removeSelectListener } from '../../listeners/select';
import { addTooltipScrollListener, removeTooltipScrollListener } from '../../listeners/tooltip-scroll';


const createTooltip = (event, error, reportIndex = 0) => {
  const result = State.results[State.results.length - 1];

  /* Use target element if it already exists, but remove listeners as they will
   ** be recreated. */
  let fadeClass = 'panel_animate-fade';
  let position;
  let tooltip;
  if (State.shadowRoot.getElementById('tooltip')) {
    tooltip = State.shadowRoot.getElementById('tooltip');
    if (reportIndex > 0) {
      position = {
        left: tooltip.style.left,
        top: tooltip.style.top,
      };
    }
    removeCloseListener();
    removeSelectListener();
    removeTooltipScrollListener();
    removeAllChildren(State.shadowRoot);
    fadeClass = 'panel_animate-show';
  }

  // Create content.
  const nodes = error || result.length < 1
    ? noResult(error, fadeClass)
    : [createNodes(result, reportIndex, fadeClass)];
  addNodes(State.shadowRoot, [...tooltipStyle, ...nodes]);

  // Attach listeners
  tooltip = State.shadowRoot.getElementById('tooltip');
  closeButton(tooltip);
  styleSelect(State.shadowRoot);
  addCloseListener();
  addSelectListener(result);
  addTooltipScrollListener();

  // Set position, using previous position if the tooltip is already visible.
  position = tooltipPosition(event, tooltip, position);
  tooltip.style.left = `${position.x}px`;
  tooltip.style.top = `${position.y}px`;
};

export default createTooltip;
