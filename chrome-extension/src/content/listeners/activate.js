import retrieveInfo from '../retrieve/retrieve';
import State from '../state';

function mousedown() {
  State.updateMdTime();
}

const activateListener = (activate) => {
  if (activate === 'disable') {
    document.body.removeEventListener('dblclick', retrieveInfo);
    document.body.removeEventListener('mousedown', mousedown);
    document.body.removeEventListener('mouseup', retrieveInfo);
  } else if (activate === 'drag') {
    document.body.removeEventListener('dblclick', retrieveInfo);
    document.body.addEventListener('mousedown', mousedown);
    document.body.addEventListener('mouseup', retrieveInfo);
  } else {
    document.body.addEventListener('dblclick', retrieveInfo);
    document.body.removeEventListener('mousedown', mousedown);
    document.body.removeEventListener('mouseup', retrieveInfo);
  }
};

export default activateListener;
