import {
  CLEAR_SEARCH_TERM,
  SET_SEARCH_TERM,
} from './search-term-action';

const SearchTerm = (
  state = null,
  action,
) => {
  switch (action.type) {
    case CLEAR_SEARCH_TERM:
      return null;
    case SET_SEARCH_TERM:
      return action.term;
    default:
      return state;
  }
};
export default SearchTerm;
