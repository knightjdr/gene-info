import fadeOut from '../transitions/fade-out';
import State from '../state';
import { removeBackListener } from '../listeners/back';
import { removeCloseListener } from '../listeners/close';
import { removeDragListener } from '../listeners/drag';
import { removeGoListener } from '../listeners/go';
import { removeInteractorListener } from '../listeners/interactor';
import { removeResizeListener } from '../listeners/resize';
import { removeSelectListener } from '../listeners/select';

const removePanel = () => {
  const panel = State.shadowRoot.getElementById('panel');
  if (panel) {
    State.clearReports();
    window.onscroll = null;
    removeCloseListener();
    removeBackListener();
    removeDragListener();
    removeGoListener();
    removeInteractorListener();
    removeResizeListener();
    removeSelectListener();
    fadeOut(panel);
  }
};

export default removePanel;
