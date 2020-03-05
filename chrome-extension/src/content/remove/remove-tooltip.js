import fadeOut from '../transitions/fade-out';
import State from '../state';
import { removeCloseListener } from '../listeners/close';
import { removeSelectListener } from '../listeners/select';
import { removeTooltipScrollListener } from '../listeners/tooltip-scroll';

const removeTooltip = () => {
  const tooltip = State.shadowRoot.getElementById('tooltip');
  if (tooltip) {
    State.clearReports();
    removeCloseListener();
    removeSelectListener();
    removeTooltipScrollListener();
    fadeOut(tooltip, State.shadowRoot);
  }
};

export default removeTooltip;
