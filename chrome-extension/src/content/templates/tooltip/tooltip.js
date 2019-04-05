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

const createTooltip = (event, error) => {
  const result = State.results[State.results.length - 1];

  /* Use target element if it already exists, but remove listeners as they will
   ** be recreated. Otherwise create element. */
  let shouldFade = true;
  if (State.shadowRoot.getElementById('panel')) {
    removeCloseListener();
    removeSelectListener();
    removeTooltipScrollListener();
    shouldFade = false;
  }

  const html = error || result.length < 1
    ? noResult(error)
    : `${selectStyle}${tooltipDetails(result, 0)}`;
  State.shadowRoot.innerHTML = `${tooltipStyle}${html}`;

  const tooltip = State.shadowRoot.getElementById('tooltip');

  // Add element, close button, listeners and fade in.
  closeButton(tooltip);
  styleSelect(State.shadowRoot);
  addCloseListener();
  addSelectListener(result);
  addTooltipScrollListener();

  const position = tooltipPosition(event, tooltip);
  tooltip.style.left = `${position.x}px`;
  tooltip.style.top = `${position.y}px`;

  if (shouldFade) {
    fadeIn(tooltip);
  }
};

export default createTooltip;
