import {
  SET_TAB,
} from './tab-action';

const Tab = (
  state = 0,
  action,
) => {
  switch (action.type) {
    case SET_TAB:
      return action.index;
    default:
      return state;
  }
};
export default Tab;
