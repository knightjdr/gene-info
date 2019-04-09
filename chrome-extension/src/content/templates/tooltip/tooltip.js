import closeButton from '../close-button';
import fadeIn from '../../transitions/fade-in';
import noResult from '../no-result/tooltip';
import tooltipPosition from '../../helpers/tooltip-position';
import selectStyle from '../../style/select';
import State from '../../state';
import styleSelect from '../select';
import tooltipDetails from './tooltip-details';
import tooltipStyle from '../../style/tooltip';
import { addCloseListener, removeCloseListener } from '../../listeners/close';
import { addSelectListener, removeSelectListener } from '../../listeners/select';
import { addTooltipScrollListener, removeTooltipScrollListener } from '../../listeners/tooltip-scroll';

const createTooltip = (event, error, reportIndex = 0) => {
  const result = State.results[State.results.length - 1];

  /* Use target element if it already exists, but remove listeners as they will
   ** be recreated. */
  let position;
  let shouldFade = true;
  let tooltip;
  if (State.shadowRoot.getElementById('tooltip')) {
    tooltip = State.shadowRoot.getElementById('tooltip');
    position = {
      left: tooltip.style.left,
      top: tooltip.style.top,
    };
    removeCloseListener();
    removeSelectListener();
    removeTooltipScrollListener();
    shouldFade = false;
  }

  // Create content.
  const html = error || result.length < 1
    ? noResult(error)
    : `${selectStyle}${tooltipDetails(result, reportIndex, shouldFade)}`;
  State.shadowRoot.innerHTML = `${tooltipStyle}${html}`;

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

  if (shouldFade) {
    fadeIn(tooltip);
  }
};

export default createTooltip;
