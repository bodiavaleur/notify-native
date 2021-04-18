import {
  ADD_NOTE,
  REMOVE_NOTE,
  SAVE_NOTE,
  SET_SEARCH_QUERY,
  TOGGLE_THEME,
} from "./actions";

const initialState = {
  notes: [],
  searchQuery: "",
  theme: "light",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      const noteTemplate = {
        id: +new Date(),
        title: "",
        text: "",
        dateChanged: +new Date(),
      };
      return { ...state, notes: [...state.notes, noteTemplate] };

    case REMOVE_NOTE:
      const filteredNotes = state.notes.filter((note) => note.id !== action.id);
      return { ...state, notes: filteredNotes };

    case SAVE_NOTE:
      const newNotes = state.notes.map((note) => {
        if (note.id === action.note.id) {
          note = action.note;
        }

        return note;
      });

      return { ...state, notes: newNotes };

    case SET_SEARCH_QUERY:
      return { ...state, searchQuery: action.query };

    case TOGGLE_THEME:
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
};
