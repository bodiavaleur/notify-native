import React, { useState } from "react";
import { TextArea, TitleInput } from "../../ui/atoms";
import { EditActionPanel } from "../molecules";
import { AppTemplate } from "../templates";
import { removeNote, saveNote } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { theme } from "../../theme";

export function NoteEditPage({ navigation, route }) {
  const note = route.params;
  const [noteTitle, setNoteTitle] = useState(note.title);
  const [noteText, setNoteText] = useState(note.text);
  const dispatch = useDispatch();
  const appTheme = useSelector((state) => state.theme);

  const handleTitleChange = (title) => setNoteTitle(title);
  const handleTextChange = (text) => setNoteText(text);

  const handleRemoveNote = () => {
    dispatch(removeNote(note.id));
    navigation.goBack();
  };
  const handleSaveNote = () => {
    dispatch(saveNote({ ...note, title: noteTitle, text: noteText }));
    navigation.goBack();
  };

  return (
    <AppTemplate>
      <EditActionPanel
        removeAction={handleRemoveNote}
        saveAction={handleSaveNote}
      />
      <TitleInput
        placeholder="Title"
        placeholderTextColor={theme[appTheme].lightGray}
        onChangeText={handleTitleChange}
        value={noteTitle}
      />
      <TextArea
        placeholder="Text"
        placeholderTextColor={theme[appTheme].lightGray}
        multiline
        onChangeText={handleTextChange}
        value={noteText}
      />
    </AppTemplate>
  );
}
