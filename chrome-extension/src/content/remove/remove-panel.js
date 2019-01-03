import fadeOut from '../transitions/fade-out';
import State from '../state';
import { removeBackListener } from '../listeners/back';
import { removeCloseListener } from '../listeners/close';
import { removeDragListener } from '../listeners/drag';
import { removeSelectListener } from '../listeners/select';

const removePanel = () => {
  const panel = document.getElementById('gene-info__panel');
  if (panel) {
    State.clearReports();
    window.onscroll = null;
    /* document.querySelectorAll('.gene-info__go-selector').forEach((element) => {
      element.removeEventListener('click', namespaceSelect);
    }); */
    removeCloseListener();
    removeBackListener();
    removeDragListener();
    removeSelectListener();
    fadeOut(panel);
  }
};

export default removePanel;
