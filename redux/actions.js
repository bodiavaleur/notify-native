export const ADD_NOTE = "ADD_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const SAVE_NOTE = "SAVE_NOTE";

export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";
export const TOGGLE_THEME = "TOGGLE_THEME";

export const addNote = () => ({
  type: ADD_NOTE,
});

export const removeNote = (id) => ({
  type: REMOVE_NOTE,
  id,
});

export const saveNote = (note) => ({
  type: SAVE_NOTE,
  note,
});

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  query,
});

export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});
