import React from "react";
import { NotesListUI } from "../../ui/organisms";
import { NotesActionPanel, Note } from "../molecules";
import { AppTemplate } from "../templates";
import { useSelector } from "react-redux";

export function NotesPage({ navigation }) {
  const notes = useSelector((state) =>
    state.searchQuery
      ? state.notes.filter((note) =>
          note.title.toLowerCase().includes(state.searchQuery.toLowerCase())
        )
      : state.notes
  );

  const handlePressNote = (note) => navigation.navigate("NoteEdit", note);

  const renderItem = ({ item }) => (
    <Note item={item} onPress={() => handlePressNote(item)} />
  );

  return (
    <AppTemplate>
      <NotesActionPanel />
      <NotesListUI
        data={notes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id + ""}
      />
    </AppTemplate>
  );
}
