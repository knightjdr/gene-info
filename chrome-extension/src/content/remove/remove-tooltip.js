import fadeOut from '../transitions/fade-out';
import State from '../state';
import { removeCloseListener } from '../listeners/close';
import { removeSelectListener } from '../listeners/select';
import { removeTooltipScrollListener } from '../listeners/tooltip-scroll';

const removeTooltip = () => {
  const backdrop = State.shadowRoot.getElementById('backdrop');
  if (backdrop) {
    State.clearReports();
    fadeOut(backdrop);
    removeCloseListener();
    removeSelectListener();
    removeTooltipScrollListener();
  }
};

export default removeTooltip;
