export const CLEAR_SEARCH_TERM = 'CLEAR_SEARCH_TERM';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';

export const clearSearchTerm = () => ({
  type: 'CLEAR_SEARCH_TERM',
});

export const setSearchTerm = term => ({
  term,
  type: 'SET_SEARCH_TERM',
});
