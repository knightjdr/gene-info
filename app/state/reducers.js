import { combineReducers } from 'redux';

// reducers
import searchTerm from './set/search-term-reducer';

const Reducers = combineReducers({
  searchTerm,
});
export default Reducers;
