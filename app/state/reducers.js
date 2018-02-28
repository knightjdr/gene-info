import { combineReducers } from 'redux';

// reducers
import searchTerm from './set/search-term-reducer';
import tab from './set/tab-reducer';

const Reducers = combineReducers({
  searchTerm,
  tab,
});
export default Reducers;
